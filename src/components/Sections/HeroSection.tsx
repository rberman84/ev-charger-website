import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ev-charger.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Opaque Text Bounding Box */}
          <div className="bg-navy-deep/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
            {/* Hero Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-electric-green" />
              <span className="text-sm font-medium">Long Island's #1 EV Charger Experts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              EV Charger Installation{" "}
              <span className="text-electric-green">Long Island</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              Professional Tesla & home EV charger installation throughout Nassau and Suffolk Counties. 
              Licensed, certified electricians with same-day service available.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-electric-green" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-electric-green" />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-electric-green" />
                <span className="text-sm">5-Year Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-navy-deep hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4"
              >
                Get Free Estimate
              </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-electric-green text-electric-green bg-electric-green/10 hover:bg-electric-green hover:text-navy-deep transition-all duration-300 text-lg px-8 py-4 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              (631) 555-0100
            </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4">Trusted by 500+ Long Island homeowners</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm">4.9/5 Rating</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">15+</span> Years Experience
                </div>
                <div className="text-sm">
                  <span className="font-semibold">24/7</span> Emergency Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;