import SEOHead from "@/components/SEO/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, AlertTriangle, Home, Zap } from "lucide-react";

const PrepareHomeEVChargerInstallation = () => {
  return (
    <>
      <SEOHead 
        title="How to Prepare Your Long Island Home for EV Charger Installation"
        description="Planning an EV charger installation? Learn how to prep your panel, garage, and wiring. Licensed Long Island electricians explain step by step."
        keywords="prepare home EV charger installation Long Island, electrical panel preparation, garage EV charger setup"
      />
      
      <article className="min-h-screen bg-background">
        <header className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <Badge className="bg-white/10 text-white mb-4">Installation Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How to Prepare Your Long Island Home for EV Charger Installation
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Planning an EV charger installation? Learn how to prep your panel, garage, and wiring. Licensed Long Island electricians explain step by step.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <span>January 5, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-silver mb-8">
                  Proper preparation is key to a smooth EV charger installation. By understanding what's involved and preparing your home accordingly, you can minimize costs, reduce installation time, and ensure optimal performance of your new charging station.
                </p>

                <div className="bg-electric-green/10 border border-electric-green/20 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-navy-deep mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-electric-green mr-2" />
                    Pre-Installation Checklist
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Essential Steps:</h4>
                      <ul className="text-silver space-y-1">
                        <li>✓ Assess electrical panel capacity</li>
                        <li>✓ Choose optimal charger location</li>
                        <li>✓ Check permit requirements</li>
                        <li>✓ Clear installation area</li>
                        <li>✓ Schedule electrical inspection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Timeline:</h4>
                      <ul className="text-silver space-y-1">
                        <li>• Planning phase: 1-2 weeks</li>
                        <li>• Permit approval: 5-10 days</li>
                        <li>• Installation day: 4-8 hours</li>
                        <li>• Final inspection: 1-3 days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Step 1: Electrical Panel Assessment</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep flex items-center">
                      <Zap className="w-6 h-6 text-electric-green mr-2" />
                      Check Your Panel Capacity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-silver mb-4">
                      The first step is determining if your electrical panel can handle the additional load of an EV charger. Most Long Island homes need at least 200-amp service for optimal EV charging.
                    </p>
                    
                    <h4 className="font-bold text-navy-deep mb-3">What to Look For:</h4>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-navy-deep mb-2">✓ Good Signs:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• 200+ amp main breaker</li>
                          <li>• Available breaker slots (2 adjacent)</li>
                          <li>• Circuit breakers (not fuses)</li>
                          <li>• Panel built after 1990</li>
                          <li>• No burning smell or rust</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-600 mb-2">⚠ Warning Signs:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• 100-150 amp service</li>
                          <li>• Federal Pacific or Zinsco panels</li>
                          <li>• Fuse box instead of breakers</li>
                          <li>• Frequently tripping breakers</li>
                          <li>• Dimming lights when appliances start</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-700">
                            <strong>Professional Assessment Required:</strong> Never attempt to evaluate electrical capacity yourself. A licensed electrician must perform a proper load calculation to determine if your panel can safely support EV charging.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Step 2: Choose the Perfect Location</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <Home className="w-5 h-5 text-electric-green mr-2" />
                        Indoor Installation (Garage)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy-deep mb-2">Pros:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• Protected from weather</li>
                          <li>• More security</li>
                          <li>• Lower equipment costs</li>
                          <li>• Easier maintenance</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy-deep mb-2">Requirements:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• GFCI protection required</li>
                          <li>• Minimum 3 feet from gas appliances</li>
                          <li>• Proper ventilation</li>
                          <li>• Easy cable management</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <Home className="w-5 h-5 text-electric-green mr-2" />
                        Outdoor Installation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy-deep mb-2">Pros:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• Suitable for driveways</li>
                          <li>• Multiple parking spots</li>
                          <li>• No garage required</li>
                          <li>• Future-proofing for multiple EVs</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy-deep mb-2">Requirements:</h5>
                        <ul className="text-silver space-y-1 text-sm">
                          <li>• Weather-resistant (NEMA 3R/4)</li>
                          <li>• Proper mounting height</li>
                          <li>• Underground wiring (often)</li>
                          <li>• Adequate lighting</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Optimal Placement Guidelines</h3>
                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <ul className="text-silver space-y-2">
                    <li><strong>Distance from panel:</strong> Minimize wire runs to reduce costs (under 50 feet ideal)</li>
                    <li><strong>Vehicle positioning:</strong> Ensure charging port is accessible when parked</li>
                    <li><strong>Cable management:</strong> Plan for 18-25 foot charging cables</li>
                    <li><strong>Future expansion:</strong> Consider space for additional chargers</li>
                    <li><strong>Utility access:</strong> Ensure service panel and meter are accessible</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Step 3: Prepare the Installation Area</h2>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Physical Preparation</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-navy-deep mb-3">Clear the Area:</h4>
                    <ul className="text-silver space-y-2">
                      <li>• Remove vehicles and storage items</li>
                      <li>• Clear 6-foot radius around installation site</li>
                      <li>• Ensure adequate lighting</li>
                      <li>• Remove any wall decorations or shelving</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-deep mb-3">Wall Preparation:</h4>
                    <ul className="text-silver space-y-2">
                      <li>• Locate wall studs for mounting</li>
                      <li>• Check for hidden wiring or plumbing</li>
                      <li>• Ensure wall can support charger weight</li>
                      <li>• Plan conduit routing path</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Step 4: Permits and Inspections</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep">Long Island Permit Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3">Nassau County:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Electrical permit required</li>
                          <li>• Submit installation plans</li>
                          <li>• Schedule rough-in inspection</li>
                          <li>• Final inspection after completion</li>
                          <li>• Typical approval: 5-7 business days</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3">Suffolk County:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Building & electrical permits</li>
                          <li>• Load calculation submission</li>
                          <li>• Inspection scheduling required</li>
                          <li>• Certificate of occupancy update</li>
                          <li>• Typical approval: 7-10 business days</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Step 5: Final Preparation Tips</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Day Before Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-1 text-sm">
                        <li>• Confirm electrician appointment</li>
                        <li>• Clear parking area</li>
                        <li>• Locate electrical panel</li>
                        <li>• Charge devices (power may be off)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Installation Day</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-1 text-sm">
                        <li>• Be available for questions</li>
                        <li>• Keep pets indoors</li>
                        <li>• Document work progress</li>
                        <li>• Test charger operation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">After Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-1 text-sm">
                        <li>• Schedule final inspection</li>
                        <li>• Register charger warranty</li>
                        <li>• Download charger app</li>
                        <li>• Test all safety features</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-navy-deep text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Ready for Professional Installation?</h3>
                  <p className="mb-4">
                    Our licensed Long Island electricians handle every aspect of EV charger installation, from initial assessment to final inspection. We'll guide you through each step and ensure your home is properly prepared.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button className="bg-electric-green hover:bg-electric-green/90">
                        Schedule Assessment
                      </Button>
                    </Link>
                    <Link to="/services/home-ev-charger-installation">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
                        Learn About Our Process
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PrepareHomeEVChargerInstallation;