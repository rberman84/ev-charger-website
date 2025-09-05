import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HolbrookService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Holbrook, NY | Residential EV Charging Solutions"
        description="Professional EV charger installation in Holbrook, NY. Licensed electricians for Tesla & universal Level 2 home charging stations. Suffolk County service."
        keywords="EV charger installation Holbrook NY, Tesla charger Holbrook, home EV charging Holbrook, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Holbrook, NY",
            "description": "Local EV charger installers in Holbrook, NY. Professional residential charging solutions.",
            "provider": {"@type": "LocalBusiness", "@id": "https://evchargerinstallationsuffolk.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Holbrook"},
              {"@type": "City", "name": "Bohemia"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Holbrook, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Holbrook, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Reliable EV Charging for Holbrook Homes. Licensed Suffolk County electricians providing expert Level 2 charger installations with full service support and permitting.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Holbrook EV Quote
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Holbrook Residents Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electrical contractors</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Level 2 EV charging specialists</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">📋</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Local building code knowledge</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">$</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">PSEG-LI rebate navigation</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Experience throughout Holbrook residential areas</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our EV Charger Services in Holbrook
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Residential Level 2 installations</h3>
                <p className="text-silver">240V charging for home convenience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Panel upgrades & evaluations</h3>
                <p className="text-silver">Electrical capacity assessment and improvements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Garage & driveway setups</h3>
                <p className="text-silver">Indoor and outdoor installation options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Conduit & wiring work</h3>
                <p className="text-silver">Professional electrical runs and connections</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart charger setup</h3>
                <p className="text-silver">WiFi connectivity and app-based control</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Permit & inspection coordination</h3>
                <p className="text-silver">Full regulatory compliance management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Cost Guide for Holbrook
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
                  <h3 className="font-semibold text-navy-deep mb-3">Exterior Run</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">+$500 – $1,200</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Considerations */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-deep mb-8 text-center">
                Local Considerations for Holbrook
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🏘️</span>
                  </div>
                  <p className="text-silver">Suburban neighborhoods with diverse home configurations</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🚗</span>
                  </div>
                  <p className="text-silver">Many homes have attached garages suitable for charger installation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for EV Charging in Holbrook?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call (516) 361-4068 now to schedule your Holbrook EV charger installation.
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

export default HolbrookService;