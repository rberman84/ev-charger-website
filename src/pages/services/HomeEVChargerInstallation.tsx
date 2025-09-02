import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HomeEVChargerInstallation = () => {
  return (
    <>
      <SEOHead 
        title="Home EV Charger Installation Long Island | Level 2 Charging at Home"
        description="Charge your EV faster with a home Level 2 charger. Licensed Long Island electricians. Safe installs for Tesla, ChargePoint & more. Free consultation today."
        keywords="home EV charger installation Long Island, Level 2 EV charger, home charging station Nassau County, residential EV charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Home EV Charger Installation",
            "name": "Home EV Charger Installation Long Island",
            "description": "Licensed installation of Level 2 EV chargers (Tesla, ChargePoint, JuiceBox, Wallbox) for homes across Long Island.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "Place", "name": "Long Island"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home EV Charging Services",
              "itemListElement": [
                {"@type": "Offer", "name": "Home Level 2 Charger Install", "url": "https://powerupevli.com/services/home-ev-charger-installation"},
                {"@type": "Offer", "name": "ChargePoint Installation", "url": "https://powerupevli.com/services/home-ev-charger-installation"},
                {"@type": "Offer", "name": "JuiceBox Installation", "url": "https://powerupevli.com/services/home-ev-charger-installation"}
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://powerupevli.com/services"},
              {"@type": "ListItem", "position": 3, "name": "Home EV Charger Installation", "item": "https://powerupevli.com/services/home-ev-charger-installation"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home EV Charger Installation <span className="text-electric-green">Long Island</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional Level 2 home charging station installation for all electric vehicle brands throughout Nassau and Suffolk Counties.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Free Home Charger Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Complete Home EV Charging Solutions
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              Transform your home into a convenient EV charging station with our professional Level 2 charger installation services. 
              We install all major brands including ChargePoint, JuiceBox, Grizzl-E, and ClipperCreek for homeowners throughout Long Island.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 mr-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                View Charger Options
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeEVChargerInstallation;