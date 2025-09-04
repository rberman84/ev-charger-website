import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas Long Island | EV Charger Installation Coverage</title>
        <meta name="description" content="PowerUp EV serves Suffolk & Nassau County with professional EV charger installation. Licensed electricians covering Ronkonkoma, Patchogue, Smithtown, Huntington & Hempstead." />
        <meta property="og:title" content="Service Areas Long Island | EV Charger Installation Coverage" />
        <meta property="og:description" content="PowerUp EV serves Suffolk & Nassau County with professional EV charger installation. Licensed electricians covering Ronkonkoma, Patchogue, Smithtown, Huntington & Hempstead." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PowerUp EV Long Island",
            "description": "Professional EV charger installation serving Long Island",
            "areaServed": [
              {"@type": "Place", "name": "Ronkonkoma, NY"},
              {"@type": "Place", "name": "Patchogue, NY"},
              {"@type": "Place", "name": "Smithtown, NY"},
              {"@type": "Place", "name": "Huntington, NY"},
              {"@type": "Place", "name": "Hempstead, NY"},
              {"@type": "AdministrativeArea", "name": "Suffolk County"},
              {"@type": "AdministrativeArea", "name": "Nassau County"}
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy-deep to-navy-medium relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Service Areas
                <span className="block text-electric-green">Across Long Island</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-silver-light">
                Professional EV charger installation throughout Suffolk & Nassau County
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
                throughout Long Island's most popular communities.
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
                Complete Long Island Coverage
              </h2>
              <p className="text-lg text-silver mb-8">
                While we specialize in the areas listed above, our licensed electricians 
                serve all of Suffolk and Nassau County. Don't see your town? Give us a call!
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
    </>
  );
};

export default ServiceAreas;