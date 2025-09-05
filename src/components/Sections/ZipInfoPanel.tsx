import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle } from "lucide-react";

const ZipInfoPanel = () => {
  const [zip, setZip] = useState("");
  const [info, setInfo] = useState("");

  const zipMap: Record<string, string> = {
    "11779": "Brookhaven",
    "11787": "Smithtown", 
    "11706": "Islip",
    "11702": "Babylon",
    "11772": "Brookhaven",
    "11743": "Huntington",
    "11725": "Commack",
    "11788": "Hauppauge",
    "11790": "Stony Brook",
    "11777": "Port Jefferson",
    "11751": "Islip",
    "11730": "East Islip",
    "11717": "Brentwood",
    "11738": "Farmingville",
    "11741": "Holbrook",
    "11901": "Riverhead",
    "11968": "Southampton",
    "11937": "East Hampton",
    "11954": "Montauk",
    "11964": "Shelter Island"
  };

  const handleZipSearch = () => {
    const cleanZip = zip.trim();
    const town = zipMap[cleanZip] || "your town";
    
    if (cleanZip.length === 5) {
      setInfo(`**Permit:** ${town} Building Department — we file for you.\n\n**PSEG-LI Rebate:** Level 2 home charger eligible. We help with paperwork.`);
    } else {
      setInfo("Please enter a valid 5-digit ZIP code.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleZipSearch();
    }
  };

  return (
    <div className="max-w-lg mx-auto border border-border rounded-lg p-6 bg-card">
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="w-5 h-5 text-electric-green" />
        <h3 className="text-xl font-semibold text-navy-deep">Permits & Rebates</h3>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Input
          placeholder="Enter ZIP (e.g. 11779)"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
          onKeyPress={handleKeyPress}
          className="flex-1"
          maxLength={5}
        />
        <Button onClick={handleZipSearch} className="bg-electric-green hover:bg-electric-green/90">
          Show Info
        </Button>
      </div>
      
      {info && (
        <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-electric-green">
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
            <div className="space-y-2 text-sm">
              {info.split('\n\n').map((section, index) => (
                <div key={index}>
                  {section.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-navy-deep">{part}</strong> : part
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZipInfoPanel;