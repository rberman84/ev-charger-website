import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ElectricalPanelUpgrades = () => {
  return (
    <>
      <SEOHead 
        title="Electrical Panel Upgrades Long Island | Ready for EV Charger Installation"
        description="Upgrade your panel to handle EV charging. Licensed Long Island electricians. Safe, fast service across Suffolk & Nassau. Call for a free estimate."
        keywords="electrical panel upgrade Long Island, 200A service upgrade, main panel upgrade EV charger, electrical service upgrade Nassau County, Suffolk County panel upgrade"
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Electrical Panel Upgrades for EV Chargers <span className="text-electric-green">Long Island</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional electrical panel upgrades to support EV charger installation throughout Nassau and Suffolk Counties. 
              200A service upgrades and main panel replacements.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Panel Upgrade Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Electrical Upgrades for Modern EV Charging
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              Many Long Island homes need electrical panel upgrades to safely support Level 2 EV charging. Our licensed electricians 
              assess your current electrical system and provide the necessary upgrades to power your new EV charger safely and efficiently.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 mr-4">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                Panel Assessment
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElectricalPanelUpgrades;