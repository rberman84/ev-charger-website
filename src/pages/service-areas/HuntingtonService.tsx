import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HuntingtonService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Huntington, NY | Residential & Commercial"
        description="Huntington's trusted EV charger installers. Licensed electricians for Tesla, ChargePoint & more. Safe, fast installs for homes & businesses."
        keywords="EV charger installation Huntington NY, Tesla charger Huntington, home EV charging Huntington, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Huntington, NY",
            "description": "Local EV charger installers in Huntington, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Huntington"},
              {"@type": "City", "name": "Huntington Station"},
              {"@type": "City", "name": "Cold Spring Harbor"},
              {"@type": "City", "name": "Centerport"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Huntington"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://powerupevli.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Huntington, NY", "item": "https://powerupevli.com/service-areas/huntington"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Huntington, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Huntington, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional Tesla Wall Connector and home EV charger installation in Huntington, New York. 
              Licensed Suffolk County electricians with expert installation and permit services.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Huntington Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Expert EV Charging Solutions for Huntington
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              PowerUp EV proudly serves Huntington residents with comprehensive EV charger installation services. 
              Our Tesla-certified electricians provide professional installation of Wall Connectors, Level 2 home chargers, and complete electrical upgrades.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 mr-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                Huntington EV Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HuntingtonService;