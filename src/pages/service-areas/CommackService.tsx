import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const CommackService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Commack, NY | Level 2 Home Charging"
        description="Professional EV charger installation in Commack, NY. Licensed electricians for Tesla, ChargePoint & universal chargers. Fast, reliable home charging solutions."
        keywords="EV charger installation Commack NY, Tesla charger Commack, home EV charging Commack, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Commack, NY",
            "description": "Local EV charger installers in Commack, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://evchargerinstallationsuffolk.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Commack"},
              {"@type": "City", "name": "East Northport"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Huntington"}
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Commack, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Commack, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Fast, Professional EV Charger Installation. Licensed Suffolk County electricians specializing in Level 2 home charging stations. From permits to activation, we handle everything.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Commack EV Quote
            </Button>
          </div>
        </section>

        {/* FAQ Schema - Set C (Technical/Equipment) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            "mainEntity":[
              {"@type":"Question","name":"Can you install a Tesla Wall Connector in Suffolk County?","acceptedAnswer":{"@type":"Answer","text":"Yes. We install Tesla Wall Connectors and other brands like Emporia, Wallbox, ChargePoint."}},
              {"@type":"Question","name":"What's the difference between Level 1 and Level 2 chargers?","acceptedAnswer":{"@type":"Answer","text":"Level 1 uses 120V and is slow. Level 2 uses 240V and can be up to 10x faster for daily use."}},
              {"@type":"Question","name":"Will an EV charger raise my electric bill?","acceptedAnswer":{"@type":"Answer","text":"Charging adds to your bill but costs less than gas. A full charge often runs $10–$15 depending on rates."}},
              {"@type":"Question","name":"Can you install more than one EV charger at my house?","acceptedAnswer":{"@type":"Answer","text":"Yes, with sufficient panel capacity. We can also use load-sharing or dual-port units."}},
              {"@type":"Question","name":"How soon after I buy an EV can I get a charger installed?","acceptedAnswer":{"@type":"Answer","text":"Once permits are approved, most installs can be scheduled within 1–2 weeks."}}
            ]
          })}
        </script>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Commack Residents Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electricians</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Level 2 EV charger specialists (240V)</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">📋</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Knowledge of local permitting requirements</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">$</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">PSEG-Long Island rebate assistance</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Local experience throughout Commack neighborhoods</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our EV Charger Services in Commack
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Home Level 2 EV charger installations</h3>
                <p className="text-silver">240V charging for faster home charging</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Panel upgrades & load checks</h3>
                <p className="text-silver">Ensure electrical capacity for safe operation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Garage & driveway setups</h3>
                <p className="text-silver">Indoor and outdoor mounting options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart charger configuration</h3>
                <p className="text-silver">WiFi setup, app control, and scheduling</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Permit handling</h3>
                <p className="text-silver">Complete permit and inspection coordination</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Rebate assistance</h3>
                <p className="text-silver">Help maximize available incentives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Cost Guide for Commack
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
                Local Considerations for Commack
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🏠</span>
                  </div>
                  <p className="text-silver">Many homes have attached garages, ideal for charger placement</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">⚡</span>
                  </div>
                  <p className="text-silver">Older electrical panels may require upgrades for safe EV charging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Fast Home Charging?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call (516) 361-4068 now to schedule your Commack EV charger installation.
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

export default CommackService;