import SEOHead from "@/components/SEO/SEOHead";
import { Phone, MapPin, CheckCircle, DollarSign, Zap, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RiverheadService = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Home Level 2 EV Charger Installations",
      description: "Professional 240V EV charger installation for fast home charging"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Panel Upgrades & Load Checks", 
      description: "Electrical panel upgrades and proper load analysis for safe installations"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Garage, Driveway & Outdoor Setups",
      description: "Indoor garage installations and weatherproof outdoor mounting solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Charger Configuration",
      description: "WiFi-enabled chargers with smartphone app integration and monitoring"
    }
  ];

  const whyChooseUs = [
    "Licensed Suffolk County electricians",
    "Specialists in Level 2 EV charger installs",
    "Familiar with Riverhead's building permits and inspection process",
    "Knowledge of rebates through PSEG-LI",
    "Local installs near Tanger Outlets and Splish Splash"
  ];

  const localConsiderations = [
    "Many homes have long driveways requiring longer conduit runs",
    "Coastal installs need weatherproof boxes and PVC"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EV Charger Installation Riverhead",
    "description": "Professional EV charger installation services in Riverhead, NY. Licensed electricians specializing in Level 2 home charging stations and commercial installations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riverhead",
      "@region": "NY",
      "addressCountry": "US"
    },
    "telephone": "(516) 361-4068",
    "serviceArea": {
      "@type": "Place",
      "name": "Riverhead, NY"
    },
    "priceRange": "$850-$4500",
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <SEOHead
        title="EV Charger Installation Riverhead NY | Licensed Suffolk Electricians"
        description="Professional EV charger installation in Riverhead, NY. Licensed Suffolk electricians specializing in Level 2 home charging stations. Fast, safe installs across East End. Call (516) 361-4068"
        keywords="EV charger installation Riverhead NY, Tesla charger Riverhead, Level 2 charger installation, Riverhead electrician, EV charging station Riverhead"
        canonicalUrl="https://evchargerinstallationsuffolk.com/service-areas/riverhead"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                EV Charger Installation
                <span className="block text-electric-green">Riverhead, NY</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver-light">
                Fast, Local EV Charger Installs - Safe, clean installations across the East End, from homes to small businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-electric-green">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">(516) 361-4068</span>
                </div>
                <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-glow">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12">
                Why Riverhead Residents Pick Us
              </h2>
              <div className="grid gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-electric-green flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-silver">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-silver-light/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12">
                Services in Riverhead
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-navy-deep">
                        <div className="text-electric-green">{service.icon}</div>
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-silver">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost Guide */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12">
                Cost Guide for Riverhead
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <DollarSign className="w-8 h-8 text-electric-green mx-auto mb-2" />
                    <CardTitle className="text-navy-deep">Standard Install</CardTitle>
                    <CardDescription className="text-2xl font-bold text-electric-green">$850 - $1,500</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="w-8 h-8 text-electric-green mx-auto mb-2" />
                    <CardTitle className="text-navy-deep">Panel Upgrade</CardTitle>
                    <CardDescription className="text-2xl font-bold text-electric-green">$1,500 - $3,000</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <MapPin className="w-8 h-8 text-electric-green mx-auto mb-2" />
                    <CardTitle className="text-navy-deep">Exterior Trench</CardTitle>
                    <CardDescription className="text-2xl font-bold text-electric-green">$500 - $1,200</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local Considerations */}
        <section className="py-20 bg-silver-light/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-12">
                Local Considerations
              </h2>
              <div className="grid gap-6">
                {localConsiderations.map((consideration, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-electric-green flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-silver">{consideration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-xl shadow-elegant p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-silver mb-4 italic">
                  "Fast and professional service. They handled everything from permits to installation. Very happy with our new EV charger!"
                </blockquote>
                <cite className="text-navy-deep font-semibold">- Mark T., Riverhead</cite>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your EV Charger Installation?
              </h2>
              <p className="text-xl mb-8 text-silver-light">
                Call (516) 361-4068 now to schedule your Riverhead EV charger installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-electric-green">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold text-lg">(516) 361-4068</span>
                </div>
                <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-glow">
                  Schedule Installation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RiverheadService;