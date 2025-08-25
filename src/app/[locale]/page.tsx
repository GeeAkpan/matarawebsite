import About from "@/components/About";
import BackedBy from "@/components/BackedBy";
import Blog from "@/components/Blog";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoadMap from "@/components/RoadMap";
import Technology from "@/components/Technology";
import Tokenomics from "@/components/Tokenomics";
import UseCases from "@/components/UseCases";

// export const dynamic = "force-dynamic";

export default function Home() {
  
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero/>
      <About />
      <Technology />
      <UseCases />
      <BackedBy />
      <Tokenomics />
      <RoadMap/>
      <Blog />
      <FAQs />
      <Footer/>
    </div>
  );
}
