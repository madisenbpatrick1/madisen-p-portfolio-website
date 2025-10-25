import React, {ReactNode} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
  }
  

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-tan-50">
      {/* Navbar at top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow px-4 md:px-8 py-6">{children}</main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
