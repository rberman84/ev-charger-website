import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EVCalculatorWidget = () => {
  const [formData, setFormData] = useState({
    mainBreaker: "200",
    spaces: "2", 
    level: "2",
    amps: "40",
    run: "35",
    installType: "surface",
    rate: "0.24",
    miles: "30"
  });

  const [results, setResults] = useState<any>(null);
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: ""
  });
  const [showThanks, setShowThanks] = useState(false);

  const copperGauge = (amps: number, runFt: number) => {
    const base = amps <= 30 ? "10 AWG Cu" :
                 amps <= 40 ? "8 AWG Cu"  :
                 amps <= 50 ? "6 AWG Cu"  : "4 AWG Cu";
    if(runFt > 60 && amps >= 40){
      if(base === "8 AWG Cu") return "6 AWG Cu (long run)";
      if(base === "6 AWG Cu") return "4 AWG Cu (long run)";
    }
    return base;
  };

  const breakerSize = (amps: number) => {
    const cont = Math.ceil(amps * 1.25);
    const sizes = [20,25,30,35,40,45,50,60,70,80,90,100];
    return sizes.find(s => s >= cont) || 100;
  };

  const canPanelSupport = (main: number, proposedBreaker: number) => {
    if(main <= 100 && proposedBreaker >= 60) return false;
    return true;
  };

  const materialsList = (level: string, amps: number, runFt: number, type: string) => {
    const list = [];
    const brk = breakerSize(amps);
    list.push(`${brk}A 2-pole breaker (EVSE)`);
    list.push(`${copperGauge(amps, runFt)} THHN conductors (2 hots + ground)`);

    if(level === "2"){
      list.push(`NEMA 14-50 receptacle or hardwired EVSE`);
      list.push(`1" EMT with fittings (≈ ${Math.ceil(runFt/10)*10} ft)`);
    } else {
      list.push(`NEMA 5-15/20 receptacle (dedicated)`);
      list.push(`1/2" EMT or NM-B as allowed`);
    }
    if(type === "finished") list.push(`Selective fishing, patching/paint not included`);
    if(type === "exterior") list.push(`PVC sch40 + weatherproof box; trenching as required`);
    return list;
  };

  const laborFactor = (type: string) => {
    return type === "surface" ? 1 :
           type === "finished" ? 1.35 :
           1.55;
  };

  const baseCost = (level: string, amps: number, runFt: number, type: string) => {
    const mat =
      (level === "2" ? 350 : 120) +
      (runFt * 4.0) +
      120;
    const laborHrs = 3.0 + (runFt / 25) * 0.75;
    const laborRate = 145;
    const labor = laborHrs * laborRate * laborFactor(type);
    return { mat, labor };
  };

  const savings = (rate: number, miles: number) => {
    const kwhPerDay = miles / 3.0;
    const costPerDay = kwhPerDay * rate;
    const monthly = costPerDay * 30;
    const publicMonthly = miles * 0.35 * 30;
    return {
      homeMonthly: monthly,
      publicMonthly,
      monthlySave: Math.max(publicMonthly - monthly, 0)
    };
  };

  const handleCalculate = () => {
    const main = +formData.mainBreaker;
    const spaces = formData.spaces;
    const level = formData.level;
    const amps = +formData.amps;
    const runFt = Math.max(5, +formData.run || 35);
    const type = formData.installType;
    const rate = +formData.rate || 0.24;
    const miles = +formData.miles || 30;

    const brk = breakerSize(amps);
    const panelOK = canPanelSupport(main, brk) && (spaces === "2" || spaces === "3+");
    const panelMsg = panelOK
      ? `Good news: your panel likely supports a ${amps}A EV circuit with a ${brk}A breaker.`
      : `Your panel may need changes (load calc, tandem/space rework, or service upgrade) for a ${amps}A EV circuit.`;

    const {mat, labor} = baseCost(level, amps, runFt, type);
    let low = mat + labor;
    let high = low * 1.2;
    if(!panelOK){ low += 400; high += 1200; }

    const materials = materialsList(level, amps, runFt, type);
    const sv = savings(rate, miles);

    setResults({
      panelMsg,
      panelOK,
      brk,
      copper: copperGauge(amps, runFt),
      runFt,
      costLow: low,
      costHigh: high,
      materials: mat,
      labor,
      materialsList: materials,
      savings: sv
    });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThanks(true);
    setLeadData({ name: "", phone: "", email: "", zip: "" });
  };

  const formatCurrency = (n: number) => 
    n.toLocaleString(undefined, {style:'currency', currency:'USD', maximumFractionDigits:0});

  return (
    <div className="max-w-4xl mx-auto p-6 border border-border rounded-xl bg-background">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy-deep mb-3">
          EV Charger Fit & Cost Estimator (Suffolk)
        </h2>
        <p className="text-silver">
          Answer a few questions. Get a realistic range, parts list, and next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label>Panel Main Breaker</Label>
          <Select value={formData.mainBreaker} onValueChange={(value) => setFormData(prev => ({...prev, mainBreaker: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100A</SelectItem>
              <SelectItem value="125">125A</SelectItem>
              <SelectItem value="150">150A</SelectItem>
              <SelectItem value="200">200A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Existing Spare Spaces</Label>
          <Select value={formData.spaces} onValueChange={(value) => setFormData(prev => ({...prev, spaces: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Charger Level</Label>
          <Select value={formData.level} onValueChange={(value) => setFormData(prev => ({...prev, level: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Level 1 (120V)</SelectItem>
              <SelectItem value="2">Level 2 (240V)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Desired Amperage</Label>
          <Select value={formData.amps} onValueChange={(value) => setFormData(prev => ({...prev, amps: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="60">60</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>One-way Run Length (ft)</Label>
          <Input
            type="number"
            min="5"
            value={formData.run}
            onChange={(e) => setFormData(prev => ({...prev, run: e.target.value}))}
          />
        </div>

        <div className="space-y-2">
          <Label>Install Type</Label>
          <Select value={formData.installType} onValueChange={(value) => setFormData(prev => ({...prev, installType: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="surface">Garage surface mount</SelectItem>
              <SelectItem value="finished">Finished walls</SelectItem>
              <SelectItem value="exterior">Exterior with trench</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Utility kWh Rate ($)</Label>
          <Input
            type="number"
            step="0.01"
            value={formData.rate}
            onChange={(e) => setFormData(prev => ({...prev, rate: e.target.value}))}
          />
        </div>

        <div className="space-y-2">
          <Label>Miles Driven / Day</Label>
          <Input
            type="number"
            value={formData.miles}
            onChange={(e) => setFormData(prev => ({...prev, miles: e.target.value}))}
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="mb-6">
        Calculate
      </Button>

      {results && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-navy-deep">Your Results</h3>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div>
                <strong>Panel Check:</strong> {results.panelMsg}
              </div>
              <div className="mt-2 text-sm">
                Proposed breaker: <strong>{results.brk}A</strong> · 
                Wire: <strong>{results.copper}</strong> · 
                Run: <strong>{results.runFt} ft</strong>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estimated Install Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-navy-deep">
                  {formatCurrency(results.costLow)} – {formatCurrency(results.costHigh)}
                </div>
                <div className="text-sm text-silver mt-2">
                  Materials ≈ {formatCurrency(results.materials)} · Labor ≈ {formatCurrency(results.labor)}
                </div>
                <p className="text-xs text-silver mt-2">
                  Includes labor + standard materials. Final quote after on-site visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Energy & Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div>Home charging monthly: <strong>{formatCurrency(results.savings.homeMonthly)}</strong></div>
                  <div>Public fast-charge monthly: <strong>{formatCurrency(results.savings.publicMonthly)}</strong></div>
                  <div className="mt-2">Estimated monthly savings: <strong>{formatCurrency(results.savings.monthlySave)}</strong></div>
                </div>
                <p className="text-xs text-silver mt-2">
                  Assumes 3 mi/kWh. Edit rate/miles above.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Likely Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {results.materialsList.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Get a Firm Quote</CardTitle>
            </CardHeader>
            <CardContent>
              {!showThanks ? (
                <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name"
                    required
                    value={leadData.name}
                    onChange={(e) => setLeadData(prev => ({...prev, name: e.target.value}))}
                  />
                  <Input
                    placeholder="Phone"
                    required
                    value={leadData.phone}
                    onChange={(e) => setLeadData(prev => ({...prev, phone: e.target.value}))}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={leadData.email}
                    onChange={(e) => setLeadData(prev => ({...prev, email: e.target.value}))}
                  />
                  <Input
                    placeholder="ZIP (Suffolk)"
                    value={leadData.zip}
                    onChange={(e) => setLeadData(prev => ({...prev, zip: e.target.value}))}
                  />
                  <Button type="submit" className="md:col-span-2 bg-green-600 hover:bg-green-700">
                    Get a firm quote + scheduling
                  </Button>
                </form>
              ) : (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <p className="text-green-800">
                      Thanks! We'll text you to schedule a free on-site quote.
                    </p>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EVCalculatorWidget;