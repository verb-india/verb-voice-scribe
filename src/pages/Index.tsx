import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a0f00]">
      <Navigation />
      <Hero />
      <Features />
        <Footer />
    </div>
  );
};

export default Index;
