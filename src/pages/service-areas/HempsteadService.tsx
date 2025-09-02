import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HempsteadService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Hempstead, NY | Certified Local Electricians"
        description="EV charger installation in Hempstead. Licensed & insured electricians. Tesla, ChargePoint, JuiceBox & more. Professional installs, free estimates."
        keywords="EV charger installation Hempstead NY, Tesla charger Hempstead, home EV charging Hempstead, electric vehicle charger Nassau County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Hempstead, NY",
            "description": "Local EV charger installers in Hempstead, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Hempstead"},
              {"@type": "City", "name": "West Hempstead"},
              {"@type": "City", "name": "Uniondale"},
              {"@type": "City", "name": "Roosevelt"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Hempstead"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://powerupevli.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Hempstead, NY", "item": "https://powerupevli.com/service-areas/hempstead"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Hempstead, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Hempstead, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional EV charger installation services in Hempstead, New York. Tesla Wall Connectors, 
              home charging stations, and electrical upgrades from licensed Nassau County electricians.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Hempstead Installation Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Trusted EV Charging Installation in Hempstead
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              Serving Hempstead and Nassau County with professional EV charger installation services. 
              Our certified electricians specialize in Tesla Wall Connectors, Level 2 home charging stations, and complete electrical system upgrades.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 mr-4">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                Hempstead Service Areas
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HempsteadService;