import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">EV Charger Installation Suffolk</h3>
                <p className="text-sm text-electric-green">Suffolk County's #1 EV Charger Experts</p>
              </div>
            </div>
            <p className="text-sm text-silver-light leading-relaxed">
              Professional EV charger installation throughout Nassau and Suffolk Counties. 
              Licensed, insured, and certified for all major EV charging brands.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-green transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-green transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-green transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/tesla-ev-charger-installation" className="text-silver-light hover:text-electric-green transition-colors">Tesla EV Charger Installation</Link></li>
              <li><Link to="/services/home-ev-charger-installation" className="text-silver-light hover:text-electric-green transition-colors">Home EV Charger Installation</Link></li>
              <li><Link to="/services/commercial-ev-charger-installation" className="text-silver-light hover:text-electric-green transition-colors">Commercial EV Charger Installation</Link></li>
              <li><Link to="/services/electrical-panel-upgrades" className="text-silver-light hover:text-electric-green transition-colors">Electrical Panel Upgrades</Link></li>
              <li><Link to="/services/permits-inspections" className="text-silver-light hover:text-electric-green transition-colors">Permits & Inspections</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/service-areas/ronkonkoma" className="text-silver-light hover:text-electric-green transition-colors">Ronkonkoma, NY</Link></li>
              <li><Link to="/service-areas/patchogue" className="text-silver-light hover:text-electric-green transition-colors">Patchogue, NY</Link></li>
              <li><Link to="/service-areas/smithtown" className="text-silver-light hover:text-electric-green transition-colors">Smithtown, NY</Link></li>
              <li><Link to="/service-areas/huntington" className="text-silver-light hover:text-electric-green transition-colors">Huntington, NY</Link></li>
              <li><Link to="/service-areas/hempstead" className="text-silver-light hover:text-electric-green transition-colors">Hempstead, NY</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-electric-green" />
                <span>(516) 361-4068</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-electric-green" />
                <span>info@powerupevli.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-electric-green mt-0.5" />
                <div>
                  <p>Serving Nassau & Suffolk Counties</p>
                  <p className="text-silver-light">Suffolk County, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-silver-light">
          <p>&copy; 2024 EV Charger Installation Suffolk. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-electric-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-electric-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;