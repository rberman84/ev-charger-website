import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Shield, Clock, Phone, Star } from "lucide-react";
import teslaImage from "@/assets/tesla-installation.jpg";

const TeslaEVChargerInstallation = () => {
  const teslaSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Tesla EV Charger Installation",
      "name": "Tesla EV Charger Installation Long Island",
      "description": "Professional installation of Tesla Wall Connectors and Level 2 charging for homes and businesses across Long Island.",
      "provider": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"},
      "brand": {"@type": "Brand", "name": "Tesla"},
      "areaServed": [
        {"@type": "Place", "name": "Long Island"},
        {"@type": "AdministrativeArea", "name": "Suffolk County"},
        {"@type": "AdministrativeArea", "name": "Nassau County"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tesla Charging Services",
        "itemListElement": [
          {"@type": "Offer", "name": "Tesla Wall Connector Install", "url": "https://powerupevli.com/services/tesla-ev-charger-installation"},
          {"@type": "Offer", "name": "Tesla Charger Panel Upgrades", "url": "https://powerupevli.com/services/electrical-panel-upgrades"},
          {"@type": "Offer", "name": "Tesla Installation Permits", "url": "https://powerupevli.com/services/permits-inspections"}
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://powerupevli.com/services"},
        {"@type": "ListItem", "position": 3, "name": "Tesla EV Charger Installation", "item": "https://powerupevli.com/services/tesla-ev-charger-installation"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast does a Tesla Wall Connector charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tesla Wall Connector provides up to 44 miles of range per hour of charging, making it the fastest Level 2 charging solution available for Tesla vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tesla Wall Connector compatible with other EVs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tesla Wall Connector is designed specifically for Tesla vehicles. For other EVs, we recommend universal Level 2 chargers like ChargePoint or JuiceBox."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Tesla Wall Connector installation cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tesla Wall Connector installation typically costs $1,545-$2,095 including the unit, standard installation, permits and inspection. Final cost depends on electrical upgrades needed."
          }
        }
      ]
    }
  ];

  const teslaFeatures = [
    "Up to 44 miles of range per hour of charging",
    "Wi-Fi connectivity for over-the-air updates",
    "25-foot cable length for flexible parking",
    "Compatible with all Tesla vehicles",
    "Auto-sensing handle for easy plugging",
    "Power sharing for multiple connectors",
    "Weather-resistant for outdoor installation",
    "Sleek, minimalist Tesla design"
  ];

  const installationProcess = [
    {
      step: "1",
      title: "Site Assessment",
      description: "We evaluate your electrical system, Tesla vehicle, and optimal charger placement location."
    },
    {
      step: "2", 
      title: "Electrical Upgrades",
      description: "Install any necessary electrical panel upgrades or dedicated circuits for Tesla charging."
    },
    {
      step: "3",
      title: "Wall Connector Installation", 
      description: "Mount and wire your Tesla Wall Connector with proper safety features and code compliance."
    },
    {
      step: "4",
      title: "Testing & Commissioning",
      description: "Complete system testing, Tesla app setup, and customer training on all features."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Tesla EV Charger Installation Long Island | Certified Wall Connector Experts"
        description="Get your Tesla Wall Connector professionally installed on Long Island. Licensed electricians. Fast, clean, code-compliant work. Serving Suffolk & Nassau."
        keywords="Tesla charger installation Long Island, Tesla Wall Connector installation, Tesla EV charger Nassau County, Tesla charging station Suffolk County, certified Tesla installer"
        schemaData={teslaSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${teslaImage})` }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <div className="border-2 border-electric-green/30 rounded-xl p-8 bg-white/10 backdrop-blur-sm shadow-elegant">
              <Badge className="bg-white/10 text-white mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Certified Tesla Installer
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Tesla EV Charger Installation{" "}
                <span className="text-electric-green">Long Island</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get the fastest, most reliable Tesla charging experience with professional Tesla Wall Connector 
                installation throughout Nassau and Suffolk Counties. Certified Tesla installers with same-day service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90 hover:scale-105 transition-all duration-300">
                Get Tesla Charger Quote
              </Button>
              <Button variant="outline" size="lg" className="border-electric-green text-electric-green bg-electric-green/10 hover:bg-electric-green hover:text-navy-deep transition-all duration-300 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tesla Wall Connector Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                Tesla Wall Connector: The Ultimate Home Charging Solution
              </h2>
              <p className="text-lg text-silver mb-8">
                The Tesla Wall Connector is Tesla's premium home charging solution, designed specifically 
                for Tesla vehicles. With up to 44 miles of range per hour of charging and smart connectivity 
                features, it's the fastest and most convenient way to charge your Tesla at home.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teslaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-electric-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-silver">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy-deep mb-6">Tesla Charger Pricing</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-silver/20">
                  <span className="font-medium text-navy-deep">Tesla Wall Connector</span>
                  <span className="text-lg font-semibold text-electric-green">$595</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-silver/20">
                  <span className="font-medium text-navy-deep">Standard Installation</span>
                  <span className="text-lg font-semibold text-electric-green">$800-$1,200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-silver/20">
                  <span className="font-medium text-navy-deep">Permits & Inspection</span>
                  <span className="text-lg font-semibold text-electric-green">$150-$300</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-electric-green/10 rounded-lg px-4">
                  <span className="font-bold text-navy-deep">Total Installed Price</span>
                  <span className="text-xl font-bold text-electric-green">$1,545-$2,095</span>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6 bg-gradient-accent hover:scale-105 transition-all duration-300">
                Get Exact Tesla Charger Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Our Tesla Wall Connector Installation Process
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              From initial assessment to final testing, our certified Tesla installers ensure your 
              Wall Connector is installed safely, efficiently, and to Tesla's exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationProcess.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-navy-deep text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-silver text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Why Choose Tesla Wall Connector Installation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">Fastest Home Charging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver">
                  Up to 44 miles of range per hour - the fastest Level 2 charging available for Tesla vehicles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">Tesla Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver">
                  Official Tesla-certified installation ensures warranty coverage and optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">Same-Day Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver">
                  Most Tesla Wall Connector installations completed the same day with no waiting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Tesla Owner Reviews
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-navy-deep">4.9/5</span>
              <span className="text-silver">from Tesla owners</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-base text-navy-deep">Jennifer Walsh</CardTitle>
                <p className="text-sm text-silver">Tesla Model Y Owner - Huntington, NY</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-silver italic">
                  "PowerUp EV installed my Tesla Wall Connector perfectly. The charging speed is incredible - 
                  I get a full charge overnight. Professional installation and they handled all the permits. 
                  Highly recommend for Tesla owners!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-base text-navy-deep">Robert Kim</CardTitle>
                <p className="text-sm text-silver">Tesla Model 3 Owner - Smithtown, NY</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-silver italic">
                  "Excellent Tesla charger installation service. They upgraded my panel and installed the 
                  Wall Connector in one day. The Tesla app integration works flawlessly. Worth every penny 
                  for the convenience and speed."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Install Your Tesla Wall Connector?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join hundreds of satisfied Tesla owners on Long Island who chose PowerUp EV for their 
            Tesla Wall Connector installation. Get faster charging and ultimate convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-navy-deep hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Get Tesla Charger Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-electric-green text-electric-green bg-electric-green/10 hover:bg-electric-green hover:text-navy-deep transition-all duration-300 text-lg px-8 py-4 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              (516) 361-4068
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeslaEVChargerInstallation;