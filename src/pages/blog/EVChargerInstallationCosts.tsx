import SEOHead from "@/components/SEO/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

const EVChargerInstallationCosts = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Installation Costs Long Island | What to Expect in 2025"
        description="How much does it cost to install an EV charger on Long Island? Learn price ranges, panel upgrade costs, and what impacts installation."
        keywords="EV charger installation cost Long Island, electric vehicle charger price Suffolk County, Nassau County EV installation"
      />
      
      <article className="min-h-screen bg-background">
        <header className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <Badge className="bg-white/10 text-white mb-4">Cost Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                EV Charger Installation Costs Long Island | What to Expect in 2025
              </h1>
              <p className="text-xl text-white/90 mb-6">
                How much does it cost to install an EV charger on Long Island? Learn price ranges, panel upgrade costs, and what impacts installation pricing.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <span>January 10, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-silver mb-8">
                  Understanding EV charger installation costs helps Long Island homeowners budget properly and avoid surprises. Installation costs vary significantly based on your home's electrical setup, charger type, and installation complexity.
                </p>

                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-navy-deep mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 text-electric-green mr-2" />
                    Quick Cost Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Equipment Costs</h4>
                      <ul className="text-silver space-y-1">
                        <li>• Level 1 Charger: $300-600</li>
                        <li>• Level 2 Charger: $400-1,200</li>
                        <li>• Tesla Wall Connector: $400-500</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Installation Costs</h4>
                      <ul className="text-silver space-y-1">
                        <li>• Simple installation: $500-1,000</li>
                        <li>• Complex installation: $1,000-2,500</li>
                        <li>• Panel upgrade: $1,500-4,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Detailed Installation Cost Breakdown</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep flex items-center">
                      <CheckCircle className="w-6 h-6 text-electric-green mr-2" />
                      Standard Installation ($800 - $1,500 total)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-silver mb-4">
                      <strong>Best case scenario:</strong> Your electrical panel is near the garage, has available capacity, and requires minimal new wiring.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Includes:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• 240V dedicated circuit</li>
                          <li>• NEMA 14-50 outlet or hardwired connection</li>
                          <li>• Up to 25 feet of wiring</li>
                          <li>• Basic conduit and mounting</li>
                          <li>• Permits and inspection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Typical for:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Newer homes (post-1990)</li>
                          <li>• Garage adjacent to panel</li>
                          <li>• 200+ amp electrical service</li>
                          <li>• Available breaker space</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep flex items-center">
                      <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
                      Complex Installation ($1,500 - $3,000 total)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-silver mb-4">
                      <strong>Common scenario:</strong> Requires longer wire runs, panel modifications, or outdoor weatherproof installation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Additional costs:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Extended wiring runs: $5-8/foot</li>
                          <li>• Wall/ceiling penetrations: $200-400</li>
                          <li>• Outdoor rated equipment: $300-600</li>
                          <li>• Trenching for underground: $10-20/foot</li>
                          <li>• Load management system: $400-800</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Common in:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Detached garages</li>
                          <li>• Basement panel locations</li>
                          <li>• Homes with limited panel space</li>
                          <li>• Outdoor parking areas</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Panel Upgrade Costs</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-navy-deep mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    When Panel Upgrades Are Necessary
                  </h3>
                  <p className="text-silver mb-4">
                    Many Long Island homes built before 1990 have 100-amp or 150-amp electrical services that may not support EV charging alongside other high-draw appliances.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Upgrade Scenarios:</h4>
                      <ul className="text-silver space-y-1">
                        <li>• 100A to 200A service: $2,500-4,000</li>
                        <li>• Panel replacement only: $1,500-2,500</li>
                        <li>• Meter base upgrade: $800-1,500</li>
                        <li>• PSEG coordination: $500-1,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-deep mb-2">Signs You Need an Upgrade:</h4>
                      <ul className="text-silver space-y-1">
                        <li>• Frequent breaker trips</li>
                        <li>• Fuse box instead of breakers</li>
                        <li>• Lights dim when appliances start</li>
                        <li>• No available breaker spaces</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Long Island Specific Cost Factors</h2>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Permit Costs by County</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Nassau County</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-1">
                        <li>• Electrical permit: $100-200</li>
                        <li>• Inspection fee: $75-150</li>
                        <li>• Plan review: $50-100</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Suffolk County</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-1">
                        <li>• Electrical permit: $75-175</li>
                        <li>• Inspection fee: $50-125</li>
                        <li>• Plan review: $40-80</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Available Incentives & Rebates</h3>
                <div className="bg-electric-green/10 border border-electric-green/20 rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-navy-deep mb-3">Current Long Island Incentives:</h4>
                  <ul className="text-silver space-y-2">
                    <li>• <strong>Federal Tax Credit:</strong> Up to $1,000 for EV charger installation (30% of cost)</li>
                    <li>• <strong>NY State Rebate:</strong> Up to $500 for Level 2 chargers</li>
                    <li>• <strong>PSEG Long Island:</strong> Special EV time-of-use rates</li>
                    <li>• <strong>Municipal incentives:</strong> Some towns offer additional rebates</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">How to Keep Costs Down</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Before Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-2">
                        <li>• Get multiple quotes from licensed electricians</li>
                        <li>• Check if panel upgrade is really needed</li>
                        <li>• Consider charger placement to minimize wiring</li>
                        <li>• Apply for rebates before installation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep">Smart Choices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-2">
                        <li>• Choose appropriate amperage for your needs</li>
                        <li>• Consider load management vs. panel upgrade</li>
                        <li>• Bundle with other electrical work</li>
                        <li>• Install during moderate weather months</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-navy-deep text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Get an Accurate Quote for Your Long Island Home</h3>
                  <p className="mb-4">
                    Every home is different. Our licensed electricians provide free, detailed estimates with no hidden costs. We'll assess your electrical panel, recommend the best charger placement, and handle all permits and inspections.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button className="bg-electric-green hover:bg-electric-green/90">
                        Get Free Estimate
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
                        View All Services
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

export default EVChargerInstallationCosts;