import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CommercialEVChargerInstallation = () => {
  return (
    <>
      <SEOHead 
        title="Commercial EV Charger Installation Long Island | Business & Multi-Unit Solutions"
        description="Install EV charging stations for your office, apartments, or retail business. Local Long Island experts. Safe, scalable, code-compliant commercial installs."
        keywords="commercial EV charger installation Long Island, workplace charging stations, business EV chargers Nassau County, multi-unit EV charging Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Commercial EV Charger Installation",
            "name": "Commercial EV Charger Installation Long Island",
            "description": "Professional installation of commercial EV charging stations for businesses, multi-unit properties, and fleet operators across Long Island.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "Place", "name": "Long Island"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://powerupevli.com/services"},
              {"@type": "ListItem", "position": 3, "name": "Commercial EV Charger Installation", "item": "https://powerupevli.com/services/commercial-ev-charger-installation"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial EV Charger Installation <span className="text-electric-green">Long Island</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional workplace and commercial charging solutions for businesses, multi-unit properties, and fleet operators throughout Nassau and Suffolk Counties.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Commercial Charging Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Scalable Commercial Charging Solutions
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              Attract customers and employees with convenient EV charging. We design and install complete commercial charging 
              infrastructure including multi-port stations, payment systems, and network management for businesses on Long Island.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 mr-4">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                Commercial Solutions
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommercialEVChargerInstallation;