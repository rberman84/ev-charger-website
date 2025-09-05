import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Point {
  x: number;
  y: number;
}

const EVPlannerWidget = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [tool, setTool] = useState<string | null>(null);
  const [scalePxPerFt, setScalePxPerFt] = useState(10);
  const [scalePts, setScalePts] = useState<Point[]>([]);
  const [panelPin, setPanelPin] = useState<Point | null>(null);
  const [chargerPin, setChargerPin] = useState<Point | null>(null);
  const [pathPts, setPathPts] = useState<Point[]>([]);
  const [drawingPath, setDrawingPath] = useState(false);
  const [showScaleHint, setShowScaleHint] = useState(false);

  const [formData, setFormData] = useState({
    installType: "exterior",
    amps: "40",
    conduit: "emt"
  });

  const dpi = window.devicePixelRatio || 1;

  // Helper functions
  const dist = (a: Point, b: Point) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  };

  const mid = (a: Point, b: Point) => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  });

  const fmt = (n: number) => (Math.round(n * 10) / 10).toString();
  const pxToFt = (px: number) => px / scalePxPerFt;
  const money = (n: number) => n.toLocaleString(undefined, {style: "currency", currency: "USD", maximumFractionDigits: 0});

  const breakerSize = (amps: number) => {
    const sizes = [20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100];
    const need = Math.ceil(amps * 1.25);
    return sizes.find(x => x >= need) || 100;
  };

  const copperGauge = (amps: number, runFt: number) => {
    let g = amps <= 30 ? "10 AWG Cu" : 
             amps <= 40 ? "8 AWG Cu" : 
             amps <= 50 ? "6 AWG Cu" : "4 AWG Cu";
    if (runFt > 60 && amps >= 40) {
      if (g === "8 AWG Cu") g = "6 AWG Cu (long run)";
      if (g === "6 AWG Cu") g = "4 AWG Cu (long run)";
    }
    return g;
  };

  const pinDistanceFeet = () => {
    if (!(panelPin && chargerPin)) return 0;
    return pxToFt(dist(panelPin, chargerPin));
  };

  const pathFeet = () => {
    if (pathPts.length < 2) return 0;
    let sum = 0;
    for (let i = 0; i < pathPts.length - 1; i++) {
      sum += dist(pathPts[i], pathPts[i + 1]);
    }
    return pxToFt(sum);
  };

  const imageFitContain = (image: HTMLImageElement, canvas: HTMLCanvasElement) => {
    const cw = canvas.width / dpi;
    const ch = canvas.height / dpi;
    const ir = image.width / image.height;
    const cr = cw / ch;
    let w, h;
    if (ir > cr) {
      w = cw;
      h = cw / ir;
    } else {
      h = ch;
      w = ch * ir;
    }
    const ox = (cw - w) / 2;
    const oy = (ch - h) / 2;
    return { w, h, ox, oy };
  };

  const fitCanvasToCSS = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpi);
    canvas.height = Math.round(rect.height * dpi);
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
    }
  }, [dpi]);

  const drawLabel = (ctx: CanvasRenderingContext2D, p: Point, text: string, color: string) => {
    ctx.save();
    ctx.font = "12px system-ui, Segoe UI, Roboto, Arial";
    ctx.fillStyle = "#000";
    ctx.globalAlpha = 0.75;
    const pad = 4;
    const w = ctx.measureText(text).width + pad * 2;
    const h = 16;
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    roundRect(ctx, p.x - 2, p.y - 14, w, h, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#111";
    ctx.globalAlpha = 1;
    ctx.fillText(text, p.x + 2, p.y - 2);
    ctx.restore();
  };

  const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
  };

  const drawPin = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string, label: string) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    drawLabel(ctx, { x: x + 10, y: y - 10 }, label, color);
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw photo
    if (imgLoaded && img) {
      const { w, h, ox, oy } = imageFitContain(img, canvas);
      ctx.drawImage(img, ox, oy, w, h);
    }

    // Draw scale line
    if (scalePts.length > 0) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ff7a00";
      ctx.beginPath();
      ctx.moveTo(scalePts[0].x, scalePts[0].y);
      if (scalePts[1]) ctx.lineTo(scalePts[1].x, scalePts[1].y);
      ctx.stroke();
      if (scalePts[1]) {
        const dpx = dist(scalePts[0], scalePts[1]);
        drawLabel(ctx, mid(scalePts[0], scalePts[1]), `${fmt(dpx / scalePxPerFt)} ft (scaled)`, "#ff7a00");
      } else {
        drawLabel(ctx, scalePts[0], "Scale start", "#ff7a00");
      }
    }

    // Draw path
    if (pathPts.length > 0) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#1f7aee";
      ctx.beginPath();
      ctx.moveTo(pathPts[0].x, pathPts[0].y);
      for (let i = 1; i < pathPts.length; i++) {
        ctx.lineTo(pathPts[i].x, pathPts[i].y);
      }
      ctx.stroke();
      drawLabel(ctx, pathPts[pathPts.length - 1], `${fmt(pathFeet())} ft`, "#1f7aee");
    }

    // Draw pins
    if (panelPin) drawPin(ctx, panelPin.x, panelPin.y, "#0a6d3b", "Panel");
    if (chargerPin) drawPin(ctx, chargerPin.x, chargerPin.y, "#111", "Charger");

    // Draw hint line if both pins but no path
    if (panelPin && chargerPin && pathPts.length === 0) {
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = "#999";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(panelPin.x, panelPin.y);
      ctx.lineTo(chargerPin.x, chargerPin.y);
      ctx.stroke();
      ctx.setLineDash([]);
      drawLabel(ctx, mid(panelPin, chargerPin), `${fmt(pinDistanceFeet())} ft (straight)`, "#666");
    }
  }, [img, imgLoaded, scalePts, scalePxPerFt, pathPts, panelPin, chargerPin]);

  useEffect(() => {
    fitCanvasToCSS();
    draw();
  }, [fitCanvasToCSS, draw]);

  useEffect(() => {
    const handleResize = () => {
      fitCanvasToCSS();
      draw();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fitCanvasToCSS, draw]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const url = URL.createObjectURL(file);
    const newImg = new Image();
    newImg.onload = () => {
      setImg(newImg);
      setImgLoaded(true);
    };
    newImg.src = url;
  };

  const localPt = (evt: React.MouseEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!imgLoaded) return;
    const p = localPt(e);

    if (tool === "scale") {
      if (scalePts.length === 0) {
        setScalePts([p]);
        setShowScaleHint(true);
      } else if (scalePts.length === 1) {
        setScalePts(prev => [...prev, p]);
        setShowScaleHint(false);
        const ft = prompt("Enter real-world distance in FEET for the line you just drew (e.g., 8):", "8");
        const n = parseFloat(ft || "8");
        if (n > 0) {
          const dpx = dist(scalePts[0], p);
          setScalePxPerFt(dpx / n);
        }
      } else {
        setScalePts([p]);
        setShowScaleHint(true);
      }
    } else if (tool === "panel") {
      setPanelPin(p);
    } else if (tool === "charger") {
      setChargerPin(p);
    } else if (tool === "path") {
      if (!drawingPath) {
        setPathPts([p]);
        setDrawingPath(true);
      } else {
        setPathPts(prev => [...prev, p]);
      }
    }
  };

  const handleCanvasDoubleClick = () => {
    if (tool === "path" && drawingPath) {
      setDrawingPath(false);
    }
  };

  const handleToolClick = (toolName: string) => {
    setTool(toolName);
    setShowScaleHint(toolName === "scale");
  };

  const handleUndo = () => {
    if (tool === "path" && pathPts.length > 0) {
      setPathPts(prev => prev.slice(0, -1));
    } else if (tool === "panel") {
      setPanelPin(null);
    } else if (tool === "charger") {
      setChargerPin(null);
    }
  };

  const handleReset = () => {
    setScalePts([]);
    setPanelPin(null);
    setChargerPin(null);
    setPathPts([]);
    setDrawingPath(false);
    setShowScaleHint(false);
  };

  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "ev-charger-planner.png";
    a.click();
  };

  // Calculate outputs
  const straight = pinDistanceFeet();
  const routed = pathFeet() || straight;
  const amps = +formData.amps;
  const breaker = breakerSize(amps);
  const wire = copperGauge(amps, routed);
  const sticks = Math.ceil(routed / 10) * 10;

  // Materials list
  const materialsList = [
    `${breaker}A 2-pole breaker`,
    `${wire} copper THHN (2 hots + ground)`,
    `${formData.conduit.toUpperCase()} with fittings (≈ ${sticks} ft)`,
    `Weatherproof box + in-use cover (if exterior)`,
    `EVSE (hardwired or NEMA 14-50)`,
    ...(formData.installType === "finished" ? [`Limited fishing; patch/paint by others`] : []),
    ...(formData.installType === "exterior" ? [`Trenching as required; PVC sweeps; expansion coupling`] : [])
  ];

  // Cost calculation
  const matBase = (amps >= 50 ? 420 : 350) + (routed * 4.2) + 140;
  const laborRate = 145;
  const hours = 3 + (routed / 25) * 0.8 + 
    (formData.installType === "finished" ? 1 : 0) + 
    (formData.installType === "exterior" ? 1.5 : 0);
  const low = matBase + hours * laborRate;
  const high = low * 1.18;

  return (
    <div className="max-w-5xl mx-auto p-4 border border-border rounded-xl bg-background">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-deep mb-3">
          Charger Placement Planner
        </h2>
        <p className="text-silver">
          Upload a photo, set scale, drop pins, sketch conduit path, and export.
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div className="space-y-2">
          <Label>Photo</Label>
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <div className="space-y-2">
          <Label>Install Type</Label>
          <Select value={formData.installType} onValueChange={(value) => setFormData(prev => ({...prev, installType: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="garage">Garage surface mount</SelectItem>
              <SelectItem value="finished">Finished interior walls</SelectItem>
              <SelectItem value="exterior">Exterior with trench</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Charger Amperage</Label>
          <Select value={formData.amps} onValueChange={(value) => setFormData(prev => ({...prev, amps: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="60">60</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Conduit Preference</Label>
          <Select value={formData.conduit} onValueChange={(value) => setFormData(prev => ({...prev, conduit: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emt">EMT (interior)</SelectItem>
              <SelectItem value="pvc">PVC Sch40 (exterior)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>

      {/* Guide */}
      <details className="mb-4">
        <summary className="cursor-pointer font-medium text-navy-deep">How it works</summary>
        <ol className="mt-2 ml-4 list-decimal space-y-1 text-sm text-silver">
          <li>Upload photo.</li>
          <li>Click <strong>Scale</strong>, draw a line on something you know (e.g., 8 ft garage door width), type the real feet.</li>
          <li>Click <strong>Panel</strong> then tap photo to place the electrical panel pin.</li>
          <li>Click <strong>Charger</strong> then tap photo to place the charger pin.</li>
          <li>Click <strong>Path</strong>, then click along your route. Double-click to finish.</li>
          <li>Review length, parts, and export.</li>
        </ol>
      </details>

      {/* Toolbar */}
      <div className="flex gap-2 flex-wrap mb-4">
        {[
          { tool: "scale", label: "Scale" },
          { tool: "panel", label: "Panel" },
          { tool: "charger", label: "Charger" },
          { tool: "path", label: "Path" }
        ].map(({ tool: toolName, label }) => (
          <Button
            key={toolName}
            variant={tool === toolName ? "default" : "outline"}
            onClick={() => handleToolClick(toolName)}
            size="sm"
          >
            {label}
          </Button>
        ))}
        <Button onClick={handleUndo} variant="outline" size="sm">
          Undo
        </Button>
        <Button onClick={handleExport} className="ml-auto" size="sm">
          Export PNG
        </Button>
      </div>

      {/* Canvas */}
      <div className="relative border border-border rounded-lg overflow-hidden mb-4">
        <canvas
          ref={canvasRef}
          width={900}
          height={560}
          className="block w-full h-auto bg-muted/30 cursor-crosshair"
          onClick={handleCanvasClick}
          onDoubleClick={handleCanvasDoubleClick}
        />
        {showScaleHint && (
          <div className="absolute left-2 top-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
            Drag first point, then second point. Enter real feet to set scale.
          </div>
        )}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Measurements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Scale: {fmt(scalePxPerFt)} px/ft</div>
            <div>Straight distance: <strong>{fmt(straight)}</strong> ft</div>
            <div>Path distance: <strong>{fmt(routed)}</strong> ft</div>
            <div>Proposed breaker: <strong>{breaker}A</strong></div>
            <div>Suggested wire: <strong>{wire}</strong></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Likely Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {materialsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Estimate (Range)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-navy-deep">
              {money(low)} – {money(high)}
            </div>
            <p className="text-xs text-silver mt-2">
              Includes labor + standard materials; final onsite quote required.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EVPlannerWidget;