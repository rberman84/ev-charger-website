import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout/Layout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import TeslaEVChargerInstallation from "./pages/services/TeslaEVChargerInstallation";
import HomeEVChargerInstallation from "./pages/services/HomeEVChargerInstallation";
import CommercialEVChargerInstallation from "./pages/services/CommercialEVChargerInstallation";
import ElectricalPanelUpgrades from "./pages/services/ElectricalPanelUpgrades";
import PermitsInspections from "./pages/services/PermitsInspections";

// Location Pages
import RonkonkomaService from "./pages/service-areas/RonkonkomaService";
import PatchogueService from "./pages/service-areas/PatchogueService";
import SmithtownService from "./pages/service-areas/SmithtownService";
import HuntingtonService from "./pages/service-areas/HuntingtonService";
import HempsteadService from "./pages/service-areas/HempsteadService";
import IslipService from "./pages/service-areas/IslipService";
import BrookhavenService from "./pages/service-areas/BrookhavenService";

// Other Pages
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Blog Posts
import BestEVChargerLongIslandHomes from "./pages/blog/BestEVChargerLongIslandHomes";
import EVChargerInstallationCosts from "./pages/blog/EVChargerInstallationCosts";
import PrepareHomeEVChargerInstallation from "./pages/blog/PrepareHomeEVChargerInstallation";
import TeslaWallConnectorVsUniversal from "./pages/blog/TeslaWallConnectorVsUniversal";
import NassauCountyEVChargerPermits from "./pages/blog/NassauCountyEVChargerPermits";
import CommercialEVChargingBenefits from "./pages/blog/CommercialEVChargingBenefits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Service Pages */}
              <Route path="/services/tesla-ev-charger-installation" element={<TeslaEVChargerInstallation />} />
              <Route path="/services/home-ev-charger-installation" element={<HomeEVChargerInstallation />} />
              <Route path="/services/commercial-ev-charger-installation" element={<CommercialEVChargerInstallation />} />
              <Route path="/services/electrical-panel-upgrades" element={<ElectricalPanelUpgrades />} />
              <Route path="/services/permits-inspections" element={<PermitsInspections />} />
              
              {/* Location Pages */}
              <Route path="/service-areas/ronkonkoma" element={<RonkonkomaService />} />
              <Route path="/service-areas/patchogue" element={<PatchogueService />} />
              <Route path="/service-areas/smithtown" element={<SmithtownService />} />
              <Route path="/service-areas/huntington" element={<HuntingtonService />} />
              <Route path="/service-areas/hempstead" element={<HempsteadService />} />
              <Route path="/service-areas/islip" element={<IslipService />} />
              <Route path="/service-areas/brookhaven" element={<BrookhavenService />} />
              
              {/* Other Pages */}
              <Route path="/services" element={<Services />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Blog Posts */}
              <Route path="/blog/best-ev-charger-long-island-homes" element={<BestEVChargerLongIslandHomes />} />
              <Route path="/blog/ev-charger-installation-costs-suffolk-county" element={<EVChargerInstallationCosts />} />
              <Route path="/blog/prepare-home-ev-charger-installation" element={<PrepareHomeEVChargerInstallation />} />
              <Route path="/blog/tesla-wall-connector-vs-universal-chargers" element={<TeslaWallConnectorVsUniversal />} />
              <Route path="/blog/nassau-county-ev-charger-permits" element={<NassauCountyEVChargerPermits />} />
              <Route path="/blog/commercial-ev-charging-station-benefits" element={<CommercialEVChargingBenefits />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
