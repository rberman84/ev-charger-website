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

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Choose Us in Smithtown
              </h2>
              <p className="text-lg text-silver max-w-3xl mx-auto">
                Power Your EV at Home with a Safe, Fast Installation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">20+</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electricians with 20+ years of experience</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Knowledge of local Smithtown permit requirements</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">$</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Expertise in handling PSEG-LI rebates for EV charger installations</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">★</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Professional, clean, and friendly service from start to finish</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our EV Charger Services in Smithtown
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Level 2 Charger Installation (240V)</h3>
                <p className="text-silver">Most popular option for fast charging at home</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Panel Upgrades & Load Calculations</h3>
                <p className="text-silver">Make sure your system can handle your EV</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Garage, Exterior, and Driveway Installs</h3>
                <p className="text-silver">Neat conduit runs, weatherproofing, trenching if needed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart Charger Setup</h3>
                <p className="text-silver">WiFi-enabled units for scheduling and monitoring</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Rebate Assistance</h3>
                <p className="text-silver">Guidance on available rebates through PSEG-Long Island</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                How the Process Works
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-green text-navy-deep rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-navy-deep mb-2">Free Virtual or On-Site Quote</h3>
                <p className="text-silver">We assess your panel and location</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-green text-navy-deep rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-navy-deep mb-2">Permitting & Rebates</h3>
                <p className="text-silver">We handle paperwork so you don't have to</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-green text-navy-deep rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-navy-deep mb-2">Professional Installation</h3>
                <p className="text-silver">Clean, code-compliant work</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-green text-navy-deep rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold text-navy-deep mb-2">Testing & Walkthrough</h3>
                <p className="text-silver">We ensure your charger works flawlessly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Average Cost for Smithtown Homeowners
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-navy-deep mb-3">Standard Level 2 Installation</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$850 – $1,500</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-navy-deep mb-3">Panel Upgrade (if needed)</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">$1,500 – $3,000</div>
                </div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <p className="text-silver mb-4">Final cost depends on run length, amperage, and installation type.</p>
                <p className="font-semibold text-navy-deep">Use our Free Placement Planner to get a more accurate estimate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-deep mb-8 text-center">
                Local Knowledge Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy-deep mb-4">Smithtown homes often feature:</h3>
                  <ul className="space-y-3 text-silver">
                    <li className="flex items-start">
                      <span className="text-electric-green mr-2">•</span>
                      Attached garages with 100A–150A panels
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-green mr-2">•</span>
                      Exterior driveways requiring PVC conduit runs
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-green mr-2">•</span>
                      Older homes with limited panel space
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-silver leading-relaxed">
                    We've worked on jobs near Lake Ronkonkoma and Smithtown Landing Country Club, 
                    so we know the common setups and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                What Smithtown Customers Say
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-electric-green mb-4">"</div>
                <p className="text-lg text-silver mb-6">
                  Fast, professional, and explained everything clearly. My Tesla charger was installed in one day and works perfectly!
                </p>
                <div className="text-navy-deep font-semibold">– Smithtown homeowner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy-deep text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Get Started Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call us now or request a free quote online. We'll make sure your EV is charging safely and efficiently in your own home.
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

export default SmithtownService;