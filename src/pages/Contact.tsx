import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact PowerUp EV | EV Charger Installation Long Island | Free Estimates"
        description="Contact PowerUp EV for professional EV charger installation throughout Long Island. Free estimates, same-day service. Call (516) 361-4068 or request a quote online."
        keywords="contact EV charger installer Long Island, EV charger installation quote, Tesla charger installation estimate, Nassau Suffolk County electrician"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact PowerUp EV Long Island",
            "description": "Contact PowerUp EV for professional EV charger installation throughout Long Island.",
            "url": "https://powerupevli.com/contact",
            "mainEntity": {"@type": "LocalBusiness", "@id": "https://powerupevli.com#company"}
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://powerupevli.com/"},
              {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://powerupevli.com/contact"}
            ]
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-electric-green" />
              <span className="text-lg">PowerUp EV Long Island</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free <span className="text-electric-green">EV Charger</span> Estimate
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to start charging at home? Contact our EV installation experts for a free consultation 
              and transparent pricing on Tesla Wall Connectors and Level 2 charging stations.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-navy-deep mb-6">
                  Request Your Free Estimate
                </h2>
                <p className="text-silver mb-8">
                  Fill out the form below and we'll contact you within 2 hours to schedule your free 
                  on-site consultation and provide a detailed estimate for your EV charger installation.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-deep mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-deep mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Smith" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-deep mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="(516) 361-4068" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-deep mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@example.com" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-deep mb-2">
                      Installation Address
                    </label>
                    <Input placeholder="123 Main St, Huntington, NY 11743" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-deep mb-2">
                      Electric Vehicle(s)
                    </label>
                    <Input placeholder="Tesla Model Y, Chevy Bolt, etc." className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-deep mb-2">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your EV charger installation needs, preferred location, any electrical concerns, etc."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300">
                    Get My Free Estimate
                  </Button>

                  <p className="text-sm text-silver">
                    * Required fields. We respect your privacy and never share your information.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-gradient-primary text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="w-6 h-6" />
                      <span>Call Now for Immediate Service</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">(516) 361-4068</div>
                    <p className="text-white/90">
                      Speak directly with our EV installation experts. Same-day consultations available.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-navy-deep">
                        <Mail className="w-5 h-5 text-electric-green" />
                        <span>Email Us</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver">info@powerupevli.com</p>
                      <p className="text-sm text-silver mt-2">
                        We respond to all emails within 4 hours
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-navy-deep">
                        <MapPin className="w-5 h-5 text-electric-green" />
                        <span>Service Area</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-silver">Nassau & Suffolk Counties</p>
                      <p className="text-sm text-silver mt-2">
                        All of Long Island, NY
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-navy-deep">
                      <Clock className="w-5 h-5 text-electric-green" />
                      <span>Business Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-silver">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>7:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="border-t border-silver/20 pt-2 mt-4">
                        <p className="text-sm">
                          <strong className="text-electric-green">Emergency Service Available 24/7</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-navy-deep mb-3">Why Choose PowerUp EV?</h3>
                    <ul className="space-y-2 text-sm text-silver">
                      <li>✓ Licensed & insured electricians</li>
                      <li>✓ Tesla certified installers</li>
                      <li>✓ Same-day service available</li>
                      <li>✓ 5-year installation warranty</li>
                      <li>✓ Free estimates & consultations</li>
                      <li>✓ All permits & inspections handled</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;