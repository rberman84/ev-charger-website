import SEOHead from "@/components/SEO/SEOHead";
import { Phone, MapPin, CheckCircle, DollarSign, Zap, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StonyBrookService = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Level 2 Charger Installation",
      description: "Professional 240V EV charger installation for fast home charging"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Panel Upgrades & Load Calculations", 
      description: "Electrical panel upgrades and proper load analysis for safe installations"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Garage & Exterior Conduit Installs",
      description: "Indoor garage installations and weatherproof exterior mounting"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Charger Setup",
      description: "WiFi-enabled chargers with smartphone app integration"
    }
  ];

  const whyChooseUs = [
    "Licensed Suffolk electricians with 20+ years of experience",
    "Specialists in Level 2 home charger installations (240V)",
    "Familiar with permit processes in Brookhaven township", 
    "Knowledge of PSEG-LI rebates for Stony Brook residents",
    "Local installs near Stony Brook University and Avalon Park"
  ];

  const localConsiderations = [
    "University-area homes often need long conduit runs",
    "Older properties may require breaker space upgrades"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EV Charger Installation Stony Brook",
    "description": "Professional EV charger installation services in Stony Brook, NY. Licensed electricians specializing in Level 2 home charging stations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stony Brook",
      "@region": "NY",
      "addressCountry": "US"
    },
    "telephone": "(516) 361-4068",
    "serviceArea": {
      "@type": "Place",
      "name": "Stony Brook, NY"
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
        title="EV Charger Installation Stony Brook NY | Licensed Electricians"
        description="Professional EV charger installation in Stony Brook, NY. Licensed Suffolk electricians specializing in Level 2 home charging stations. Permits, rebates & code-compliant work. Call (516) 361-4068"
        keywords="EV charger installation Stony Brook NY, Tesla charger Stony Brook, Level 2 charger installation, Stony Brook electrician, EV charging station Stony Brook"
        canonicalUrl="https://evchargerinstallationsuffolk.com/service-areas/stony-brook"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                EV Charger Installation
                <span className="block text-electric-green">Stony Brook, NY</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver-light">
                Charge Smarter at Home - Licensed, professional installations that make charging your EV safe and simple.
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
                Why Stony Brook Homeowners Choose Us
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
                Services in Stony Brook
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
                Cost Guide for Stony Brook
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
                    <CardTitle className="text-navy-deep">Trenching/Exterior</CardTitle>
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
                  "Professional installation with excellent attention to detail. The team was knowledgeable about local codes and made the process seamless."
                </blockquote>
                <cite className="text-navy-deep font-semibold">- Jennifer L., Stony Brook</cite>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Install Your EV Charger?
              </h2>
              <p className="text-xl mb-8 text-silver-light">
                Call (516) 361-4068 today for your free EV charger quote in Stony Brook.
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

export default StonyBrookService;