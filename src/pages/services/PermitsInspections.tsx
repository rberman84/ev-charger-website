import SEOHead from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PermitsInspections = () => {
  return (
    <>
      <SEOHead 
        title="EV Charger Permits & Inspections Long Island | Licensed & Compliant"
        description="We handle permits & inspections for EV charger installs across Long Island. Hassle-free, licensed, fully code-compliant. Serving Suffolk & Nassau."
        keywords="EV charger permits Long Island, electrical permits Nassau County, EV charging inspection Suffolk County, EV charger permit application"
      />

      <div className="min-h-screen bg-background">
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Permits & Inspections for EV Charger Installation <span className="text-electric-green">Long Island</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete permit handling and inspection coordination for all EV charger installations throughout Nassau and Suffolk Counties. 
              We handle the paperwork so you don't have to.
            </p>
            <Button size="lg" className="bg-white text-navy-deep hover:bg-white/90">
              Learn About Permit Process
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-deep mb-8">
              Streamlined Permit & Inspection Services
            </h2>
            <p className="text-lg text-silver max-w-4xl mx-auto leading-relaxed">
              We handle all aspects of the permitting process for your EV charger installation, from initial applications to final inspections. 
              Our team is familiar with all local requirements throughout Long Island and ensures code-compliant installations every time.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-all duration-300 mr-4">
                <Phone className="w-5 h-5 mr-2" />
                (631) 555-0100
              </Button>
              <Button variant="outline" size="lg">
                Permit Requirements
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PermitsInspections;