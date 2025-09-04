import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PowerUp EV Long Island</title>
        <meta name="description" content="Terms of Service for PowerUp EV Long Island. Read our terms and conditions for EV charger installation services across Nassau and Suffolk County." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-silver-light">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-silver">
                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Acceptance of Terms</h2>
                  <p className="mb-4">
                    By using PowerUp EV Long Island's services, you agree to these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Services Provided</h2>
                  <p className="mb-4">PowerUp EV Long Island provides:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>EV charger installation (Tesla, Level 2 home chargers, commercial stations)</li>
                    <li>Electrical panel upgrades and modifications</li>
                    <li>Permit applications and inspection coordination</li>
                    <li>Electrical code compliance and safety certifications</li>
                    <li>Ongoing maintenance and support services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Service Area</h2>
                  <p className="mb-4">
                    Our services are available throughout Nassau and Suffolk Counties on Long Island, New York. 
                    Service availability may vary by location and project requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Pricing and Payment</h2>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>All estimates are provided free of charge</li>
                    <li>Final pricing may vary based on site conditions and permit requirements</li>
                    <li>Payment terms will be specified in your service agreement</li>
                    <li>We accept cash, check, and major credit cards</li>
                    <li>Full payment is typically required upon completion of work</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Warranties and Guarantees</h2>
                  <p className="mb-4">We provide:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>5-year warranty on installation workmanship</li>
                    <li>Manufacturer warranties on equipment (varies by product)</li>
                    <li>Code compliance guarantee for all installations</li>
                    <li>Free service calls for warranty-related issues</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Customer Responsibilities</h2>
                  <p className="mb-4">Customers are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Providing accurate property and electrical information</li>
                    <li>Ensuring access to electrical panels and installation areas</li>
                    <li>Obtaining any required HOA or property management approvals</li>
                    <li>Maintaining clear pathways for equipment and materials</li>
                    <li>Timely payment according to agreed terms</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Limitation of Liability</h2>
                  <p className="mb-4">
                    PowerUp EV Long Island's liability is limited to the cost of services provided. 
                    We are not responsible for indirect, consequential, or incidental damages. 
                    Our work is fully insured and meets all applicable codes and standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Permits and Inspections</h2>
                  <p className="mb-4">
                    We handle permit applications and coordinate inspections as part of our service. 
                    Final permit approval is subject to local authority requirements and may affect 
                    project timeline and costs.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Cancellation Policy</h2>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Estimates can be cancelled at any time without charge</li>
                    <li>Scheduled installations can be rescheduled with 24-hour notice</li>
                    <li>Cancellations after work begins may incur material and labor charges</li>
                    <li>Permit fees are non-refundable once submitted</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Governing Law</h2>
                  <p className="mb-4">
                    These terms are governed by the laws of New York State. Any disputes will be 
                    resolved in the courts of Nassau or Suffolk County, New York.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Changes to Terms</h2>
                  <p className="mb-4">
                    We reserve the right to modify these terms at any time. Changes will be posted 
                    on our website with an updated effective date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Contact Information</h2>
                  <p className="mb-4">
                    For questions about these terms or our services, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 text-electric-green mb-2">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">(516) 361-4068</span>
                    </div>
                    <p>Email: info@powerupevli.com</p>
                    <p>Address: Serving Nassau & Suffolk Counties, Long Island, NY</p>
                    <p>Licensed & Insured New York State Electrical Contractors</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300">
                    Get Your Free Estimate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;