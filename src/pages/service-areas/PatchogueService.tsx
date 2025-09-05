import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const PatchogueService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Patchogue, NY | Licensed Local Experts"
        description="Get your EV charger installed in Patchogue by local electricians. Tesla, ChargePoint, JuiceBox & more. Safe, professional, and fully insured."
        keywords="EV charger installation Patchogue NY, Tesla charger Patchogue, home EV charging Patchogue, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Patchogue, NY",
            "description": "Local EV charger installers in Patchogue, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Patchogue"},
              {"@type": "City", "name": "East Patchogue"},
              {"@type": "City", "name": "North Patchogue"},
              {"@type": "City", "name": "Medford"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Brookhaven"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://powerupevli.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Patchogue, NY", "item": "https://powerupevli.com/service-areas/patchogue"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Patchogue, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Patchogue, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional EV charger installation services in Patchogue, New York. Tesla Wall Connectors, 
              home charging stations, and commercial solutions from licensed Suffolk County electricians.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Patchogue Installation Quote
            </Button>
          </div>
        </section>

        {/* FAQ Schema - Set A (Cost-focused) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Hey Google, how much does it cost to install an EV charger in Suffolk County?","acceptedAnswer":{"@type":"Answer","text":"Most Suffolk homeowners spend $850–$1,500 for a Level 2 install. Panel upgrades may add $1,500–$3,000."}},
              {"@type":"Question","name":"What's the cheapest way to install an EV charger at home?","acceptedAnswer":{"@type":"Answer","text":"Place the charger close to the panel to minimize conduit and labor. Longer runs and wall fishing increase cost."}},
              {"@type":"Question","name":"Do I need a new electrical panel for an EV charger?","acceptedAnswer":{"@type":"Answer","text":"Not always. Many homes fit a Level 2 charger with a load calc. Older 100A services often need upgrades."}},
              {"@type":"Question","name":"How long does a Level 2 EV charger installation take?","acceptedAnswer":{"@type":"Answer","text":"Most installs take 3–5 hours. Trenching or panel upgrades can add time."}},
              {"@type":"Question","name":"Where's the best place to install an EV charger at home?","acceptedAnswer":{"@type":"Answer","text":"Garages or exterior walls closest to the driveway. Shortest safe route from panel to charger is ideal."}}
            ]
          })}
        </script>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Reliable EV Charging Solutions for Patchogue Residents
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              EV Charger Installation Suffolk provides comprehensive EV charger installation services throughout Patchogue and the greater Suffolk County area. 
              Our certified electricians specialize in Tesla Wall Connectors, Level 2 home charging stations, and commercial charging infrastructure.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 mr-4 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
              <Button variant="outline" size="lg">
                Patchogue Service Areas
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PatchogueService;