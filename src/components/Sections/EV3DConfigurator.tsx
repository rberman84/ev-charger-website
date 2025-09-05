import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

// Define OrbitControls type since it's not in main three package
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

const EV3DConfigurator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({ feet: 0, elbows: 0, cost: 0 });
  const [showControls, setShowControls] = useState(false);
  const [config, setConfig] = useState({
    amps: 40,
    type: "EMT",
    ppf: 12,
    base: 450
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
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);

    // Import OrbitControls dynamically
    let controls: OrbitControls;
    
    const initControls = async () => {
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      controls = new OrbitControls(camera, renderer.domElement) as unknown as OrbitControls;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enablePan = false;
      controls.minDistance = 10;
      controls.maxDistance = 50;
      controls.target.set(0, 4, 0);
    };

    // Scale: 1 unit = 1 foot
    const GARAGE = { width: 20, depth: 20, height: 9 };

    // Lights
    scene.add(new THREE.AmbientLight(0x99bbff, 0.5));
    const dir = new THREE.DirectionalLight(0xffffff, 1.0);
    dir.position.set(6, 10, 6);
    scene.add(dir);
    scene.add(new THREE.HemisphereLight(0x88aaff, 0x223355, 0.5));

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(GARAGE.width, GARAGE.depth),
      new THREE.MeshStandardMaterial({ color: 0x0e1733, metalness: 0.1, roughness: 0.8 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x121a3a, roughness: 0.9, metalness: 0.0 });
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.width, GARAGE.height), wallMat.clone());
    backWall.position.set(0, GARAGE.height / 2, -GARAGE.depth / 2);
    scene.add(backWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(GARAGE.depth, GARAGE.height), wallMat.clone());
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(GARAGE.width / 2, GARAGE.height / 2, 0);
    scene.add(rightWall);

    // Grid on floor
    const grid = new THREE.GridHelper(GARAGE.width, GARAGE.width, 0x2a3a7a, 0x1a274f);
    grid.position.y = 0.01;
    scene.add(grid);

    // Panel box
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 2, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.3, roughness: 0.6 })
    );
    panel.position.set(-GARAGE.width * 0.35, 5, -GARAGE.depth / 2 + 0.13);
    scene.add(panel);

    // Charger (draggable)
    const charger = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 1.4, 0.3),
      new THREE.MeshStandardMaterial({
        color: 0x89f0ce,
        emissive: 0x0e3d2f,
        emissiveIntensity: 0.25,
        roughness: 0.4,
        metalness: 0.1
      })
    );
    charger.position.set(GARAGE.width * 0.25, 4, -GARAGE.depth / 2 + 0.15);
    scene.add(charger);

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
      
      // Adjust camera position based on screen size
      if (W < 768) {
        camera.position.set(12, 10, 22); // Further back on mobile
      } else {
        camera.position.set(10, 8, 18);
      }
      
      if (controls) controls.update();
    }

    function clamp(v: number, min: number, max: number) {
      return Math.max(min, Math.min(max, v));
    }

    function snapHalfFoot(v: number) {
      return Math.round(v * 2) / 2;
    }

    function wallIntersect(ev: PointerEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      ray.setFromCamera(pointer, camera);
      const hits = ray.intersectObjects([charger], true);
      const wallHits = ray.intersectObjects([backWall, rightWall], false);
      return { hits, wallHits };
    }

    function computeRoute() {
      const pPanel = panel.position.clone();
      const pCh = charger.position.clone();
      const onBack = Math.abs(pCh.z + GARAGE.depth / 2 - 0.15) < 0.2;
      const onRight = Math.abs(pCh.x - (GARAGE.width / 2 - 0.15)) < 0.2;

      const points: THREE.Vector3[] = [];
      let elbows = 0;
      const add = (x: number, y: number, z: number) => points.push(new THREE.Vector3(x, y, z));

      if (onBack) {
        add(pPanel.x, pPanel.y, pPanel.z);
        add(pCh.x, pPanel.y, pPanel.z);
        elbows++;
        add(pCh.x, pCh.y - 0.7, pCh.z);
        elbows++;
      } else if (onRight) {
        const cornerX = GARAGE.width / 2 - 0.2;
        const cornerZ = -GARAGE.depth / 2 + 0.15;

        add(pPanel.x, pPanel.y, pPanel.z);
        add(cornerX, pPanel.y, cornerZ);
        elbows++;
        add(cornerX, pCh.y, cornerZ);
        elbows++;
        add(pCh.x, pCh.y, pCh.z);
        elbows++;
      } else {
        add(pPanel.x, pPanel.y, pPanel.z);
        add(pCh.x, pCh.y, pCh.z);
      }

      let len = 0;
      for (let i = 0; i < points.length - 1; i++) {
        len += points[i].distanceTo(points[i + 1]);
      }
      return { points, elbows, lenFt: len };
    }

    function drawConduit() {
      const { points, elbows, lenFt } = computeRoute();
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

      // Update stats
      const feet = Math.round(lenFt);
      const materialAdj = config.type === 'PVC' ? 1.0 : 1.15;
      const ampAdj = config.amps >= 60 ? 1.15 : config.amps >= 50 ? 1.08 : 1.0;
      const est = Math.round(config.base + feet * config.ppf * materialAdj * ampAdj);

      setStats({ feet, elbows, cost: est });
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
      const targetWall = wallHits.length ? wallHits[0] : null;
      const wall = targetWall ? targetWall.object as THREE.Mesh : dragWall;
      if (!wall || !targetWall) return;

      const p = targetWall.point.clone();

      if (wall === backWall) {
        const x = clamp(p.x, -GARAGE.width / 2 + 0.5, GARAGE.width / 2 - 0.5);
        const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
        charger.position.set(snapHalfFoot(x), snapHalfFoot(y), -GARAGE.depth / 2 + 0.15);
      } else if (wall === rightWall) {
        const z = clamp(p.z, -GARAGE.depth / 2 + 0.5, GARAGE.depth / 2 - 0.5);
        const y = clamp(p.y, 1.2, GARAGE.height - 0.5);
        charger.position.set(GARAGE.width / 2 - 0.15, snapHalfFoot(y), snapHalfFoot(z));
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
      await initControls();
      fit();
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

  const handleReset = () => {
    setConfig({ amps: 40, type: "EMT", ppf: 12, base: 450 });
  };

  const updateConfig = (key: keyof typeof config, value: string | number) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="relative min-h-[70vh] bg-navy-deep text-white">
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
        <div className={`absolute z-10 p-4 bg-navy-deep/80 backdrop-blur-md border border-white/10 transition-transform duration-300 ${
          isMobile 
            ? `left-0 right-0 bottom-0 rounded-t-xl ${showControls ? 'translate-y-0' : 'translate-y-full'}`
            : 'top-3 left-3 max-w-80 rounded-xl'
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
            {isMobile ? 'Tap charger to drag. Pinch to zoom.' : 'Drag the charger on the wall. Scroll/drag background to look around.'}
          </p>
          
          {/* Stats always visible */}
          <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="grid grid-cols-3 gap-2 font-mono text-sm">
              <div className="text-center">
                <div className="text-white/70 text-xs">Conduit</div>
                <div className="font-semibold">{stats.feet} ft</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-xs">Elbows</div>
                <div className="font-semibold">{stats.elbows}</div>
              </div>
              <div className="text-center">
                <div className="text-white/70 text-xs">Cost</div>
                <div className="font-semibold">${stats.cost.toLocaleString()}</div>
              </div>
            </div>
          </div>
          
          <div className={`space-y-3 ${isMobile ? 'grid grid-cols-2 gap-3' : ''}`}>
            <div>
              <label className="block text-sm mb-2">Amps</label>
              <select 
                className="w-full p-3 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green"
                value={config.amps}
                onChange={(e) => updateConfig('amps', Number(e.target.value))}
              >
                <option value={40}>40A</option>
                <option value={50}>50A</option>
                <option value={60}>60A</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-2">Conduit</label>
              <select 
                className="w-full p-3 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green"
                value={config.type}
                onChange={(e) => updateConfig('type', e.target.value)}
              >
                <option value="EMT">EMT (interior)</option>
                <option value="PVC">PVC (exterior)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-2">$ / foot</label>
              <input 
                type="number"
                min="1"
                step="1"
                className="w-full p-3 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green"
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
                className="w-full p-3 bg-navy-deep border border-white/20 rounded-lg text-white focus:border-electric-green focus:ring-1 focus:ring-electric-green"
                value={config.base}
                onChange={(e) => updateConfig('base', Number(e.target.value))}
              />
            </div>
          </div>
          
          <div className={`flex gap-2 mt-4 ${isMobile ? 'col-span-2' : ''}`}>
            <Button 
              onClick={handleExport}
              className="flex-1 bg-electric-green text-navy-deep hover:bg-electric-green/90 py-3"
              size={isMobile ? "default" : "sm"}
            >
              Export PNG
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10 py-3"
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