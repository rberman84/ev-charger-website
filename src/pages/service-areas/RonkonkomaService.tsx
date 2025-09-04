import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const RonkonkomaService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Ronkonkoma, NY | Local Licensed Experts"
        description="Professional EV charger installs in Ronkonkoma. Tesla, ChargePoint & more. Licensed, insured electricians. Safe, code-compliant work. Free local estimate."
        keywords="EV charger installation Ronkonkoma NY, Tesla charger Ronkonkoma, home EV charging station Ronkonkoma, electric vehicle charger installation Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Ronkonkoma, NY",
            "description": "Local EV charger installers in Ronkonkoma, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Ronkonkoma"},
              {"@type": "City", "name": "Holbrook"},
              {"@type": "City", "name": "Islandia"},
              {"@type": "City", "name": "Bohemia"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Islip"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://powerupevli.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Ronkonkoma, NY", "item": "https://powerupevli.com/service-areas/ronkonkoma"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Ronkonkoma, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Ronkonkoma, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional Tesla Wall Connector and Level 2 EV charger installation in Ronkonkoma, New York. 
              Licensed Suffolk County electricians with same-day service available.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Free Ronkonkoma Quote
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-deep mb-8 text-center">
                Trusted EV Charger Installation in Ronkonkoma
              </h2>
              
              <div className="prose prose-lg max-w-none text-silver leading-relaxed">
                <p className="mb-6">
                  EV Charger Installation Suffolk is proud to serve Ronkonkoma residents with professional EV charger installation services. 
                  As Suffolk County's leading EV charging specialists, we provide complete installation solutions for 
                  Tesla Wall Connectors, Level 2 home charging stations, and commercial charging infrastructure.
                </p>

                <p className="mb-6">
                  Our licensed electricians understand the unique electrical requirements of Ronkonkoma area homes and 
                  businesses. From older residential properties to modern commercial buildings, we ensure code-compliant 
                  installations that provide reliable, fast charging for all electric vehicle brands.
                </p>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">
                  EV Charger Services in Ronkonkoma, NY
                </h3>

                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Tesla Wall Connector installation and setup</li>
                  <li>Level 2 home charging stations for all EV brands</li>
                  <li>Electrical panel upgrades and 200A service upgrades</li>
                  <li>Commercial and workplace charging solutions</li>
                  <li>Complete permit handling and inspection coordination</li>
                  <li>Emergency EV charger repair and maintenance</li>
                </ul>

                <p className="mb-6">
                  Whether you're a Tesla owner looking for the fastest home charging experience or need a universal 
                  Level 2 charger for your family's electric vehicles, we'll help you choose the perfect charging 
                  solution for your Ronkonkoma property.
                </p>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">
                  Why Choose EV Charger Installation Suffolk in Ronkonkoma?
                </h3>

                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Licensed and insured Suffolk County electricians</li>
                  <li>Same-day installation service available</li>
                  <li>5-year warranty on all installations</li>
                  <li>Free estimates and transparent pricing</li>
                  <li>Tesla certified installation specialists</li>
                  <li>Local Ronkonkoma service with community roots</li>
                </ul>

                <p className="mb-8">
                  Ready to start charging your electric vehicle at home? Contact EV Charger Installation Suffolk today for your free 
                  consultation and estimate. We'll assess your property, recommend the best charging solution, 
                  and handle everything from permits to final inspection.
                </p>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 mr-4 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  (516) 361-4068
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Ronkonkoma Visit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RonkonkomaService;