
import { Button } from "@/components/ui/button";
import { Download, Check, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-orange-yellow-gradient flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-yellow-600/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 w-full">
        <div className="max-w-7xl mx-auto w-full">
          {/* Trust indicators */}
          <div className="mb-12 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="font-semibold text-white">Trusted by 50,000+ users</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <Check className="w-5 h-5 text-green-300" />
              <span className="font-semibold text-white">Privacy First</span>
            </div>
          </div>

          {/* Main content - full width */}
          <div className="w-full space-y-12">
            {/* Giant Verb logo/brand */}
            <div className="space-y-6">
              <div className="text-9xl md:text-[12rem] lg:text-[15rem] font-black leading-none">
                <span className="block text-white drop-shadow-2xl">Verb</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-xl">
                <span className="block">The AI notepad</span>
                <span className="block">for people in</span>
                <span className="block">back-to-back meetings</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
                Verb takes your raw meeting notes and makes them awesome. 
                The most intelligent speech-to-text and writing assistant that works seamlessly across all your applications.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-8">
              <Button 
                size="lg" 
                className="bg-white/90 hover:bg-white text-orange-600 font-bold px-16 py-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/50"
              >
                <Download className="mr-4 h-7 w-7" />
                Download for Mac
              </Button>
              
              <div className="flex items-center justify-center gap-12 text-lg text-white/80">
                <span className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  Free forever
                </span>
                <span className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  No signup required
                </span>
                <span className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  Lightning fast
                </span>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-black border border-white/30">
                  100+
                </div>
                <p className="text-lg font-semibold text-white">Languages Supported</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-black border border-white/30">
                  &lt;100ms
                </div>
                <p className="text-lg font-semibold text-white">Processing Time</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-black border border-white/30">
                  🔒
                </div>
                <p className="text-lg font-semibold text-white">Privacy Protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
