import SEOHead from "@/components/SEO/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Clock, CheckCircle, AlertTriangle, Phone } from "lucide-react";

const NassauCountyEVChargerPermits = () => {
  return (
    <>
      <SEOHead 
        title="Nassau County EV Charger Permit Requirements | Complete Guide 2025"
        description="Complete guide to EV charger permit requirements in Nassau County, including application process and inspection procedures."
        keywords="Nassau County EV charger permits, electric vehicle installation permits Nassau NY, EV charger building permits"
      />
      
      <article className="min-h-screen bg-background">
        <header className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <Badge className="bg-white/10 text-white mb-4">Permits & Codes</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nassau County EV Charger Permit Requirements
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Complete guide to EV charger permit requirements in Nassau County, including application process and inspection procedures.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <span>December 20, 2023</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-silver mb-8">
                  Installing an EV charger in Nassau County requires proper permits to ensure safety and code compliance. Understanding the permit process helps avoid delays and ensures your installation meets all local requirements.
                </p>

                <div className="bg-electric-green/10 border border-electric-green/20 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-navy-deep mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-electric-green mr-2" />
                    Quick Permit Overview
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-electric-green mx-auto mb-2" />
                      <h4 className="font-bold text-navy-deep mb-1">Required Permits</h4>
                      <p className="text-sm text-silver">Electrical permit for all EV charger installations</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-electric-green mx-auto mb-2" />
                      <h4 className="font-bold text-navy-deep mb-1">Processing Time</h4>
                      <p className="text-sm text-silver">5-7 business days for standard applications</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 text-electric-green mx-auto mb-2 flex items-center justify-center font-bold text-lg">$</div>
                      <h4 className="font-bold text-navy-deep mb-1">Permit Cost</h4>
                      <p className="text-sm text-silver">$100-250 depending on scope</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">When Do You Need a Permit?</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep">Permit Required Scenarios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3 text-green-700">✓ Always Requires Permit:</h4>
                        <ul className="text-silver space-y-2">
                          <li>• Level 2 EV charger installation (240V)</li>
                          <li>• New 240V circuit installation</li>
                          <li>• Electrical panel modifications</li>
                          <li>• Hardwired charger connections</li>
                          <li>• Outdoor electrical installations</li>
                          <li>• Commercial EV charger installations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3 text-blue-700">May Not Require Permit:</h4>
                        <ul className="text-silver space-y-2">
                          <li>• Using existing 240V outlet (NEMA 14-50)</li>
                          <li>• Portable Level 1 chargers</li>
                          <li>• Plug-in chargers to compliant outlets</li>
                        </ul>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                          <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Even if a permit isn't required, installations must still meet electrical codes. Consult with a licensed electrician.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Nassau County Permit Application Process</h2>

                <div className="grid gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <span className="bg-electric-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                        Prepare Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Required Submissions:</h5>
                          <ul className="text-silver space-y-1 text-sm">
                            <li>• Completed electrical permit application (Form EL-1)</li>
                            <li>• Site plan showing charger location</li>
                            <li>• Electrical load calculation</li>
                            <li>• Equipment specification sheets</li>
                            <li>• Licensed electrician information</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Additional for Complex Installs:</h5>
                          <ul className="text-silver space-y-1 text-sm">
                            <li>• Panel upgrade drawings</li>
                            <li>• Service entrance modifications</li>
                            <li>• Underground wiring plans</li>
                            <li>• PSEG coordination letters</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <span className="bg-electric-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                        Submit Application
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Submission Options:</h5>
                          <ul className="text-silver space-y-2">
                            <li><strong>Online:</strong> Nassau County Building Department portal</li>
                            <li><strong>In Person:</strong> 240 Old Country Road, Mineola</li>
                            <li><strong>By Mail:</strong> Nassau County Building Dept, Mineola NY 11501</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Fees (2024 Schedule):</h5>
                          <ul className="text-silver space-y-1">
                            <li>• Base electrical permit: $100</li>
                            <li>• Plan review fee: $50</li>
                            <li>• Inspection fee: $75</li>
                            <li>• Rush processing (optional): +$100</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <span className="bg-electric-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                        Plan Review & Approval
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Review Process:</h5>
                          <ul className="text-silver space-y-2">
                            <li>• Initial review: 3-5 business days</li>
                            <li>• Corrections period: 2-3 days if needed</li>
                            <li>• Final approval: 1-2 business days</li>
                            <li>• Permit issuance: Same day after approval</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Common Review Issues:</h5>
                          <ul className="text-silver space-y-1 text-sm">
                            <li>• Incomplete load calculations</li>
                            <li>• Missing equipment specs</li>
                            <li>• Unclear site plan details</li>
                            <li>• Code compliance questions</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-navy-deep flex items-center">
                        <span className="bg-electric-green text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                        Installation & Inspection
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Installation Phase:</h5>
                          <ul className="text-silver space-y-2">
                            <li>• Work must match approved plans exactly</li>
                            <li>• Licensed electrician must perform work</li>
                            <li>• Permit must be posted at job site</li>
                            <li>• Schedule inspection before covering work</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-navy-deep mb-2">Inspection Requirements:</h5>
                          <ul className="text-silver space-y-1 text-sm">
                            <li>• Rough-in inspection (before closing walls)</li>
                            <li>• Final electrical inspection</li>
                            <li>• Schedule 24-48 hours in advance</li>
                            <li>• Certificate of completion issued</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Code Requirements & Standards</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep">Nassau County EV Charger Code Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3">Electrical Code Compliance:</h4>
                        <ul className="text-silver space-y-2">
                          <li>• <strong>NEC Article 625:</strong> Electric Vehicle Power Transfer System</li>
                          <li>• <strong>Dedicated circuit:</strong> Required for Level 2 chargers</li>
                          <li>• <strong>GFCI protection:</strong> Mandatory in garages and outdoor locations</li>
                          <li>• <strong>Disconnect switch:</strong> Required within sight of charger</li>
                          <li>• <strong>Proper grounding:</strong> Equipment grounding conductor required</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-3">Installation Standards:</h4>
                        <ul className="text-silver space-y-2">
                          <li>• <strong>Height requirements:</strong> 18" minimum, 48" maximum above floor</li>
                          <li>• <strong>Clearances:</strong> 3 feet from combustible materials</li>
                          <li>• <strong>Ventilation:</strong> Adequate airflow around equipment</li>
                          <li>• <strong>Accessibility:</strong> ADA compliance for commercial installs</li>
                          <li>• <strong>Weatherproofing:</strong> NEMA 4 for outdoor installations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Common Permit Delays & How to Avoid Them</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        Common Delays
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-2 text-sm">
                        <li>• Incomplete application forms</li>
                        <li>• Missing electrical load calculations</li>
                        <li>• Unclear site plan drawings</li>
                        <li>• Equipment specifications not provided</li>
                        <li>• Unlicensed contractor information</li>
                        <li>• Code compliance questions</li>
                        <li>• PSEG coordination issues (for service upgrades)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-navy-deep flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Prevention Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-silver space-y-2 text-sm">
                        <li>• Work with licensed Nassau County electricians</li>
                        <li>• Submit complete applications first time</li>
                        <li>• Include detailed equipment cut sheets</li>
                        <li>• Provide accurate load calculations</li>
                        <li>• Schedule pre-submission consultations</li>
                        <li>• Allow extra time for complex installations</li>
                        <li>• Coordinate with utility company early</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Special Considerations</h2>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Historic Districts</h3>
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <p className="text-silver mb-4">
                    Properties in historic districts may have additional requirements for exterior installations. Contact the Nassau County Historic Preservation Commission if your property is in a designated historic area.
                  </p>
                  <ul className="text-silver space-y-1">
                    <li>• Additional design review may be required</li>
                    <li>• Exterior aesthetics must be considered</li>
                    <li>• Alternative installation methods may be needed</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-navy-deep mb-4">Condo & HOA Properties</h3>
                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <p className="text-silver mb-4">
                    Condominium and homeowner association properties may require additional approvals beyond county permits.
                  </p>
                  <ul className="text-silver space-y-1">
                    <li>• HOA architectural review committee approval</li>
                    <li>• Condo board permission required</li>
                    <li>• Insurance verification may be needed</li>
                    <li>• Shared electrical systems require special consideration</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-navy-deep mb-6">Contact Information</h2>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-deep">Nassau County Building Department</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Main Office:</h4>
                        <p className="text-silver mb-2">
                          240 Old Country Road<br />
                          Mineola, NY 11501
                        </p>
                        <p className="text-silver flex items-center mb-2">
                          <Phone className="w-4 h-4 mr-2" />
                          (516) 571-3770
                        </p>
                        <p className="text-silver">
                          <strong>Hours:</strong> Monday-Friday, 8:30 AM - 4:30 PM
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-deep mb-2">Online Resources:</h4>
                        <ul className="text-silver space-y-1">
                          <li>• Online permit portal available</li>
                          <li>• Permit status tracking</li>
                          <li>• Inspection scheduling online</li>
                          <li>• Fee schedule and forms available</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-navy-deep text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Let Us Handle Your Nassau County Permits</h3>
                  <p className="mb-4">
                    Our licensed electricians are experienced with Nassau County permit requirements and can handle the entire process for you. From application submission to final inspection, we ensure your EV charger installation meets all local codes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button className="bg-electric-green hover:bg-electric-green/90">
                        Get Permit Service
                      </Button>
                    </Link>
                    <Link to="/services/permits-inspections">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-deep">
                        Learn About Our Permit Service
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

export default NassauCountyEVChargerPermits;