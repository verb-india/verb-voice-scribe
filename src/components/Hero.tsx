import { Button } from "@/components/ui/button";
import { Download, Check, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-orange-yellow-gradient flex items-center justify-center py-24 relative overflow-hidden">      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Trust indicators */}
        <div className="mb-12 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-semibold text-gray-800">Trusted by 50,000+ users</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <Check className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-800">Privacy First</span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Logo and brand */}
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <img src="/logo.png" alt="Verb Logo" className="w-28 h-28 md:w-80 md:h-80" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-black drop-shadow-xl">
              <span className="block">Verb is a <span className="text-orange-500">Voice Writing Assistant</span></span>
              <span className="block">Your Voice</span>
              <span className="block">Perfectly Written</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-black/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Just talk — Verb listens, transcribes, and rewrites your speech into clear, confident text
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-bold px-16 py-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <Download className="mr-4 h-7 w-7" />
              Download for Mac
            </Button>
            
            <div className="flex items-center justify-center gap-12 text-lg text-black/80">
              <span className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                Free forever
              </span>
              <span className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                No signup required
              </span>
              <span className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                Lightning fast
              </span>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-black text-2xl font-black border border-gray-200 shadow-sm">
                100+
              </div>
              <p className="text-lg font-semibold text-gray-800">Languages Supported</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-black text-2xl font-black border border-gray-200 shadow-sm">
                &lt;100ms
              </div>
              <p className="text-lg font-semibold text-gray-800">Processing Time</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-black text-2xl font-black border border-gray-200 shadow-sm">
                🔒
              </div>
              <p className="text-lg font-semibold text-gray-800">Privacy Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
