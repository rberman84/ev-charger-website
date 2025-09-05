import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const MontaukService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Montauk, NY | End of Island EV Charging"
        description="Specialized EV charger installation in Montauk, NY. Marine-grade installations for the end of Long Island. Licensed electricians for coastal properties."
        keywords="EV charger installation Montauk NY, coastal EV charging, Tesla charger Montauk, marine EV charging Long Island"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Montauk, NY",
            "description": "Coastal EV charger installers in Montauk, NY. Marine-grade installations for end-of-island properties.",
            "provider": {"@type": "LocalBusiness", "@id": "https://evchargerinstallationsuffolk.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Montauk"},
              {"@type": "City", "name": "Montauk Point"},
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
              <span className="text-lg">Serving Montauk, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Montauk, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              End of Island EV Charging Solutions. Specialized marine-grade installations for Montauk's unique coastal environment with weatherproof Level 2 systems built to last.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Montauk EV Quote
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Montauk Property Owners Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">🌊</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Extreme coastal environment expertise</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Marine-grade weatherproof systems</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electricians</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">🛡️</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Storm-resistant installations</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Experience with Montauk's unique oceanfront challenges</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our Coastal EV Services in Montauk
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Marine-grade installations</h3>
                <p className="text-silver">Corrosion-resistant systems for oceanfront properties</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Storm-resistant mounting</h3>
                <p className="text-silver">Hurricane-rated hardware and enclosures</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Salt-air protection</h3>
                <p className="text-silver">Specialized coatings and materials</p>
              </div>
              <div className="bg-white p-6 rounded-lg beach-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Vacation home setups</h3>
                <p className="text-silver">Seasonal property charging solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Remote monitoring</h3>
                <p className="text-silver">Smart systems for property management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Emergency service</h3>
                <p className="text-silver">Rapid response for coastal weather damage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Investment Guide for Montauk
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Marine Install</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$1,500 – $2,200</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Storm-Resistant</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$2,000 – $3,000</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Oceanfront Setup</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$2,500 – $4,000</div>
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
                Coastal Challenges for Montauk
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🌀</span>
                  </div>
                  <p className="text-silver">Hurricane and nor'easter resistant installations required</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🧂</span>
                  </div>
                  <p className="text-silver">Extreme salt air corrosion demands premium materials</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🏖️</span>
                  </div>
                  <p className="text-silver">Sand and moisture infiltration prevention essential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Montauk EV Charging?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call (516) 361-4068 now to schedule your Montauk marine-grade EV charger installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric-green text-navy-deep hover:bg-electric-green/90">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-deep">
                Request Coastal Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MontaukService;