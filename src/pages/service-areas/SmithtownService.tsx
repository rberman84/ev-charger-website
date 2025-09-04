import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const SmithtownService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Smithtown, NY | Professional Local Installers"
        description="Trusted EV charger installation in Smithtown. Licensed electricians. Tesla, ChargePoint & more. Clean, reliable, and code-compliant. Call today."
        keywords="EV charger installation Smithtown NY, Tesla charger Smithtown, Level 2 charging station Smithtown, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Smithtown, NY",
            "description": "Local EV charger installers in Smithtown, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Smithtown"},
              {"@type": "City", "name": "Nesconset"},
              {"@type": "City", "name": "Hauppauge"},
              {"@type": "City", "name": "St. James"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Smithtown"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://powerupevli.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Smithtown, NY", "item": "https://powerupevli.com/service-areas/smithtown"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Smithtown, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Smithtown, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert EV charger installation in Smithtown, New York. Tesla Wall Connectors, Level 2 home charging, 
              and electrical panel upgrades from licensed Suffolk County professionals.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Smithtown EV Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Premier EV Charging Installation in Smithtown
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              Serving Smithtown homeowners and businesses with professional EV charger installation services. 
              From Tesla Wall Connectors to universal Level 2 charging stations, we provide complete solutions with same-day service availability.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 mr-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
              <Button variant="outline" size="lg">
                Smithtown Installation Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmithtownService;