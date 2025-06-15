
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-diagonal-gradient flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-2/3 mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-16 shadow-2xl animate-fade-in">
            <h1 className="text-7xl font-bold mb-8 bg-verb-gradient bg-clip-text text-transparent leading-tight">
              Speak. Write. Perfect.
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              The most intelligent speech-to-text and writing assistant that understands context, 
              adapts to your style, and works seamlessly across all your applications.
            </p>
            <Button 
              size="lg" 
              className="bg-verb-gradient hover:bg-verb-gradient-reverse text-white font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-3 h-6 w-6" />
              Download for Mac
            </Button>
            <p className="text-sm text-gray-500 mt-6">
              Free forever • No signup required • Lightning fast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
