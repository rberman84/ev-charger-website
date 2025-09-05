import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const BrookhavenService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Brookhaven, NY | Professional Local Installers"
        description="Professional EV charger installation in Brookhaven. Licensed electricians. Tesla, ChargePoint & more. Safe, code-compliant. Call today."
        keywords="EV charger installation Brookhaven NY, Tesla charger Brookhaven, Level 2 charging station Brookhaven, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Brookhaven, NY",
            "description": "Local EV charger installers in Brookhaven, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Brookhaven"},
              {"@type": "City", "name": "Patchogue"},
              {"@type": "City", "name": "Bellport"},
              {"@type": "City", "name": "Shirley"},
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
              {"@type": "ListItem", "position": 3, "name": "Brookhaven, NY", "item": "https://powerupevli.com/service-areas/brookhaven"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Brookhaven, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Brookhaven, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional EV Charger Installation in Brookhaven. Our licensed electricians specialize in safe, 
              code-compliant installations across Suffolk County. We take care of permits, rebates, and ensure a neat, professional job.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Brookhaven EV Quote
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Brookhaven Residents Pick Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">20+</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk electricians with 20+ years of experience</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Experts in Level 2 charger installations</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">📋</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Handle Brookhaven permits and inspections</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">$</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Knowledge of available rebates from PSEG-LI</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Local experience near Patchogue, Bellport, and Shirley</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our EV Charger Services in Brookhaven
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Level 2 Charger Installations</h3>
                <p className="text-silver">Fast charging for your home</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Panel Upgrades & Load Calculations</h3>
                <p className="text-silver">Ensure your system can handle the new load</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Exterior & Garage Installs</h3>
                <p className="text-silver">With trenching if needed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart Charger Programming</h3>
                <p className="text-silver">WiFi + app connectivity</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Permit & Rebate Guidance</h3>
                <p className="text-silver">We handle all the paperwork</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Cost Guide for Brookhaven
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Standard Install</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$850 – $1,500</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Panel Upgrade</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$1,500 – $3,000</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Exterior Trench</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$500 – $1,200</div>
                </div>
              </div>
              <div className="text-center bg-gradient-subtle p-6 rounded-lg border">
                <p className="font-semibold text-navy-deep">Try our Photo-Pin Planner to map your install in minutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Considerations */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-deep mb-8 text-center">
                Local Considerations
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">📏</span>
                  </div>
                  <p className="text-silver">Large Brookhaven homes often have long runs to detached garages</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">200A</span>
                  </div>
                  <p className="text-silver">Many newer homes have 200A panels, ready for Level 2 chargers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🌊</span>
                  </div>
                  <p className="text-silver">Coastal areas near Bellport and Shirley need weatherproof installs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                What Brookhaven Customers Say
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-subtle p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-electric-green mb-4">"</div>
                <p className="text-lg text-silver mb-6">
                  We had our EV charger installed in Brookhaven, and the work was spotless. Highly recommend.
                </p>
                <div className="text-navy-deep font-semibold">– Chris M., Brookhaven</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call or request your free quote online today. Professional EV charger installation in Brookhaven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric-green text-navy-deep hover:bg-electric-green/90">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-deep">
                Request Free Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrookhavenService;