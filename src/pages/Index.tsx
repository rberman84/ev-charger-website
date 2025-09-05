import SEOHead from "@/components/SEO/SEOHead";
import AnimatedHero from "@/components/Sections/AnimatedHero";
import ServicesSection from "@/components/Sections/ServicesSection";
import EVInstallationAnimation from "@/components/Sections/EVInstallationAnimation";
import EVCalculatorWidget from "@/components/Sections/EVCalculatorWidget";
import EVPlannerWidget from "@/components/Sections/EVPlannerWidget";
import BeforeAfterSlider from "@/components/Sections/BeforeAfterSlider";
import ZipInfoPanel from "@/components/Sections/ZipInfoPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, CheckCircle2, Phone, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Schema data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://powerupevli.com#company",
    "name": "EV Charger Installation Suffolk",
    "url": "https://evchargersuffolk.com",
    "telephone": "(516) 361-4068",
    "logo": "https://powerupevli.com/logo.png",
    "image": "https://powerupevli.com/og-image-ev-charger.jpg",
    "priceRange": "$$",
    "description": "EV charger installation in Suffolk County. Tesla, ChargePoint, JuiceBox. Licensed, insured, code-compliant installs across Suffolk & Nassau.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Ronkonkoma",
      "addressRegion": "NY",
      "postalCode": "11779",
      "addressCountry": "US"
    },
    "areaServed": [
      {"@type": "City", "name": "Ronkonkoma"},
      {"@type": "City", "name": "Patchogue"},
      {"@type": "City", "name": "Smithtown"},
      {"@type": "City", "name": "Huntington"},
      {"@type": "City", "name": "Hempstead"},
      {"@type": "AdministrativeArea", "name": "Suffolk County"},
      {"@type": "AdministrativeArea", "name": "Nassau County"},
      {"@type": "Place", "name": "Suffolk County"}
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.808",
      "longitude": "-73.122"
    },
    "openingHoursSpecification": [
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "19:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "18:00"},
      {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "09:00", "closes": "17:00"}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Michael Rodriguez"},
        "reviewRating": {"@type": "Rating", "ratingValue": "5"},
        "reviewBody": "EV Charger Installation Suffolk installed my Tesla Wall Connector perfectly. Professional work, clean installation, and they handled all the permits. Highly recommend!",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {"@type": "Person", "name": "Sarah Chen"},
        "reviewRating": {"@type": "Rating", "ratingValue": "5"},
        "reviewBody": "Excellent service from start to finish. They upgraded my electrical panel and installed the EV charger in one day. Very knowledgeable team.",
        "datePublished": "2024-01-10"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/powerupevli",
      "https://www.instagram.com/powerupevli",
      "https://www.linkedin.com/company/powerupevli"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://evchargersuffolk.com",
    "name": "EV Charger Installation Suffolk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://powerupevli.com/search?q={query}",
      "query-input": "required name=query"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hey Google, how much does an EV charger cost in Suffolk County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Suffolk County homeowners spend between $850 and $1,500 for a standard Level 2 EV charger installation. Panel upgrades can add $1,500 to $3,000 depending on your electrical system."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for an EV charger installation in Suffolk County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most towns in Suffolk County require a permit and inspection. Our team handles the entire process so you don't have to worry about it."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical EV charger installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard Level 2 charger installation usually takes 3–5 hours once we're on site. More complex installs with trenching or panel upgrades may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a rebate for installing an EV charger in Suffolk County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PSEG Long Island offers rebates for qualifying Level 2 EV charger installations. We'll guide you through the paperwork and help you maximize your savings."
        }
      }
    ]
  };

  // Combine all schemas
  const combinedSchema = [localBusinessSchema, websiteSchema, faqSchema];

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
      text: "EV Charger Installation Suffolk installed my Tesla Wall Connector perfectly. Professional work, clean installation, and they handled all the permits. Highly recommend!"
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
      question: "Hey Google, how much does an EV charger cost in Suffolk County?",
      answer: "Most Suffolk County homeowners spend between $850 and $1,500 for a standard Level 2 EV charger installation. Panel upgrades can add $1,500 to $3,000 depending on your electrical system."
    },
    {
      question: "Do I need a permit for an EV charger installation in Suffolk County?",
      answer: "Yes. Most towns in Suffolk County require a permit and inspection. Our team handles the entire process so you don't have to worry about it."
    },
    {
      question: "How long does a typical EV charger installation take?",
      answer: "A standard Level 2 charger installation usually takes 3–5 hours once we're on site. More complex installs with trenching or panel upgrades may take longer."
    },
    {
      question: "Can I get a rebate for installing an EV charger in Suffolk County?",
      answer: "Yes. PSEG Long Island offers rebates for qualifying Level 2 EV charger installations. We'll guide you through the paperwork and help you maximize your savings."
    }
  ];

  return (
    <>
      <SEOHead 
        title="EV Charger Installation Suffolk County | Licensed Local Experts"
        description="Professional EV charger installation across Suffolk County. Tesla, ChargePoint & more. Licensed electricians. Fast, reliable, code-compliant installs. Free estimate today."
        keywords="EV charger installation Suffolk County, Tesla charger installation, home EV charging station, electric vehicle charger Nassau County, Suffolk County EV installation, EV charger electrician Suffolk County"
        schemaData={combinedSchema}
      />

      <AnimatedHero />

      <EVInstallationAnimation />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              Why Choose EV Charger Installation Suffolk for Suffolk County EV Charger Installation?
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
               As Suffolk County's premier EV charger installation specialists, we combine technical expertise 
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
                   Trusted by homeowners throughout Suffolk County with 4.9-star ratings.
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
              We provide professional EV charger installation throughout Suffolk County. 
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
            <Link to="/contact">
              <Button size="lg" className="bg-electric-green text-navy-deep border-electric-green hover:bg-electric-green/90 hover:scale-105 transition-all duration-300 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call for Service Area Confirmation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              What Our Suffolk County Customers Say
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

      {/* ZIP Info Panel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ZipInfoPanel />
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
              Get answers to common questions about EV charger installation in Suffolk County.
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
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300">
                Contact Our EV Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* EV Charger Fit & Cost Estimator Widget */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <EVCalculatorWidget />
        </div>
      </section>

      {/* EV Photo-Pin Placement Planner Widget */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EVPlannerWidget />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Install Your EV Charger?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join 500+ satisfied Suffolk County homeowners who trust EV Charger Installation Suffolk for professional 
            EV charger installation. Get your free estimate today and start charging at home tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-navy-deep hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
              >
                Get Free Estimate Now
              </Button>
            </Link>
            <Link to="tel:(516) 361-4068">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-electric-green text-electric-green bg-electric-green/10 hover:bg-electric-green hover:text-navy-deep transition-all duration-300 text-lg px-8 py-4 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                (516) 361-4068
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;