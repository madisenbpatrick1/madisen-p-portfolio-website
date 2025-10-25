import Navbar from "../../../src/components/common/Navbar";
import Hero from "../../../src/components/Hero";
import Footer from "../../components/common/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      {/* Add more sections below: About, Projects, Contact */}
    </div>
  );
}
