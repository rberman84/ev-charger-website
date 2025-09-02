import SEOHead from "@/components/SEO/SEOHead";
import HeroSection from "@/components/Sections/HeroSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, CheckCircle2, Phone, Users, Award, Clock } from "lucide-react";

const Index = () => {
  // Schema data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PowerUp EV Long Island",
    "alternateName": "PowerUp EV",
    "description": "Professional EV charger installation throughout Long Island. Licensed experts in Tesla, home & commercial EV charging stations.",
    "url": "https://powerupevli.com",
    "telephone": "(631) 555-0100",
    "email": "info@powerupevli.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Long Island",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7891",
      "longitude": "-73.1350"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nassau County"
      },
      {
        "@type": "City", 
        "name": "Suffolk County"
      }
    ],
    "serviceType": "EV Charger Installation",
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-19:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const serviceAreas = [
    "Ronkonkoma", "Patchogue", "Smithtown", "Huntington", "Hempstead", 
    "Islip", "Babylon", "Brookhaven", "Oyster Bay", "North Hempstead",
    "Riverhead", "Southampton", "East Hampton", "Shelter Island"
  ];

  const reviews = [
    {
      name: "Michael Rodriguez",
      location: "Huntington, NY",
      rating: 5,
      text: "PowerUp EV installed my Tesla Wall Connector perfectly. Professional work, clean installation, and they handled all the permits. Highly recommend!"
    },
    {
      name: "Sarah Chen",
      location: "Smithtown, NY", 
      rating: 5,
      text: "Excellent service from start to finish. They upgraded my electrical panel and installed the EV charger in one day. Very knowledgeable team."
    },
    {
      name: "David Thompson",
      location: "Patchogue, NY",
      rating: 5,
      text: "Fast, reliable, and affordable. My home EV charging station works perfectly and the installation was done to code. Great experience overall."
    }
  ];

  const faqs = [
    {
      question: "How much does EV charger installation cost on Long Island?",
      answer: "EV charger installation costs typically range from $800-$2,500 depending on the charger type, electrical upgrades needed, and installation complexity. Tesla Wall Connectors typically cost $1,200-$1,800 installed. We provide free estimates with transparent pricing."
    },
    {
      question: "Do I need an electrical panel upgrade for an EV charger?",
      answer: "Many homes built before 2000 may need electrical panel upgrades to support Level 2 EV charging. We'll assess your current electrical system and recommend upgrades only if necessary. Most modern panels can support EV chargers with minor modifications."
    },
    {
      question: "How long does EV charger installation take?",
      answer: "Most residential EV charger installations take 2-4 hours. If electrical panel upgrades are needed, installation may take 4-8 hours. We complete most installations in a single day, including permit and inspection coordination."
    },
    {
      question: "What EV charger brands do you install?",
      answer: "We install all major EV charger brands including Tesla Wall Connector, ChargePoint, JuiceBox, Grizzl-E, ClipperCreek, and more. We'll help you choose the best charger for your vehicle and home setup."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all permit applications and coordinate inspections with local authorities throughout Nassau and Suffolk Counties. Our installations meet all local electrical codes and safety requirements."
    }
  ];

  return (
    <>
      <SEOHead 
        title="EV Charger Installation Long Island | Licensed Local Experts"
        description="Professional EV charger installation across Long Island. Tesla, ChargePoint & more. Licensed electricians. Fast, reliable, code-compliant installs. Free estimate today."
        keywords="EV charger installation Long Island, Tesla charger installation, home EV charging station, electric vehicle charger Nassau County, Suffolk County EV installation, EV charger electrician Long Island"
        schemaData={localBusinessSchema}
      />

      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Why Choose PowerUp EV for Long Island EV Charger Installation?
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              As Long Island's premier EV charger installation specialists, we combine technical expertise 
              with exceptional customer service to deliver reliable charging solutions for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">Licensed & Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver text-sm">
                  New York State licensed electricians with Tesla certification and 15+ years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver text-sm">
                  Fast installation scheduling with most EV chargers installed the same day you call.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">500+ Happy Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver text-sm">
                  Trusted by homeowners throughout Nassau and Suffolk Counties with 4.9-star ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-navy-deep">5-Year Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-silver text-sm">
                  Complete warranty coverage on all installations with ongoing maintenance support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              EV Charger Installation Service Areas
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              We provide professional EV charger installation throughout Nassau and Suffolk Counties on Long Island. 
              Our certified electricians serve residential and commercial customers across all major communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg hover:bg-electric-green/10 transition-colors">
                <MapPin className="w-4 h-4 text-electric-green" />
                <span className="text-sm font-medium text-navy-deep">{area}, NY</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-silver mb-4">Don't see your area listed? We likely serve your location too!</p>
            <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Call for Service Area Confirmation
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              What Our Long Island Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-navy-deep">4.9/5</span>
              <span className="text-silver">from 127+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-base text-navy-deep">{review.name}</CardTitle>
                  <p className="text-sm text-silver">{review.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-silver italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              Get answers to common questions about EV charger installation on Long Island.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-silver/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-navy-deep hover:text-electric-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-silver pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-silver mb-4">Have more questions about EV charger installation?</p>
            <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300">
              Contact Our EV Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Install Your EV Charger?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join 500+ satisfied Long Island homeowners who trust PowerUp EV for professional 
            EV charger installation. Get your free estimate today and start charging at home tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-navy-deep hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Get Free Estimate Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-navy-deep transition-all duration-300 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              (631) 555-0100
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;