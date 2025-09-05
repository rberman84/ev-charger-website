import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnimatedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let W = 0, H = 0, RAF = 0, t = 0;
    const MAX_NODES_BASE = 160;
    let MAX_NODES = MAX_NODES_BASE;
    const CONNECT_R = 120;
    const MOUSE_FORCE = 14000;
    const DAMPING = 0.96;
    const GLOW = true;

    const mouse = { x: -9999, y: -9999, down: false };
    const nodes: Node[] = [];
    const targets = { free: [] as Point[], plug: [] as Point[], bolt: [] as Point[] };
    let morph = { mode: 'free', since: 0, hold: 2500, dur: 1200 };
    let schedule = ['plug', 'bolt', 'free'];

    interface Point {
      x: number;
      y: number;
    }

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      sz: number;
      tx: number;
      ty: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.sz = Math.random() * 1.3 + 0.7;
        this.tx = x;
        this.ty = y;
      }

      setTarget(p: Point) {
        if (!p) return;
        this.tx = p.x;
        this.ty = p.y;
      }

      step(dt: number) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const r2 = dx * dx + dy * dy;
        if (r2 < 90000) {
          const f = MOUSE_FORCE / Math.max(1200, r2);
          this.vx += dx * f * dt;
          this.vy += dy * f * dt;
        }

        const ax = (this.tx - this.x) * 0.010;
        const ay = (this.ty - this.y) * 0.010;
        this.vx += ax;
        this.vy += ay;

        this.vx += (Math.random() - 0.5) * 0.006;
        this.vy += (Math.random() - 0.5) * 0.006;

        this.vx *= DAMPING;
        this.vy *= DAMPING;
        this.x += this.vx * dt * 60;
        this.y += this.vy * dt * 60;

        if (this.x < -40) this.x = W + 40;
        if (this.x > W + 40) this.x = -40;
        if (this.y < -40) this.y = H + 40;
        if (this.y > H + 40) this.y = -40;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229,247,255,0.9)';
        ctx.fill();
        if (GLOW) {
          ctx.shadowColor = '#74d7ff';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    function fit() {
      const r = canvas.getBoundingClientRect();
      W = Math.max(640, Math.floor(r.width));
      H = Math.max(420, Math.floor(r.height));
      DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      MAX_NODES = Math.floor(MAX_NODES_BASE * (W * H) / (1440 * 800));
      initIfNeeded();
      targets.plug = buildPlugPoints(MAX_NODES, W, H);
      targets.bolt = buildBoltPoints(MAX_NODES, W, H);
      if (targets.free.length === 0) targets.free = jitterPoints(MAX_NODES, W, H);
    }

    function buildPlugPoints(n: number, W: number, H: number): Point[] {
      const cx = W * 0.5, cy = H * 0.45;
      const scale = Math.min(W, H) * 0.35;
      const pts: Point[] = [];
      
      pushRoundedRect(pts, cx - scale * 0.18, cy - scale * 0.16, scale * 0.36, scale * 0.34, scale * 0.06, 120);
      pushRoundedRect(pts, cx - scale * 0.09, cy - scale * 0.28, scale * 0.04, scale * 0.12, scale * 0.012, 60);
      pushRoundedRect(pts, cx + scale * 0.05, cy - scale * 0.28, scale * 0.04, scale * 0.12, scale * 0.012, 60);
      pushArc(pts, cx + scale * 0.18, cy + scale * 0.12, scale * 0.28, Math.PI * 0.15, Math.PI * 0.8, 140);

      return spreadToCount(pts, n);
    }

    function buildBoltPoints(n: number, W: number, H: number): Point[] {
      const cx = W * 0.5, cy = H * 0.48;
      const s = Math.min(W, H) * 0.38;
      const poly = [
        [cx - 0.10 * s, cy - 0.38 * s],
        [cx + 0.06 * s, cy - 0.10 * s],
        [cx - 0.02 * s, cy - 0.10 * s],
        [cx + 0.12 * s, cy + 0.18 * s],
        [cx - 0.06 * s, cy + 0.18 * s],
        [cx + 0.02 * s, cy + 0.38 * s]
      ];
      
      const pts: Point[] = [];
      for (let i = 0; i < poly.length - 1; i++) {
        pushSegment(pts, poly[i][0], poly[i][1], poly[i + 1][0], poly[i + 1][1], 140);
      }
      return spreadToCount(pts, n);
    }

    function pushRoundedRect(out: Point[], x: number, y: number, w: number, h: number, r: number, steps: number) {
      const corners = [
        [x + r, y, x + w - r, y],
        [x + w, y + r, x + w, y + h - r],
        [x + w - r, y + h, x + r, y + h],
        [x, y + h - r, x, y + r]
      ];
      for (let i = 0; i < 4; i++) {
        const a = corners[i], b = corners[(i + 1) % 4];
        pushSegment(out, a[0], a[1], a[2], a[3], Math.max(40, steps / 4));
      }
    }

    function pushArc(out: Point[], cx: number, cy: number, r: number, a0: number, a1: number, steps: number) {
      for (let i = 0; i <= steps; i++) {
        const t = a0 + (a1 - a0) * (i / steps);
        out.push({ x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) });
      }
    }

    function pushSegment(out: Point[], x1: number, y1: number, x2: number, y2: number, steps: number) {
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        out.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
      }
    }

    function spreadToCount(pts: Point[], n: number): Point[] {
      const out: Point[] = [];
      for (let i = 0; i < n; i++) {
        const j = Math.floor((i / Math.max(1, (n - 1))) * (pts.length - 1));
        out.push(pts[j]);
      }
      return out;
    }

    function jitterPoints(n: number, W: number, H: number): Point[] {
      const out: Point[] = [];
      for (let i = 0; i < n; i++) {
        out.push({ x: Math.random() * W, y: Math.random() * H });
      }
      return out;
    }

    function drawLinks() {
      const R2 = CONNECT_R * CONNECT_R;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const alpha = 1 - d2 / R2;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(127,209,255,${0.25 * alpha})`);
            grad.addColorStop(1, `rgba(74,242,184,${0.25 * alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            if (GLOW && Math.random() < 0.002 && alpha > 0.8) {
              ctx.strokeStyle = `rgba(180,255,255,${0.35})`;
              ctx.lineWidth = 1.8;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x + (Math.random() - 0.5) * 6, b.y + (Math.random() - 0.5) * 6);
              ctx.stroke();
            }
          }
        }
      }
    }

    function initIfNeeded() {
      if (nodes.length) return;
      targets.free = jitterPoints(MAX_NODES, W, H);
      for (let i = 0; i < MAX_NODES; i++) {
        const p = targets.free[i];
        const n = new Node(p.x, p.y);
        n.setTarget(p);
        nodes.push(n);
      }
    }

    function setMode(next: string) {
      morph.mode = next;
      morph.since = performance.now();
      const tgt = next === 'plug' ? targets.plug : next === 'bolt' ? targets.bolt : targets.free;
      const shuffled = tgt.slice().sort(() => Math.random() - 0.5);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].setTarget(shuffled[i % shuffled.length]);
      }
    }

    function maybeSchedule() {
      const now = performance.now();
      const elapsed = now - morph.since;
      const dur = morph.dur + morph.hold;
      if (elapsed > dur) {
        const next = schedule.shift()!;
        schedule.push(next);
        setMode(next);
      }
    }

    let last = performance.now();
    function tick(now: number) {
      RAF = requestAnimationFrame(tick);
      const dt = Math.max(0.016, Math.min(0.05, (now - last) / 1000));
      last = now;
      t += dt;

      maybeSchedule();

      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W * 0.3, H * 0.2, 60, W * 0.3, H * 0.2, Math.max(W, H) * 0.9);
      g.addColorStop(0, 'rgba(30,50,100,0.25)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      for (const n of nodes) { n.step(dt); }
      drawLinks();
      for (const n of nodes) { n.draw(); }
    }

    const handleResize = () => fit();
    const handlePointerMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    fit();
    setMode('plug');
    RAF = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      if (RAF) cancelAnimationFrame(RAF);
    };
  }, []);

  return (
    <section className="relative min-h-[68vh] flex items-center justify-center overflow-hidden" 
             style={{
               background: 'radial-gradient(1200px 800px at 20% 10%, hsl(14 73% 33%), hsl(11 20% 8%))'
             }}>
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ display: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'block' }}
      />
      <div className="relative z-10 text-center text-white px-5">
        <h1 className="mb-3 font-bold leading-tight" 
            style={{ fontSize: 'clamp(28px,4.6vw,56px)' }}>
          Professional EV Charger Installation
        </h1>
        <p className="mb-5 opacity-90" 
           style={{ fontSize: 'clamp(14px,2.2vw,18px)' }}>
          Suffolk County Licensed Electricians • Permits & Rebates Handled
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-electric-green text-navy-deep hover:bg-electric-green/90 font-bold">
            Get Free Quote Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AnimatedHero;