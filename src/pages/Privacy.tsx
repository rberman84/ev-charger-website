import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PowerUp EV Long Island</title>
        <meta name="description" content="Privacy Policy for PowerUp EV Long Island. Learn how we collect, use, and protect your personal information when you use our EV charger installation services." />
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
                Privacy Policy
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
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Information We Collect</h2>
                  <p className="mb-4">
                    When you contact PowerUp EV Long Island for EV charger installation services, we may collect the following information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Property information (address, electrical panel details)</li>
                    <li>Service preferences and requirements</li>
                    <li>Communication history and service records</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">How We Use Your Information</h2>
                  <p className="mb-4">We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Provide EV charger installation quotes and services</li>
                    <li>Schedule appointments and coordinate installations</li>
                    <li>Communicate about service updates and follow-ups</li>
                    <li>Improve our services and customer experience</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Information Sharing</h2>
                  <p className="mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>With trusted service providers who assist in our operations</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. This includes physical, electronic, and administrative safeguards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Cookies and Tracking</h2>
                  <p className="mb-4">
                    Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting 
                    the updated policy on our website with a new effective date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have questions about this privacy policy or how we handle your information, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 text-electric-green mb-2">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">(516) 361-4068</span>
                    </div>
                    <p>Email: info@powerupevli.com</p>
                    <p>Address: Serving Nassau & Suffolk Counties, Long Island, NY</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300">
                    Contact Us
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

export default Privacy;