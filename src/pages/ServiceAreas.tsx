import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ServiceAreasSidebar from "@/components/ServiceAreas/ServiceAreasSidebar";

const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Ronkonkoma",
      slug: "ronkonkoma",
      description: "Professional EV charger installation in Ronkonkoma and surrounding areas"
    },
    {
      name: "Patchogue",
      slug: "patchogue", 
      description: "Licensed EV charging solutions for Patchogue residents and businesses"
    },
    {
      name: "Smithtown",
      slug: "smithtown",
      description: "Expert EV charger installation services throughout Smithtown"
    },
    {
      name: "Huntington",
      slug: "huntington",
      description: "Certified EV charging station installation in Huntington area"
    },
    {
      name: "Hempstead",
      slug: "hempstead",
      description: "Professional EV charger installation for Hempstead communities"
    },
    {
      name: "Islip",
      slug: "islip",
      description: "Fast, safe EV charging installations for Islip homeowners and businesses"
    },
    {
      name: "Brookhaven", 
      slug: "brookhaven",
      description: "Professional EV charger installation serving Brookhaven communities"
    },
    {
      name: "Stony Brook",
      slug: "stony-brook", 
      description: "Licensed EV charger installation near Stony Brook University area"
    },
    {
      name: "Riverhead",
      slug: "riverhead",
      description: "Fast, local EV charger installs across the East End"
    },
    {
      name: "Commack",
      slug: "commack",
      description: "Professional EV charger installation in Commack residential areas"
    },
    {
      name: "Hauppauge",
      slug: "hauppauge",
      description: "Expert EV charging solutions for Hauppauge homes and businesses"
    },
    {
      name: "Port Jefferson",
      slug: "port-jefferson",
      description: "Coastal EV charger installation for Port Jefferson waterfront properties"
    },
    {
      name: "Babylon",
      slug: "babylon",
      description: "South Shore EV charging installations for Babylon residents"
    },
    {
      name: "Bay Shore",
      slug: "bay-shore",
      description: "Waterfront EV charger installation for Bay Shore properties"
    },
    {
      name: "Sayville",
      slug: "sayville",
      description: "Professional EV charging solutions for Sayville homeowners"
    },
    {
      name: "Farmingville",
      slug: "farmingville",
      description: "Central Suffolk EV charger installation in Farmingville"
    },
    {
      name: "Holbrook",
      slug: "holbrook",
      description: "Residential EV charging installations for Holbrook properties"
    },
    {
      name: "Southampton",
      slug: "southampton",
      description: "Luxury Hamptons EV charger installation for Southampton estates"
    },
    {
      name: "East Hampton",
      slug: "east-hampton",
      description: "Premium EV charging solutions for East Hampton luxury properties"
    },
    {
      name: "Montauk",
      slug: "montauk",
      description: "End of island marine-grade EV charger installation"
    },
    {
      name: "Shelter Island",
      slug: "shelter-island",
      description: "Island EV charging solutions with ferry logistics coordination"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas Suffolk County | EV Charger Installation Coverage</title>
        <meta name="description" content="EV Charger Installation Suffolk serves Suffolk County with professional EV charger installation. Licensed electricians covering 21 towns including Ronkonkoma, Patchogue, Smithtown, Huntington, Hamptons, and more." />
        <meta property="og:title" content="Service Areas Suffolk County | EV Charger Installation Coverage" />
        <meta property="og:description" content="EV Charger Installation Suffolk serves Suffolk County with professional EV charger installation. Licensed electricians covering 21 towns including Ronkonkoma, Patchogue, Smithtown, Huntington, Hamptons, and more." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EV Charger Installation Suffolk",
            "description": "Professional EV charger installation serving Suffolk County",
            "areaServed": [
              {"@type": "Place", "name": "Ronkonkoma, NY"},
              {"@type": "Place", "name": "Patchogue, NY"},
              {"@type": "Place", "name": "Smithtown, NY"},
              {"@type": "Place", "name": "Huntington, NY"},
              {"@type": "Place", "name": "Hempstead, NY"},
              {"@type": "Place", "name": "Islip, NY"},
              {"@type": "Place", "name": "Brookhaven, NY"},
              {"@type": "Place", "name": "Stony Brook, NY"},
              {"@type": "Place", "name": "Riverhead, NY"},
              {"@type": "Place", "name": "Commack, NY"},
              {"@type": "Place", "name": "Hauppauge, NY"},
              {"@type": "Place", "name": "Port Jefferson, NY"},
              {"@type": "Place", "name": "Babylon, NY"},
              {"@type": "Place", "name": "Bay Shore, NY"},
              {"@type": "Place", "name": "Sayville, NY"},
              {"@type": "Place", "name": "Farmingville, NY"},
              {"@type": "Place", "name": "Holbrook, NY"},
              {"@type": "Place", "name": "Southampton, NY"},
              {"@type": "Place", "name": "East Hampton, NY"},
              {"@type": "Place", "name": "Montauk, NY"},
              {"@type": "Place", "name": "Shelter Island, NY"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ]
          })}
        </script>
        {/* Suffolk County hub page override for global schema */}
        <script>
          {`window.__TOWN_SLUG_OVERRIDE__ = "suffolk-county";`}
        </script>
      </Helmet>

      <SidebarProvider>
        <div className="min-h-screen bg-background w-full">
          <div className="flex w-full">
            {/* Mobile Sidebar */}
            <div className="lg:hidden">
              <ServiceAreasSidebar />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <ServiceAreasSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile Header with Sidebar Toggle */}
              <div className="lg:hidden sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">Service Areas</h2>
                  <SidebarTrigger>
                    <Menu className="w-5 h-5" />
                  </SidebarTrigger>
                </div>
              </div>

              {/* Hero Section */}
              <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                      Service Areas
                      <span className="block text-electric-green">Across Suffolk County</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-silver-light">
                      Professional EV charger installation throughout Suffolk County.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div className="flex items-center space-x-2 text-electric-green">
                        <Phone className="w-5 h-5" />
                        <span className="font-semibold text-lg">(516) 361-4068</span>
                      </div>
                      <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-glow">
                        Get Free Estimate
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Areas Grid */}
              <section className="py-20">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
                      We Serve These Areas
                    </h2>
                    <p className="text-lg text-silver max-w-3xl mx-auto">
                       Our licensed electricians provide professional EV charger installation services 
                       throughout Suffolk County's most popular communities.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {serviceAreas.map((area) => (
                      <Card key={area.slug} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3 text-navy-deep">
                            <MapPin className="w-6 h-6 text-electric-green" />
                            {area.name}
                          </CardTitle>
                          <CardDescription className="text-silver">
                            {area.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Link to={`/service-areas/${area.slug}`}>
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-electric-green group-hover:text-white group-hover:border-electric-green transition-colors"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Area Info */}
              <section className="py-20 bg-silver-light/20">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-navy-deep mb-6">
                      Complete Suffolk County Coverage
                    </h2>
                    <p className="text-lg text-silver mb-8">
                       While we specialize in the areas listed above, our licensed electricians 
                       serve all of Suffolk County. Don't see your town? Give us a call!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div className="flex items-center space-x-2 text-electric-green">
                        <Phone className="w-5 h-5" />
                        <span className="font-semibold text-lg">(516) 361-4068</span>
                      </div>
                      <Button className="bg-gradient-primary hover:scale-105 transition-all duration-300">
                        Check Your Area
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default ServiceAreas;