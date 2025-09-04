import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Home, Building, Settings, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Tesla EV Charger Installation",
      description: "Certified Tesla Wall Connector installation with proper electrical upgrades and permits.",
      icon: Zap,
      link: "/services/tesla-ev-charger-installation",
      features: ["Tesla Certified", "Wall Connector", "Mobile Connector Support"]
    },
    {
      title: "Home EV Charger Installation", 
      description: "Professional Level 2 home charging stations for all electric vehicle brands.",
      icon: Home,
      link: "/services/home-ev-charger-installation",
      features: ["Level 2 Charging", "All EV Brands", "Smart Features"]
    },
    {
      title: "Commercial EV Charger Installation",
      description: "Commercial and workplace charging solutions for businesses and multi-unit properties.",
      icon: Building,
      link: "/services/commercial-ev-charger-installation", 
      features: ["Multi-Port Stations", "Payment Systems", "Fleet Solutions"]
    },
    {
      title: "Electrical Panel Upgrades",
      description: "Electrical panel upgrades to support EV charger installation and increased power demands.",
      icon: Settings,
      link: "/services/electrical-panel-upgrades",
      features: ["200A Service", "Main Panel", "Sub-Panel Options"]
    },
    {
      title: "Permits & Inspections",
      description: "Complete permit handling and inspection coordination for all EV charger installations.",
      icon: FileCheck,
      link: "/services/permits-inspections",
      features: ["Permit Filing", "Inspection Scheduling", "Code Compliance"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
            Our EV Charger Services
          </h2>
          <p className="text-lg text-silver max-w-3xl mx-auto">
            From Tesla Wall Connectors to commercial charging stations, we provide complete 
            EV charging solutions throughout Suffolk County with professional installation and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-navy-deep group-hover:text-electric-green transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-silver">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-silver">
                        <div className="w-1.5 h-1.5 bg-electric-green rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group-hover:bg-electric-green group-hover:text-white group-hover:border-electric-green transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-silver mb-4">Need help choosing the right EV charger for your needs?</p>
          <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300">
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;