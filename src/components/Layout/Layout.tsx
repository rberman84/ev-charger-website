import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SMSBar from "./SMSBar";
import GlobalSchema from "@/components/SEO/GlobalSchema";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <GlobalSchema />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SMSBar />
    </div>
  );
};

export default Layout;