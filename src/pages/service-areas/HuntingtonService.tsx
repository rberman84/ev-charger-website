import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HuntingtonService = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Huntington, NY | Residential & Commercial"
        description="Huntington's trusted EV charger installers. Licensed electricians for Tesla, ChargePoint & more. Safe, fast installs for homes & businesses."
        keywords="EV charger installation Huntington NY, Tesla charger Huntington, home EV charging Huntington, electric vehicle charger Suffolk County"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EV Charger Installation Suffolk",
            "image": "https://evchargerinstallationsuffolk.com/og-image-ev-charger.jpg",
            "@id": "https://evchargerinstallationsuffolk.com#company",
            "url": "https://evchargerinstallationsuffolk.com",
            "telephone": "+1-631-555-EVCS",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Huntington",
              "addressRegion": "NY",
              "postalCode": "11743",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.8677,
              "longitude": -73.4255
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "07:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "16:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/evchargerinstallationsuffolk",
              "https://www.instagram.com/evchargerinstallationsuffolk"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Huntington, NY",
            "description": "Local EV charger installers in Huntington, NY. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant.",
            "provider": {"@type": "LocalBusiness", "@id": "https://evchargerinstallationsuffolk.com#company"},
            "areaServed": [
              {"@type": "City", "name": "Huntington"},
              {"@type": "City", "name": "Huntington Station"},
              {"@type": "City", "name": "Cold Spring Harbor"},
              {"@type": "City", "name": "Centerport"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"}
            ],
            "serviceArea": {"@type": "AdministrativeArea", "name": "Town of Huntington"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://evchargerinstallationsuffolk.com/"},
              {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://evchargerinstallationsuffolk.com/service-areas"},
              {"@type": "ListItem", "position": 3, "name": "Huntington, NY", "item": "https://evchargerinstallationsuffolk.com/service-areas/huntington"}
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does EV charger installation take in Huntington?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most residential EV charger installations in Huntington take 2-4 hours. Complex installations requiring electrical panel upgrades may take a full day."
                }
              },
              {
                "@type": "Question", 
                "name": "Do I need permits for EV charger installation in Huntington, NY?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, EV charger installations in Huntington require electrical permits. We handle all permit applications and inspections for you."
                }
              },
              {
                "@type": "Question",
                "name": "What EV charger brands do you install in Huntington?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "We install all major EV charger brands in Huntington including Tesla Wall Connector, ChargePoint, JuiceBox, Emporia Vue, and Grizzl-E chargers."
                }
              },
              {
                "@type": "Question",
                "name": "How much does EV charger installation cost in Huntington?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EV charger installation costs in Huntington typically range from $800-2500 depending on charger type, electrical work needed, and distance from panel."
                }
              }
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-electric-green" />
              <span className="text-lg">Serving Huntington, NY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EV Charger Installation <span className="text-electric-green">Huntington, NY</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Charge Your EV Faster at Home. Licensed, code-compliant installs tailored to your home. 
              From permits to rebates, we make the process easy so you can enjoy fast, reliable charging every day.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Get Huntington EV Quote
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

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Why Huntington Homeowners Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Licensed Suffolk County electricians, trusted locally</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Specialists in Level 2 home EV charger installs (240V)</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">📋</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Knowledge of Huntington's permitting process</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-green font-bold text-lg">$</span>
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Familiar with rebates available through PSEG-Long Island</h3>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border col-span-full lg:col-span-2">
                <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-electric-green" />
                </div>
                <h3 className="font-semibold text-navy-deep mb-2">Local experience: installs completed near Huntington Village, Heckscher Park, and Walt Whitman Mall</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-deep mb-4">
                Our EV Charger Services in Huntington
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Level 2 Charger Installation</h3>
                <p className="text-silver">Most popular option for home charging</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Panel Upgrades & Load Calculations</h3>
                <p className="text-silver">Ensure your system can handle the new load</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Indoor/Outdoor Mounting</h3>
                <p className="text-silver">Garages, exteriors, or driveways</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Trenching & Conduit Runs</h3>
                <p className="text-silver">Professional underground installations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Smart Charger Setup</h3>
                <p className="text-silver">WiFi, app control, and scheduling</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-navy-deep mb-3">Permit & Rebate Assistance</h3>
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
                Cost Guide for Huntington
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
                  <h3 className="font-semibold text-navy-deep mb-3">Exterior Trenching</h3>
                  <div className="text-2xl font-bold text-electric-green mb-2">+$500 – $1,200</div>
                </div>
              </div>
              <div className="text-center bg-gradient-subtle p-6 rounded-lg border">
                <p className="font-semibold text-navy-deep">Get a personalized plan with our Photo-Pin Placement Planner.</p>
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
                    <span className="text-electric-green font-bold">1980s</span>
                  </div>
                  <p className="text-silver">Many homes built before the 1980s with smaller panels</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">📏</span>
                  </div>
                  <p className="text-silver">Steep driveways and detached garages often require longer conduit runs</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-electric-green font-bold">🌊</span>
                  </div>
                  <p className="text-silver">Neighborhoods near Huntington Bay may need exterior weatherproof installs</p>
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
                What Huntington Customers Say
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-subtle p-8 rounded-lg shadow-sm text-center">
                <div className="text-4xl text-electric-green mb-4">"</div>
                <p className="text-lg text-silver mb-6">
                  They installed my EV charger in Huntington in a single day. Fast, clean, and handled the rebate too.
                </p>
                <div className="text-navy-deep font-semibold">– Jason P., Huntington</div>
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
              Call today or request a free quote online. Fast, professional EV charger installation in Huntington.
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

export default HuntingtonService;