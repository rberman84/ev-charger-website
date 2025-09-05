import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

// Define types for dynamic imports
interface OrbitControls {
  enabled: boolean;
  enableDamping: boolean;
  dampingFactor: number;
  enablePan: boolean;
  minDistance: number;
  maxDistance: number;
  target: THREE.Vector3;
  update(): void;
  dispose(): void;
}

interface GLTFLoader {
  loadAsync(url: string): Promise<{ scene: THREE.Object3D }>;
}

// Brand presets with logos, models, and cost adjustments
const BRANDS = {
  custom: { name: "Custom", amps: null, adj: 1.00, logo: "", image: "", modelUrl: "" },
  tesla: { name: "Tesla Wall Connector", amps: 60, adj: 1.12, logo: "/assets/brand/tesla.png", image: "/assets/brand/tesla-hero.jpg", modelUrl: "/assets/models/tesla_wall_connector.glb" },
  wallbox: { name: "Wallbox", amps: 50, adj: 1.06, logo: "/assets/brand/wallbox.png", image: "/assets/brand/wallbox-hero.jpg", modelUrl: "/assets/models/wallbox.glb" },
  chargepoint: { name: "ChargePoint", amps: 50, adj: 1.08, logo: "/assets/brand/chargepoint.png", image: "/assets/brand/chargepoint-hero.jpg", modelUrl: "/assets/models/chargepoint.glb" },
  emporia: { name: "Emporia", amps: 40, adj: 1.00, logo: "/assets/brand/emporia.png", image: "/assets/brand/emporia-hero.jpg", modelUrl: "/assets/models/emporia.glb" }
};

const WEBHOOK_URL = "https://YOUR_WEBHOOK_URL_HERE"; // Configure webhook URL for CRM integration

const EV3DConfigurator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({ feet: 0, elbows: 0, cost: 0, trench: 0 });
  const [showControls, setShowControls] = useState(false);
  const [config, setConfig] = useState({
    brand: "custom",
    model: "brand",
    amps: 40,
    type: "EMT",
    ppf: 12,
    base: 450,
    panelLoc: "back-left",
    mount: "auto",
    mountIn: 48,
    trenchFt: 0,
    trenchPpf: 18
  });
  
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;

    let W = 0, H = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(DPR);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 800);

    // Import controls and loader dynamically
    let controls: OrbitControls;
    let loader: GLTFLoader;
    
    const initThree = async () => {
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      
      controls = new OrbitControls(camera, renderer.domElement) as unknown as OrbitControls;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enablePan = false;
      controls.minDistance = 10;
      controls.maxDistance = 70;
      controls.target.set(0, 4, 0);

      loader = new GLTFLoader() as unknown as GLTFLoader;
    };

    // Scale: 1 unit = 1 foot
    const GARAGE = { width: 20, depth: 20, height: 9 };

    // Lights
    scene.add(new THREE.AmbientLight(0x99bbff, 0.55));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(6, 10, 6);
    scene.add(dir);
    scene.add(new THREE.HemisphereLight(0x88aaff, 0x223355, 0.55));

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(GARAGE.width, GARAGE.depth),
      new THREE.MeshStandardMaterial({ color: 0x0e1733, metalness: 0.1, roughness: 0.85 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Walls (main)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x121a3a, roughness: 0.92, metalness: 0.05 });
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.width, GARAGE.height), wallMat.clone());
    backWall.position.set(0, GARAGE.height / 2, -GARAGE.depth / 2);
    scene.add(backWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.depth, GARAGE.height), wallMat.clone());
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(GARAGE.width / 2, GARAGE.height / 2, 0);
    scene.add(rightWall);

    // Detached wall group
    const detachedGroup = new THREE.Group();
    scene.add(detachedGroup);
    const detachedThickness = 0.5;
    const detachedWall = new THREE.Mesh(
      new THREE.BoxGeometry(detachedThickness, GARAGE.height, 12),
      wallMat.clone()
    );
    detachedWall.rotation.y = -Math.PI / 2;
    detachedGroup.add(detachedWall);

    // Mount target marker
    const targetMarker = new THREE.Mesh(
      new THREE.RingGeometry(0.22, 0.28, 24),
      new THREE.MeshBasicMaterial({ color: 0x4af2b8 })
    );
    targetMarker.rotation.y = -Math.PI / 2;
    targetMarker.visible = false;
    detachedGroup.add(targetMarker);
    detachedGroup.visible = false;

    const updateDetachedWall = () => {
      const T = config.trenchFt;
      if (T > 0) {
        detachedGroup.visible = true;
        detachedGroup.position.set(GARAGE.width / 2, 0, GARAGE.depth / 2 + T);
        detachedWall.position.set(0, GARAGE.height / 2, 0);
        const hFeet = config.mountIn / 12;
        targetMarker.visible = true;
        targetMarker.position.set(detachedThickness / 2 + 0.01, hFeet, 0);
      } else {
        detachedGroup.visible = false;
        targetMarker.visible = false;
      }
    };

    // Panel (movable between locations)
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 2, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.3, roughness: 0.6 })
    );
    scene.add(panel);

    const applyPanelLocation = () => {
      if (config.panelLoc === 'back-left') {
        panel.position.set(-GARAGE.width * 0.35, 5, -GARAGE.depth / 2 + 0.13);
      } else {
        panel.position.set(GARAGE.width / 2 - 0.13, 5, GARAGE.depth * 0.35);
      }
    };

    // Charger group (built-in + optional GLTF)
    const builtInMat = new THREE.MeshStandardMaterial({
      color: 0x89f0ce,
      emissive: 0x0e3d2f,
      emissiveIntensity: 0.25,
      roughness: 0.4,
      metalness: 0.1
    });
    const chargerBuiltIn = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.4, 0.3), builtInMat);
    let chargerGLTF: THREE.Object3D | null = null;
    const charger = new THREE.Group();
    charger.add(chargerBuiltIn);
    scene.add(charger);
    charger.position.set(GARAGE.width * 0.25, 4, -GARAGE.depth / 2 + 0.15);

    const applyChargerModel = async () => {
      if (chargerGLTF) {
        charger.remove(chargerGLTF);
        chargerGLTF.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat: any) => mat.dispose?.());
            } else {
              obj.material.dispose?.();
            }
          }
        });
        chargerGLTF = null;
      }

      const brand = BRANDS[config.brand as keyof typeof BRANDS] || BRANDS.custom;
      const useBrandModel = (config.model === 'brand' && brand.modelUrl);
      chargerBuiltIn.visible = !useBrandModel;

      if (!useBrandModel || !loader) return;

      try {
        const gltf = await loader.loadAsync(brand.modelUrl);
        chargerGLTF = gltf.scene;
        chargerGLTF.scale.set(1, 1, 1);
        charger.add(chargerGLTF);
      } catch (e) {
        console.warn('Model load failed; fallback to built-in', e);
        chargerBuiltIn.visible = true;
      }
    };

    // Grid on floor
    const grid = new THREE.GridHelper(GARAGE.width, GARAGE.width, 0x2a3a7a, 0x1a274f);
    grid.position.y = 0.01;
    scene.add(grid);

    // Trench line
    let trenchLine: THREE.Line | null = null;

    const drawTrenchLine = (lenFt: number) => {
      if (trenchLine) {
        scene.remove(trenchLine);
        trenchLine.geometry.dispose();
        (trenchLine.material as THREE.Material).dispose();
        trenchLine = null;
      }
      if (lenFt <= 0) return;

      const start = new THREE.Vector3(GARAGE.width / 2, 0.01, GARAGE.depth / 2);
      const end = new THREE.Vector3(GARAGE.width / 2, 0.01, GARAGE.depth / 2 + lenFt);
      const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
      const material = new THREE.LineDashedMaterial({ color: 0x4af2b8, dashSize: 1, gapSize: 1 });
      trenchLine = new THREE.Line(geo, material);
      trenchLine.computeLineDistances();
      scene.add(trenchLine);
    };

    // Conduit line
    let conduitLine: THREE.Line | null = null;

    // Raycaster for dragging
    const ray = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let dragging = false;
    let dragWall: THREE.Mesh | null = null;

    function fit() {
      const r = wrap.getBoundingClientRect();
      W = Math.max(320, Math.floor(r.width));
      H = Math.max(240, Math.floor(r.height));
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      
      if (W < 768) {
        camera.position.set(12, 10, 28);
      } else {
        camera.position.set(10, 8, 24);
      }
      
      if (controls) controls.update();
    }

    function clamp(v: number, min: number, max: number) {
      return Math.max(min, Math.min(max, v));
    }

    function snapHalf(v: number) {
      return Math.round(v * 2) / 2;
    }

    function wallIntersect(ev: PointerEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      ray.setFromCamera(pointer, camera);
      const hits = ray.intersectObject(charger, true);
      const walls = [backWall, rightWall].concat(detachedGroup.visible ? [detachedWall] : []);
      const wallHits = ray.intersectObjects(walls, false);
      return { hits, wallHits };
    }

    // Compute routing with detached wall support
    function computeRoute() {
      const pPanel = panel.position.clone();
      const pCh = charger.position.clone();
      const trenchFt = config.trenchFt;
      const targetH = config.mountIn / 12;

      const onBack = Math.abs(pCh.z + GARAGE.depth / 2 - 0.15) < 0.3;
      const onRight = Math.abs(pCh.x - (GARAGE.width / 2 - 0.15)) < 0.3;
      const onDetached = detachedGroup.visible && Math.abs(pCh.x - (GARAGE.width / 2 - 0.15)) < 0.4 && pCh.z > GARAGE.depth / 2 + trenchFt - 6;

      const pts: THREE.Vector3[] = [];
      let elbows = 0;
      const add = (v: THREE.Vector3) => pts.push(v.clone());

      add(pPanel);

      if (onDetached) {
        const corner = (config.panelLoc === 'back-left')
          ? new THREE.Vector3(GARAGE.width / 2 - 0.2, pPanel.y, -GARAGE.depth / 2 + 0.15)
          : new THREE.Vector3(GARAGE.width / 2 - 0.2, pPanel.y, GARAGE.depth / 2 - 0.15);
        add(corner); elbows++;
        const drop = corner.clone(); drop.y = 1.0; add(drop); elbows++;
        const trenchEnd = new THREE.Vector3(GARAGE.width / 2 - 0.2, 1.0, GARAGE.depth / 2 + trenchFt - 0.15);
        add(trenchEnd);
        const rise = trenchEnd.clone(); rise.y = targetH; add(rise); elbows++;
        const toCh = new THREE.Vector3(pCh.x, targetH, pCh.z); add(toCh); elbows++;
      } else if (onBack) {
        add(new THREE.Vector3(pCh.x, pPanel.y, pPanel.z)); elbows++;
        add(new THREE.Vector3(pCh.x, pCh.y - 0.7, pCh.z)); elbows++;
      } else if (onRight) {
        add(new THREE.Vector3(pPanel.x, pCh.y, pCh.z)); elbows++;
        add(new THREE.Vector3(pCh.x, pCh.y, pCh.z)); elbows++;
      } else {
        const corner = new THREE.Vector3(GARAGE.width / 2 - 0.2, pPanel.y, -GARAGE.depth / 2 + 0.15);
        add(corner); elbows++;
        add(new THREE.Vector3(corner.x, pCh.y, corner.z)); elbows++;
        add(pCh); elbows++;
      }

      let len = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        len += pts[i].distanceTo(pts[i + 1]);
      }

      return { points: pts, elbows, lenFt: len, trenchFt: (onDetached ? trenchFt : 0) };
    }

    function drawConduit() {
      updateDetachedWall();
      applyPanelLocation();
      
      const { points, elbows, lenFt, trenchFt } = computeRoute();

      if (conduitLine) {
        scene.remove(conduitLine);
        conduitLine.geometry.dispose();
        (conduitLine.material as THREE.Material).dispose();
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      conduitLine = new THREE.Line(geo, new THREE.LineBasicMaterial({
        color: 0x7fd1ff,
        transparent: true,
        opacity: 0.9
      }));
      scene.add(conduitLine);

      drawTrenchLine(trenchFt);

      // Update stats
      const feet = Math.round(lenFt);
      const brand = BRANDS[config.brand as keyof typeof BRANDS] || BRANDS.custom;
      const materialAdj = config.type === 'PVC' ? 1.00 : 1.15;
      const ampAdj = config.amps >= 60 ? 1.15 : config.amps >= 50 ? 1.08 : 1.0;
      const brandAdj = brand.adj;
      const trenchCost = trenchFt * config.trenchPpf;
      const est = Math.round(config.base + feet * config.ppf * materialAdj * ampAdj * brandAdj + trenchCost);

      setStats({ feet, elbows, cost: est, trench: Math.round(trenchFt) });
    }

    // Event handlers
    const handlePointerDown = (e: PointerEvent) => {
      const { hits, wallHits } = wallIntersect(e);
      if (hits.length) {
        dragging = true;
        dragWall = wallHits.length ? wallHits[0].object as THREE.Mesh : backWall;
        if (controls) controls.enabled = false;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const { wallHits } = wallIntersect(e);
      const hit = wallHits.length ? wallHits[0] : null;
      const wall = hit ? hit.object as THREE.Mesh : dragWall;
      if (!wall || !hit) return;

      const p = hit.point.clone();

      const placeBack = () => {
        const x = clamp(p.x, -GARAGE.width / 2 + 0.5, GARAGE.width / 2 - 0.5);
        const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
        charger.position.set(snapHalf(x), snapHalf(y), -GARAGE.depth / 2 + 0.15);
      };

      const placeRight = () => {
        const z = clamp(p.z, -GARAGE.depth / 2 + 0.5, GARAGE.depth / 2 - 0.5);
        const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
        charger.position.set(GARAGE.width / 2 - 0.15, snapHalf(y), snapHalf(z));
      };

      const placeDetached = () => {
        const T = config.trenchFt;
        const zMin = GARAGE.depth / 2 + T - 6;
        const zMax = GARAGE.depth / 2 + T + 6;
        const z = clamp(p.z, zMin, zMax);
        const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
        charger.position.set(GARAGE.width / 2 - 0.15, snapHalf(y), snapHalf(z));
      };

      if (config.mount === 'back') placeBack();
      else if (config.mount === 'right') placeRight();
      else if (config.mount === 'detached' && detachedGroup.visible) placeDetached();
      else {
        if (wall === backWall) placeBack();
        else if (wall === rightWall) placeRight();
        else if (wall === detachedWall) placeDetached();
      }

      drawConduit();
    };

    const handlePointerUp = () => {
      dragging = false;
      if (controls) controls.enabled = true;
    };

    function animate() {
      requestAnimationFrame(animate);
      if (controls) controls.update();
      renderer.render(scene, camera);
    }

    const handleResize = () => fit();

    // Initialize
    const init = async () => {
      await initThree();
      fit();
      await applyChargerModel();
      drawConduit();
      animate();

      renderer.domElement.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('resize', handleResize, { passive: true });
    };

    init();

    return () => {
      if (controls) controls.dispose();
      renderer.dispose();
      if (conduitLine) {
        conduitLine.geometry.dispose();
        (conduitLine.material as THREE.Material).dispose();
      }
      if (trenchLine) {
        trenchLine.geometry.dispose();
        (trenchLine.material as THREE.Material).dispose();
      }
      if (chargerGLTF) {
        chargerGLTF.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat: any) => mat.dispose?.());
            } else {
              obj.material.dispose?.();
            }
          }
        });
      }
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [config]);

  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const data = canvas.toDataURL("image/png");
    const a = document.createElement('a');
    a.download = 'ev_charger_plan.png';
    a.href = data;
    a.click();
  };

  const handleSendPlan = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const pageUrl = location.href;
      const url = new URL(pageUrl);
      const utm = Object.fromEntries(
        Array.from(url.searchParams.entries()).filter(([k]) => k.startsWith('utm_'))
      );

      const jpeg = canvas.toDataURL('image/jpeg', 0.85);
      const brand = BRANDS[config.brand as keyof typeof BRANDS] || BRANDS.custom;

      const payload = {
        page_url: pageUrl,
        town_slug: (location.pathname.match(/ev-charger-installation-([^/]+)/i) || [])[1] || null,
        utm,
        brand: {
          key: config.brand,
          name: brand.name,
          logo_url: brand.logo || null,
          image_url: brand.image || null,
          model_url: (config.model === 'brand' ? brand.modelUrl || null : null)
        },
        amps: config.amps,
        panel_location: config.panelLoc,
        mount_wall: config.mount,
        mount_height_in: config.mountIn,
        conduit_type: config.type,
        price_per_ft: config.ppf,
        base_labor: config.base,
        trench_ft: config.trenchFt,
        trench_price_per_ft: config.trenchPpf,
        conduit_ft: stats.feet,
        elbows: stats.elbows,
        est_cost: stats.cost,
        plan_image_jpeg: jpeg
      };

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      alert("Plan sent. We'll follow up with your quote.");
    } catch (e) {
      console.error(e);
      alert("Couldn't send plan. Check webhook URL.");
    }
  };

  const handleReset = () => {
    setConfig({
      brand: "custom",
      model: "brand",
      amps: 40,
      type: "EMT",
      ppf: 12,
      base: 450,
      panelLoc: "back-left",
      mount: "auto",
      mountIn: 48,
      trenchFt: 0,
      trenchPpf: 18
    });
  };

  const updateConfig = (key: keyof typeof config, value: string | number) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleBrandChange = (brand: string) => {
    const brandConfig = BRANDS[brand as keyof typeof BRANDS] || BRANDS.custom;
    const updates: Partial<typeof config> = { brand };
    if (brandConfig.amps) {
      updates.amps = brandConfig.amps;
    }
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <section className="relative min-h-[72vh] bg-navy-deep text-white">
      <div ref={wrapRef} className="relative w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
        
        {/* Mobile floating controls toggle */}
        {isMobile && (
          <button
            onClick={() => setShowControls(!showControls)}
            className="absolute top-3 right-3 z-20 p-2 bg-navy-deep/80 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-navy-deep/90 transition-colors"
            aria-label="Toggle controls"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </button>
        )}
        
        {/* UI Overlay - Responsive positioning */}
        <div className={`absolute z-10 p-4 bg-navy-deep/60 backdrop-blur-md border border-white/10 transition-transform duration-300 ${
          isMobile 
            ? `left-0 right-0 bottom-0 rounded-t-xl ${showControls ? 'translate-y-0' : 'translate-y-full'}`
            : 'top-3 left-3 max-w-96 rounded-xl'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">EV Charger Configurator</h3>
            {isMobile && (
              <button
                onClick={() => setShowControls(false)}
                className="p-1 text-white/60 hover:text-white"
                aria-label="Close controls"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          <p className="text-sm text-white/70 mb-4">
            {isMobile ? 'Tap charger to drag. Pinch to zoom.' : 'Drag the charger on a wall. Scroll/drag to look around.'}
          </p>

          {/* Brand preset with logo */}
          <div className="flex gap-3 items-center mb-3">
            <div className="flex-1">
              <label className="block text-sm mb-2">Brand preset</label>
              <select 
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.brand}
                onChange={(e) => handleBrandChange(e.target.value)}
              >
                <option value="custom">Custom</option>
                <option value="tesla">Tesla Wall Connector</option>
                <option value="wallbox">Wallbox</option>
                <option value="chargepoint">ChargePoint</option>
                <option value="emporia">Emporia</option>
              </select>
            </div>
            {BRANDS[config.brand as keyof typeof BRANDS]?.logo && (
              <img 
                src={BRANDS[config.brand as keyof typeof BRANDS].logo} 
                alt={`${config.brand} logo`}
                className="w-12 h-12 object-contain filter drop-shadow-sm"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
          </div>

          {/* Model selection */}
          <div className="mb-3">
            <label className="block text-sm mb-2">Charger model</label>
            <select 
              className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
              value={config.model}
              onChange={(e) => updateConfig('model', e.target.value)}
            >
              <option value="brand">Use brand model (if available)</option>
              <option value="none">Built-in block</option>
            </select>
          </div>

          {/* Configuration grid */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm mb-2">Amps</label>
              <select 
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.amps}
                onChange={(e) => updateConfig('amps', Number(e.target.value))}
              >
                <option value={40}>40A</option>
                <option value={50}>50A</option>
                <option value={60}>60A</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-2">Panel location</label>
              <select 
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.panelLoc}
                onChange={(e) => updateConfig('panelLoc', e.target.value)}
              >
                <option value="back-left">Back wall (left)</option>
                <option value="right-front">Right wall (near front)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm mb-2">Mount wall</label>
              <select 
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.mount}
                onChange={(e) => updateConfig('mount', e.target.value)}
              >
                <option value="auto">Auto</option>
                <option value="back">Back wall</option>
                <option value="right">Right wall</option>
                <option value="detached">Detached wall</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-2">Detached height (in)</label>
              <input 
                type="number"
                min="18"
                max="72"
                step="1"
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.mountIn}
                onChange={(e) => updateConfig('mountIn', Number(e.target.value))}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm mb-2">Conduit</label>
            <select 
              className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
              value={config.type}
              onChange={(e) => updateConfig('type', e.target.value)}
            >
              <option value="EMT">EMT (interior)</option>
              <option value="PVC">PVC (exterior)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm mb-2">$ / ft conduit</label>
              <input 
                type="number"
                min="1"
                step="1"
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.ppf}
                onChange={(e) => updateConfig('ppf', Number(e.target.value))}
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2">Base labor $</label>
              <input 
                type="number"
                min="0"
                step="25"
                className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                value={config.base}
                onChange={(e) => updateConfig('base', Number(e.target.value))}
              />
            </div>
          </div>

          {/* Trench section */}
          <details className="mb-4" open>
            <summary className="cursor-pointer text-sm font-medium mb-2">Detached garage / trench</summary>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div>
                <label className="block text-sm mb-2">Trench ft</label>
                <input 
                  type="number"
                  min="0"
                  step="5"
                  className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                  value={config.trenchFt}
                  onChange={(e) => updateConfig('trenchFt', Number(e.target.value))}
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">$ / ft trench</label>
                <input 
                  type="number"
                  min="0"
                  step="1"
                  className="w-full p-2 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green text-sm"
                  value={config.trenchPpf}
                  onChange={(e) => updateConfig('trenchPpf', Number(e.target.value))}
                />
              </div>
            </div>
            <p className="text-xs text-white/60 mt-2">Detached wall appears at trench end. Route auto-drops to 1ft, crosses trench, then rises to your target height.</p>
          </details>
          
          {/* Stats */}
          <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="grid grid-cols-4 gap-2 font-mono text-sm">
              <div className="text-center">
                <div className="text-white/70 text-xs">Conduit</div>
                <div className="font-semibold">{stats.feet} ft</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-xs">Elbows</div>
                <div className="font-semibold">{stats.elbows}</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-xs">Trench</div>
                <div className="font-semibold">{stats.trench} ft</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-xs">Cost</div>
                <div className="font-semibold">${stats.cost.toLocaleString()}</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button 
              onClick={handleExport}
              className="flex-1 bg-electric-green text-navy-deep hover:bg-electric-green/90"
              size={isMobile ? "default" : "sm"}
            >
              Export PNG
            </Button>
            <Button 
              onClick={handleSendPlan}
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
              size={isMobile ? "default" : "sm"}
            >
              Send Plan
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10"
              size={isMobile ? "default" : "sm"}
            >
              Reset
            </Button>
          </div>
        </div>
        
        {/* Mobile overlay backdrop */}
        {isMobile && showControls && (
          <div 
            className="absolute inset-0 bg-black/20 z-0"
            onClick={() => setShowControls(false)}
          />
        )}
      </div>
    </section>
  );
};

export default EV3DConfigurator;