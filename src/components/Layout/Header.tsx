import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tesla Chargers", href: "/services/tesla-ev-charger-installation" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver/20 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/b0761ce9-1039-4524-bc32-b6196a74d81f.png" 
                alt="EV Charger Installation Suffolk Logo" 
                className="h-16 w-auto"
              />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-electric-green ${
                  isActive(item.href) ? "text-electric-green" : "text-silver"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-electric-green">
              <Phone className="w-4 h-4 text-electric-green" />
              <span className="font-semibold">(516) 361-4068</span>
            </div>
            <Link to="/contact">
              <Button 
                size="sm" 
                className="bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-glow"
              >
                Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-navy-deep" />
            ) : (
              <Menu className="w-6 h-6 text-navy-deep" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-silver/20 shadow-elegant">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-electric-green/10 text-electric-green"
                      : "text-silver hover:text-electric-green hover:bg-electric-green/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-silver/20 mt-4">
                <div className="flex items-center space-x-2 text-electric-green mb-3">
                  <Phone className="w-4 h-4 text-electric-green" />
                  <span className="font-semibold">(516) 361-4068</span>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-gradient-accent">
                    Free Estimate
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;