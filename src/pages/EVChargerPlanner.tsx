import SEOHead from "@/components/SEO/SEOHead";
import { useEffect } from "react";

const EVChargerPlanner = () => {
  useEffect(() => {
    // Add the 3D configurator script when component mounts
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
import * as THREE from "https://unpkg.com/three@0.156.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.156.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.156.1/examples/jsm/loaders/GLTFLoader.js";

const WEBHOOK_URL = "https://YOUR_WEBHOOK_URL_HERE"; // <-- set this to Zapier/Make/Server

// Brand presets (logo + hero image + amps + cost adj + optional glTF model)
const BRANDS = {
  custom:     { name:"Custom", amps:null, adj:1.00, logo:"", image:"", modelUrl:"" },
  tesla:      { name:"Tesla Wall Connector", amps:60, adj:1.12, logo:"/assets/brand/tesla.png",      image:"/assets/brand/tesla-hero.jpg",      modelUrl:"/assets/models/tesla_wall_connector.glb" },
  wallbox:    { name:"Wallbox",             amps:50, adj:1.06, logo:"/assets/brand/wallbox.png",    image:"/assets/brand/wallbox-hero.jpg",    modelUrl:"/assets/models/wallbox.glb" },
  chargepoint:{ name:"ChargePoint",         amps:50, adj:1.08, logo:"/assets/brand/chargepoint.png",image:"/assets/brand/chargepoint-hero.jpg",modelUrl:"/assets/models/chargepoint.glb" },
  emporia:    { name:"Emporia",             amps:40, adj:1.00, logo:"/assets/brand/emporia.png",    image:"/assets/brand/emporia-hero.jpg",    modelUrl:"/assets/models/emporia.glb" }
};

const canvas = document.getElementById('ev3d');
const wrap = document.getElementById('ev3d-wrap');
const statFt = document.getElementById('stat-ft');
const statElbows = document.getElementById('stat-elbows');
const statCost = document.getElementById('stat-cost');
const statTrench = document.getElementById('stat-trench');

const uiBrand = document.getElementById('ui-brand');
const uiAmps = document.getElementById('ui-amps');
const uiType = document.getElementById('ui-type');
const uiPPF = document.getElementById('ui-ppf');
const uiBase = document.getElementById('ui-base');
const uiTrenchFt = document.getElementById('ui-trench-ft');
const uiTrenchPPF = document.getElementById('ui-trench-ppf');
const uiPanelLoc = document.getElementById('ui-panel-loc');
const uiMount = document.getElementById('ui-mount');
const uiModel = document.getElementById('ui-model');
const uiMountIn = document.getElementById('ui-mount-in');
const brandLogo = document.getElementById('brand-logo');

let DPR = Math.min(2, window.devicePixelRatio||1);
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
renderer.setPixelRatio(DPR);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 800);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.05;
controls.enablePan = false; controls.minDistance = 10; controls.maxDistance = 70;
controls.target.set(0,4,0);

// Units: 1 = 1 foot
const GARAGE = { width:20, depth:20, height:9 };

// Lights
scene.add(new THREE.AmbientLight(0x99bbff, 0.55));
const dir = new THREE.DirectionalLight(0xffffff, 1.2); dir.position.set(6,10,6); scene.add(dir);
scene.add(new THREE.HemisphereLight(0x88aaff, 0x223355, 0.55));

// Floor
const floor = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.width, GARAGE.depth), new THREE.MeshStandardMaterial({color:0x0e1733, metalness:0.1, roughness:0.85}));
floor.rotation.x = -Math.PI/2; scene.add(floor);

// Walls (main)
const wallMat = new THREE.MeshStandardMaterial({color:0x121a3a, roughness:0.92, metalness:0.05});
const backWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.width, GARAGE.height), wallMat.clone());
backWall.position.set(0, GARAGE.height/2, -GARAGE.depth/2); scene.add(backWall);
const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.depth, GARAGE.height), wallMat.clone());
rightWall.rotation.y = -Math.PI/2; rightWall.position.set(GARAGE.width/2, GARAGE.height/2, 0); scene.add(rightWall);

// Detached wall (box geometry with thickness at trench end)
const detachedGroup = new THREE.Group(); scene.add(detachedGroup);
const detachedThickness = 0.5; // ft
const detachedWall = new THREE.Mesh(new THREE.BoxGeometry(detachedThickness, GARAGE.height, 12), wallMat.clone());
detachedWall.rotation.y = -Math.PI/2;
detachedGroup.add(detachedWall);
// Mount target marker
const targetMarker = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.28, 24), new THREE.MeshBasicMaterial({color:0x4af2b8}));
targetMarker.rotation.y = -Math.PI/2; targetMarker.visible = false;
detachedGroup.add(targetMarker);
detachedGroup.visible = false;

function updateDetachedWall(){
  const T = Number(document.getElementById('ui-trench-ft').value||0);
  if(T>0){
    detachedGroup.visible = true;
    detachedGroup.position.set(GARAGE.width/2, 0, GARAGE.depth/2 + T);
    // center the wall in group
    detachedWall.position.set(0, GARAGE.height/2, 0);
    // target marker height
    const hFeet = Number(document.getElementById('ui-mount-in').value||48)/12;
    targetMarker.visible = true;
    targetMarker.position.set(detachedThickness/2 + 0.01, hFeet, 0); // slightly off wall
  } else {
    detachedGroup.visible = false; targetMarker.visible = false;
  }
}

// Panel (two locations)
const panel = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2, 0.25), new THREE.MeshStandardMaterial({color:0x4b5563, metalness:0.3, roughness:0.6}));
scene.add(panel);
function applyPanelLocation(){
  if(document.getElementById('ui-panel-loc').value==='back-left'){ panel.position.set(-GARAGE.width*0.35, 5, -GARAGE.depth/2 + 0.13); }
  else { panel.position.set(GARAGE.width/2 - 0.13, 5, GARAGE.depth*0.35); }
}
applyPanelLocation();

// Charger node: either built-in or glTF
const builtInMat = new THREE.MeshStandardMaterial({color:0x89f0ce, emissive:0x0e3d2f, emissiveIntensity:0.25, roughness:0.4, metalness:0.1});
const chargerBuiltIn = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 0.3), builtInMat);
let chargerGLTF = null;
const charger = new THREE.Group(); charger.add(chargerBuiltIn); scene.add(charger);
charger.position.set(GARAGE.width*0.25, 4, -GARAGE.depth/2 + 0.15);
const loader = new GLTFLoader();

async function applyChargerModel(){
  // clean old glTF
  if(chargerGLTF){ charger.remove(chargerGLTF); chargerGLTF.traverse(o=>{ if(o.geometry) o.geometry.dispose(); if(o.material) o.material.dispose?.(); }); chargerGLTF=null; }
  const brand = BRANDS[document.getElementById('ui-brand').value] || BRANDS.custom;
  const useBrandModel = (document.getElementById('ui-model').value==='brand' && brand.modelUrl);
  chargerBuiltIn.visible = !useBrandModel;
  if(!useBrandModel) return;
  try{
    const gltf = await loader.loadAsync(brand.modelUrl);
    chargerGLTF = gltf.scene;
    // reasonable default scale; adjust if your model differs
    chargerGLTF.scale.set(1,1,1);
    charger.add(chargerGLTF);
  }catch(e){
    console.warn('Model load failed; fallback to built-in', e);
    chargerBuiltIn.visible = true;
  }
}

// Raycaster for dragging
const ray = new THREE.Raycaster(); const pointer = new THREE.Vector2();
let dragging = false, dragWall = null;

function fit(){
  const r = wrap.getBoundingClientRect();
  const W = Math.max(640, Math.floor(r.width));
  const H = Math.max(440, Math.floor(r.height));
  renderer.setSize(W, H, false);
  camera.aspect = W/H; camera.updateProjectionMatrix();
  camera.position.set(10, 8, 24); controls.update();
}
fit();

function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
function snapHalf(v){ return Math.round(v*2)/2; }

function wallIntersect(ev){
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  ray.setFromCamera(pointer, camera);
  const hits = ray.intersectObject(charger, true);
  const walls = [backWall, rightWall].concat(detachedGroup.visible ? [detachedWall] : []);
  const wallHits = ray.intersectObjects(walls, false);
  return {hits, wallHits};
}

renderer.domElement.addEventListener('pointerdown', (e)=>{
  const {hits, wallHits} = wallIntersect(e);
  if(hits.length){ dragging = true; dragWall = wallHits.length ? wallHits[0].object : backWall; controls.enabled = false; }
});

window.addEventListener('pointermove', (e)=>{
  if(!dragging) return;
  const {wallHits} = wallIntersect(e);
  const hit = wallHits.length ? wallHits[0] : null;
  const wall = hit ? hit.object : dragWall; if(!wall || !hit) return;
  const p = hit.point.clone();
  const mode = document.getElementById('ui-mount').value;

  const placeBack = ()=>{
    const x = clamp(p.x, -GARAGE.width/2 + 0.5, GARAGE.width/2 - 0.5);
    const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
    charger.position.set(snapHalf(x), snapHalf(y), -GARAGE.depth/2 + 0.15);
  };
  const placeRight = ()=>{
    const z = clamp(p.z, -GARAGE.depth/2 + 0.5, GARAGE.depth/2 - 0.5);
    const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
    charger.position.set(GARAGE.width/2 - 0.15, snapHalf(y), snapHalf(z));
  };
  const placeDetached = ()=>{
    const T = Number(document.getElementById('ui-trench-ft').value||0);
    const zMin = GARAGE.depth/2 + T - 6, zMax = GARAGE.depth/2 + T + 6;
    const z = clamp(p.z, zMin, zMax);
    const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
    charger.position.set(GARAGE.width/2 - 0.15, snapHalf(y), snapHalf(z));
  };

  if(mode==='back') placeBack();
  else if(mode==='right') placeRight();
  else if(mode==='detached' && detachedGroup.visible) placeDetached();
  else {
    if(wall===backWall) placeBack();
    else if(wall===rightWall) placeRight();
    else if(wall===detachedWall) placeDetached();
  }

  drawConduit();
});

window.addEventListener('pointerup', ()=>{ dragging=false; controls.enabled=true; });

// Trench line (dashed)
let trenchLine = null;
function drawTrenchLine(lenFt){
  if(trenchLine){ scene.remove(trenchLine); trenchLine.geometry.dispose(); trenchLine.material.dispose(); trenchLine=null; }
  if(lenFt<=0) return;
  const start = new THREE.Vector3(GARAGE.width/2, 0.01, GARAGE.depth/2);
  const end   = new THREE.Vector3(GARAGE.width/2, 0.01, GARAGE.depth/2 + lenFt);
  const geo = new THREE.BufferGeometry().setFromPoints([start,end]);
  trenchLine = new THREE.Line(geo, new THREE.LineDashedMaterial({color:0x4af2b8, dashSize:1, gapSize:1}));
  trenchLine.computeLineDistances(); scene.add(trenchLine);
}

// Conduit line
let conduitLine = null;

// Route: panel → corner → (drop) → trench → (rise to target height) → charger
function computeRoute(){
  const pPanel = panel.position.clone();
  const pCh = charger.position.clone();
  const trenchFt = Number(document.getElementById('ui-trench-ft').value||0);
  const targetH = Number(document.getElementById('ui-mount-in').value||48)/12; // feet

  const onBack = Math.abs(pCh.z + GARAGE.depth/2 - 0.15) < 0.3;
  const onRight = Math.abs(pCh.x - (GARAGE.width/2 - 0.15)) < 0.3;
  const onDetached = detachedGroup.visible && Math.abs(pCh.x - (GARAGE.width/2 - 0.15)) < 0.4 && pCh.z > GARAGE.depth/2 + trenchFt - 6;

  const pts = []; let elbows = 0; const add=v=>pts.push(v.clone());

  add(pPanel);

  if(onDetached){
    const corner = (document.getElementById('ui-panel-loc').value==='back-left')
      ? new THREE.Vector3(GARAGE.width/2 - 0.2, pPanel.y, -GARAGE.depth/2 + 0.15)
      : new THREE.Vector3(GARAGE.width/2 - 0.2, pPanel.y,  GARAGE.depth/2 - 0.15);
    add(corner); elbows++;
    const drop = corner.clone(); drop.y = 1.0; add(drop); elbows++;
    const trenchEnd = new THREE.Vector3(GARAGE.width/2 - 0.2, 1.0, GARAGE.depth/2 + trenchFt - 0.15);
    add(trenchEnd);
    const rise = trenchEnd.clone(); rise.y = targetH; add(rise); elbows++;
    const toCh = new THREE.Vector3(pCh.x, targetH, pCh.z); add(toCh); elbows++;
  } else if(onBack){
    add(new THREE.Vector3(pCh.x, pPanel.y, pPanel.z)); elbows++;
    add(new THREE.Vector3(pCh.x, pCh.y - 0.7, pCh.z)); elbows++;
  } else if(onRight){
    add(new THREE.Vector3(pPanel.x, pCh.y, pCh.z)); elbows++;
    add(new THREE.Vector3(pCh.x, pCh.y, pCh.z)); elbows++;
  } else {
    const corner = new THREE.Vector3(GARAGE.width/2 - 0.2, pPanel.y, -GARAGE.depth/2 + 0.15);
    add(corner); elbows++;
    add(new THREE.Vector3(corner.x, pCh.y, corner.z)); elbows++;
    add(pCh); elbows++;
  }

  let len = 0; for(let i=0;i<pts.length-1;i++) len += pts[i].distanceTo(pts[i+1]);

  return {points:pts, elbows, lenFt:len, trenchFt:(onDetached?trenchFt:0)};
}

function drawConduit(){
  updateDetachedWall();
  const {points, elbows, lenFt, trenchFt} = computeRoute();

  if(conduitLine){ scene.remove(conduitLine); conduitLine.geometry.dispose(); conduitLine.material.dispose(); }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  conduitLine = new THREE.Line(geo, new THREE.LineBasicMaterial({color:0x7fd1ff, transparent:true, opacity:0.9}));
  scene.add(conduitLine);

  drawTrenchLine(trenchFt);

  // Stats
  document.getElementById('stat-ft').textContent = Math.round(lenFt).toString();
  document.getElementById('stat-elbows').textContent = elbows.toString();
  document.getElementById('stat-trench').textContent = Math.round(trenchFt).toString();

  // Cost model
  const ppf = Number(document.getElementById('ui-ppf').value||12);
  const base = Number(document.getElementById('ui-base').value||450);
  const type = document.getElementById('ui-type').value;
  const amps = Number(document.getElementById('ui-amps').value);
  const brandAdj = BRANDS[document.getElementById('ui-brand').value]?.adj ?? 1.0;
  const materialAdj = (type==='PVC'? 1.00 : 1.15);
  const ampAdj = amps>=60 ? 1.15 : amps>=50 ? 1.08 : 1.0;
  const trenchCost = trenchFt * Number(document.getElementById('ui-trench-ppf').value||18);

  const est = Math.round(base + Math.round(lenFt) * ppf * materialAdj * ampAdj * brandAdj + trenchCost);
  document.getElementById('stat-cost').textContent = est.toLocaleString();
}

// PNG/JPEG export
function exportImage(type='image/png', quality=0.92){
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL(type, quality);
}
function exportPNG(){ const data = exportImage('image/png'); const a = document.createElement('a'); a.download='ev_charger_plan.png'; a.href=data; a.click(); }

// Send to CRM webhook (includes brand logo/image, page URL, UTM, JPEG)
async function sendPlan(){
  try{
    const pageUrl = location.href;
    const url = new URL(pageUrl);
    const utm = Object.fromEntries(Array.from(url.searchParams.entries()).filter(([k])=>k.startsWith('utm_')));

    const jpeg = exportImage('image/jpeg', 0.85);
    const brand = BRANDS[document.getElementById('ui-brand').value] || BRANDS.custom;

    const payload = {
      page_url: pageUrl,
      town_slug: (location.pathname.match(/ev-charger-installation-([^/]+)/i)||[])[1] || null,
      utm,
      brand: {
        key: document.getElementById('ui-brand').value,
        name: brand.name,
        logo_url: brand.logo || null,
        image_url: brand.image || null,
        model_url: (document.getElementById('ui-model').value==='brand' ? brand.modelUrl || null : null)
      },
      amps: Number(document.getElementById('ui-amps').value),
      panel_location: document.getElementById('ui-panel-loc').value,
      mount_wall: document.getElementById('ui-mount').value,
      mount_height_in: Number(document.getElementById('ui-mount-in').value),
      conduit_type: document.getElementById('ui-type').value,
      price_per_ft: Number(document.getElementById('ui-ppf').value),
      base_labor: Number(document.getElementById('ui-base').value),
      trench_ft: Number(document.getElementById('ui-trench-ft').value),
      trench_price_per_ft: Number(document.getElementById('ui-trench-ppf').value),
      conduit_ft: Number(document.getElementById('stat-ft').textContent),
      elbows: Number(document.getElementById('stat-elbows').textContent),
      est_cost: Number(document.getElementById('stat-cost').textContent.replace(/,/g,'')),
      charger_position_ft: { x: charger.position.x, y: charger.position.y, z: charger.position.z },
      panel_position_ft: { x: panel.position.x, y: panel.position.y, z: panel.position.z },
      plan_image_jpeg: jpeg
    };

    await fetch(WEBHOOK_URL, {method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
    alert("Plan sent. We'll follow up with your quote.");
  }catch(e){
    console.error(e); alert("Couldn't send plan. Check webhook URL.");
  }
}

// Events
document.getElementById('btn-export').addEventListener('click', exportPNG);
document.getElementById('btn-send').addEventListener('click', sendPlan);
document.getElementById('btn-reset').addEventListener('click', ()=>{
  document.getElementById('ui-brand').value="custom"; 
  document.getElementById('ui-model').value="brand"; 
  document.getElementById('brand-logo').src="";
  document.getElementById('ui-amps').value="40"; 
  document.getElementById('ui-type').value="EMT"; 
  document.getElementById('ui-ppf').value=12; 
  document.getElementById('ui-base').value=450;
  document.getElementById('ui-trench-ft').value=0; 
  document.getElementById('ui-trench-ppf').value=18; 
  document.getElementById('ui-panel-loc').value="back-left"; 
  document.getElementById('ui-mount').value="auto"; 
  document.getElementById('ui-mount-in').value=48;
  applyPanelLocation(); updateDetachedWall(); charger.position.set(GARAGE.width*0.25, 4, -GARAGE.depth/2 + 0.15);
  applyChargerModel(); drawConduit();
});

['ui-amps', 'ui-type', 'ui-ppf', 'ui-base', 'ui-trench-ft', 'ui-trench-ppf', 'ui-panel-loc', 'ui-mount', 'ui-mount-in'].forEach(id=>{
  const el = document.getElementById(id);
  el.addEventListener(el.tagName==='SELECT'?'change':'input', ()=>{ applyPanelLocation(); updateDetachedWall(); drawConduit(); });
});

document.getElementById('ui-brand').addEventListener('change', ()=>{
  const b = BRANDS[document.getElementById('ui-brand').value] || BRANDS.custom;
  document.getElementById('brand-logo').src = b.logo || "";
  if(b.amps) document.getElementById('ui-amps').value = String(b.amps);
  applyChargerModel(); drawConduit();
});
document.getElementById('ui-model').addEventListener('change', ()=>{ applyChargerModel(); });

function animate(){ requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }
applyChargerModel(); drawConduit(); animate();
window.addEventListener('resize', ()=>{ const r=wrap.getBoundingClientRect(); renderer.setSize(r.width, Math.max(440, Math.floor(r.height)), false); camera.aspect=r.width/Math.max(440, Math.floor(r.height)); camera.updateProjectionMatrix(); });
`;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "EV Charger Planner - 3D Installation Configurator",
      "description": "Interactive 3D tool to plan and visualize your EV charger installation with real-time cost estimates and professional layout planning.",
      "provider": {
        "@type": "Organization",
        "name": "EV Charger Installation Suffolk",
        "url": "https://evchargerinstallationsuffolk.com"
      },
      "serviceType": "EV Charger Installation Planning",
      "areaServed": {
        "@type": "State",
        "name": "New York"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EV Charger Planner - 3D Installation Configurator | Suffolk County"
        description="Plan your EV charger installation with our interactive 3D configurator. Visualize placement, get real-time cost estimates, and design the perfect charging setup for your home."
        keywords="EV charger planner, 3D configurator, installation planning, cost estimator, Tesla charger, home charging setup, Suffolk County"
        schemaData={schemaData}
      />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary to-primary-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EV Charger Planner
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Design your perfect EV charging setup with our interactive 3D configurator. 
            Visualize placement, plan conduit routes, and get instant cost estimates.
          </p>
        </div>
      </section>

      {/* 3D Configurator Section */}
      <section id="ev3d-wrap" style={{position:'relative', minHeight:'72vh', background:'#0b1020', color:'#fff'}}>
        <canvas id="ev3d"></canvas>

        {/* UI Overlay */}
        <div id="ev3d-ui" style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'grid',
          gap: '10px',
          padding: '12px',
          borderRadius: '12px',
          background: 'rgba(10,16,32,.6)',
          backdropFilter: 'blur(6px)',
          maxWidth: '380px'
        }}>
          <h3 style={{margin: '0 0 4px'}}>EV Charger Configurator</h3>
          <small>Drag the charger on a wall. Scroll/drag to look around.</small>

          <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <label style={{flex: 1}}>Brand preset
              <select id="ui-brand" style={{width: '100%'}}>
                <option value="custom" selected>Custom</option>
                <option value="tesla">Tesla Wall Connector</option>
                <option value="wallbox">Wallbox</option>
                <option value="chargepoint">ChargePoint</option>
                <option value="emporia">Emporia</option>
              </select>
            </label>
            <img id="brand-logo" src="" alt="" style={{
              width: '48px',
              height: '48px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 4px rgba(0,0,0,.4))'
            }} />
          </div>

          <label>Charger model
            <select id="ui-model">
              <option value="brand" selected>Use brand model (if available)</option>
              <option value="none">Built-in block</option>
            </select>
          </label>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
            <label>Amps
              <select id="ui-amps">
                <option value="40">40A</option>
                <option value="50">50A</option>
                <option value="60">60A</option>
              </select>
            </label>
            <label>Panel location
              <select id="ui-panel-loc">
                <option value="back-left" selected>Back wall (left)</option>
                <option value="right-front">Right wall (near front)</option>
              </select>
            </label>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
            <label>Mount wall
              <select id="ui-mount">
                <option value="auto" selected>Auto</option>
                <option value="back">Back wall</option>
                <option value="right">Right wall</option>
                <option value="detached">Detached wall</option>
              </select>
            </label>
            <label>Detached mount height (in)
              <input id="ui-mount-in" type="number" min="18" max="72" step="1" defaultValue="48" />
            </label>
          </div>

          <label>Conduit
            <select id="ui-type">
              <option value="EMT" selected>EMT (interior)</option>
              <option value="PVC">PVC (exterior)</option>
            </select>
          </label>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
            <label>$ / ft conduit <input id="ui-ppf" type="number" defaultValue="12" min="1" step="1" /></label>
            <label>Base labor $ <input id="ui-base" type="number" defaultValue="450" min="0" step="25" /></label>
          </div>

          <details id="detachedBox" open>
            <summary>Detached garage / trench</summary>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '6px'}}>
              <label>Trench ft <input id="ui-trench-ft" type="number" defaultValue="0" min="0" step="5" /></label>
              <label>$ / ft trench <input id="ui-trench-ppf" type="number" defaultValue="18" min="0" step="1" /></label>
            </div>
            <small>Detached wall appears at trench end. Route auto-drops to 1ft, crosses trench, then rises to your target height.</small>
          </details>

          <div id="ev3d-stats" style={{
            borderTop: '1px solid rgba(255,255,255,.15)',
            paddingTop: '8px',
            display: 'grid',
            gap: '4px',
            fontFamily: 'ui-monospace,Menlo,Monaco,Consolas'
          }}>
            <div>Conduit: <b><span id="stat-ft">0</span> ft</b></div>
            <div>Elbows: <b><span id="stat-elbows">0</span></b></div>
            <div>Trench: <b><span id="stat-trench">0</span> ft</b></div>
            <div>Est. cost: <b>$<span id="stat-cost">0</span></b></div>
          </div>

          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            <button id="btn-export" style={{flex: 1}}>Export PNG</button>
            <button id="btn-send" style={{flex: 1}}>Send Plan</button>
            <button id="btn-reset" style={{flex: 1}}>Reset</button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How to Use the 3D Configurator</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Choose Your Setup</h3>
                <p>Select your preferred EV charger brand, amperage, and installation requirements using the control panel.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">2. Position the Charger</h3>
                <p>Drag the charger to your desired wall location. The system automatically calculates optimal conduit routing.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">3. Get Your Estimate</h3>
                <p>Review real-time cost calculations and export your plan or send it directly to our installation team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVChargerPlanner;