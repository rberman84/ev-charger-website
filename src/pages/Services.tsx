import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Zap, Home, Building2, ShieldCheck, FileCheck, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Tesla EV Charger Installation",
      description: "Certified Tesla Wall Connector installation by licensed electricians. Fast, reliable charging at home.",
      href: "/services/tesla-ev-charger-installation",
      features: ["Tesla Wall Connector", "Certified Installation", "Code Compliant"]
    },
    {
      icon: Home,
      title: "Home EV Charger Installation", 
      description: "Level 2 home charging stations for all EV brands. ChargePoint, JuiceBox, Wallbox & more.",
      href: "/services/home-ev-charger-installation",
      features: ["Level 2 Charging", "All EV Brands", "Fast Installation"]
    },
    {
      icon: Building2,
      title: "Commercial EV Charger Installation",
      description: "Multi-unit and business EV charging solutions. Scalable, smart, and future-ready systems.",
      href: "/services/commercial-ev-charger-installation", 
      features: ["Multi-Unit Buildings", "Smart Systems", "Scalable Solutions"]
    },
    {
      icon: ShieldCheck,
      title: "Electrical Panel Upgrades",
      description: "Upgrade your electrical panel to support EV charging. Safe, code-compliant installations.",
      href: "/services/electrical-panel-upgrades",
      features: ["Panel Upgrades", "Code Compliant", "Safety First"]
    },
    {
      icon: FileCheck,
      title: "Permits & Inspections",
      description: "We handle all permits and inspections for your EV charger installation. Hassle-free process.",
      href: "/services/permits-inspections",
      features: ["Permit Handling", "Inspection Ready", "Hassle-Free"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>EV Charger Installation Services Long Island | Tesla & Level 2 Charging</title>
        <meta name="description" content="Professional EV charger installation services on Long Island. Tesla Wall Connectors, Level 2 home charging, commercial stations & panel upgrades. Licensed electricians." />
        <meta property="og:title" content="EV Charger Installation Services Long Island | Tesla & Level 2 Charging" />
        <meta property="og:description" content="Professional EV charger installation services on Long Island. Tesla Wall Connectors, Level 2 home charging, commercial stations & panel upgrades. Licensed electricians." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EV Charger Installation",
            "name": "EV Charger Installation Services Long Island",
            "description": "Professional installation of EV charging stations for homes and businesses across Long Island",
            "provider": {"@type": "LocalBusiness", "name": "PowerUp EV Long Island"},
            "areaServed": [
              {"@type": "AdministrativeArea", "name": "Suffolk County"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "EV Charging Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "name": service.title,
                "description": service.description,
                "url": `https://yourdomain.com${service.href}`
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                EV Charger Installation
                <span className="block text-electric-green">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver-light">
                Licensed electricians providing professional EV charging solutions across Long Island
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-electric-green">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">(631) 555-0100</span>
                </div>
                <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-glow">
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
                Our EV Charging Services
              </h2>
              <p className="text-lg text-silver max-w-3xl mx-auto">
                From residential Tesla Wall Connectors to commercial charging stations, 
                we provide comprehensive EV charging solutions for every need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.href} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-navy-deep text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-silver">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-silver">
                            <div className="w-2 h-2 bg-electric-green rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to={service.href}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-electric-green group-hover:text-white group-hover:border-electric-green transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-silver-light/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-deep mb-6">
                Why Choose PowerUp EV?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <ShieldCheck className="w-12 h-12 text-electric-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-deep mb-2">Licensed & Insured</h3>
                  <p className="text-silver">Fully licensed electricians with comprehensive insurance coverage</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-electric-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-deep mb-2">Fast Installation</h3>
                  <p className="text-silver">Quick, professional installation with minimal disruption</p>
                </div>
                <div className="text-center">
                  <FileCheck className="w-12 h-12 text-electric-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-deep mb-2">Code Compliant</h3>
                  <p className="text-silver">All work meets local codes and safety standards</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-electric-green">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">(631) 555-0100</span>
                </div>
                <Button className="bg-gradient-primary hover:scale-105 transition-all duration-300">
                  Get Your Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;