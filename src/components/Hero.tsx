
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-gradient-light flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-1/2 mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-verb-gradient bg-clip-text text-transparent leading-tight">
              Speak. Write. Perfect.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The most intelligent speech-to-text and writing assistant that understands context, 
              adapts to your style, and works seamlessly across all your applications.
            </p>
            <Button 
              size="lg" 
              className="bg-verb-gradient hover:bg-verb-gradient-reverse text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-3 h-5 w-5" />
              Download for Mac
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Free forever • No signup required • Lightning fast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
