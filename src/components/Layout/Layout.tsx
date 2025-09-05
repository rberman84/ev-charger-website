import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
    </div>
  );
};

export default Layout;