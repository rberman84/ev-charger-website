import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const EastHamptonService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation East Hampton, NY | Premium Hamptons EV Charging"
        description="Elite EV charger installation in East Hampton, NY. Licensed electricians for luxury Hamptons estates. Tesla & premium Level 2 charging solutions."
        keywords="EV charger installation East Hampton NY, Hamptons EV charging, Tesla charger East Hampton, luxury estate EV charging"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation East Hampton, NY",
            "description": "Premium EV charger installers in East Hampton, NY. Luxury Hamptons installations for elite properties.",
            "provider": {"@type": "LocalBusiness", "@id": "https://evchargerinstallationsuffolk.com#company"},
            "areaServed": [
              {"@type": "City", "name": "East Hampton"},
              {"@type": "City", "name": "Amagansett"},
              {"@type": "City", "name": "Wainscott"},
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
              <span className="text-lg">Serving East Hampton, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">East Hampton, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Elite Hamptons EV Charging Solutions. Exclusive installations for East Hampton's most prestigious properties with premium Level 2 systems and concierge-level service.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get East Hampton Quote
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why East Hampton Estate Owners Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">👑</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Elite estate installation specialists</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Premium Level 2 charging systems</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electricians</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">🎨</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Architecturally integrated solutions</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Exclusive experience with East Hampton's premier estates</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our Elite EV Services in East Hampton
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Premium estate installations</h3>
                <p className="text-silver">Luxury charging systems for high-end properties</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Multi-vehicle charging arrays</h3>
                <p className="text-silver">Multiple stations for luxury car collections</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Oceanfront installations</h3>
                <p className="text-silver">Marine-grade systems for waterfront estates</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Historic property integration</h3>
                <p className="text-silver">Sensitive installations for heritage properties</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart estate automation</h3>
                <p className="text-silver">Integration with luxury home systems</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Concierge service</h3>
                <p className="text-silver">Full-service permit and inspection management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Investment Guide for East Hampton
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Premium Install</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$2,000 – $3,500</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Multi-Car Array</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$5,000 – $8,000</div>
                </div>
                <div className="bg-gradient-subtle p-6 rounded-lg border">
                  <h3 className="font-semibold text-navy-deep mb-3">Estate System</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$10,000 – $15,000</div>
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
                Elite Considerations for East Hampton
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🏛️</span>
                  </div>
                  <p className="text-silver">Historic preservation guidelines for heritage properties</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🌊</span>
                  </div>
                  <p className="text-silver">Premium oceanfront installations with salt-air protection</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🎭</span>
                  </div>
                  <p className="text-silver">Discreet installations maintaining estate aesthetics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Elite EV Charging?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call (516) 361-4068 now to schedule your East Hampton premium EV charger installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-electric-green text-navy-deep hover:bg-electric-green/90">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-deep">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EastHamptonService;