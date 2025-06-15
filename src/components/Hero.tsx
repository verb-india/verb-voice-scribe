
import { Button } from "@/components/ui/button";
import { Download, Check, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-subtle-gradient flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-verb-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-verb-orange-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-verb-orange/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust indicators */}
          <div className="mb-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium">Trusted by 50,000+ users</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
              <Check className="w-4 h-4 text-green-500" />
              <span className="font-medium">Privacy First</span>
            </div>
          </div>

          {/* Main content card */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl shadow-verb-orange/10 border border-white/50 animate-fade-in">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">The</span>
                  <span className="block bg-verb-gradient bg-clip-text text-transparent">AI notepad</span>
                  <span className="block text-gray-600">for people in</span>
                  <span className="block text-gray-900">back-to-back meetings</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Verb takes your raw meeting notes and makes them awesome. 
                  The most intelligent speech-to-text and writing assistant that works seamlessly across all your applications.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="bg-verb-gradient hover:bg-verb-gradient-reverse text-white font-semibold px-12 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Download className="mr-3 h-6 w-6" />
                  Download for Mac
                </Button>
                
                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Free forever
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    No signup required
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Lightning fast
                  </span>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200/50">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-verb-gradient rounded-xl mx-auto flex items-center justify-center text-white text-xl font-bold">
                    100+
                  </div>
                  <p className="text-sm font-medium text-gray-700">Languages Supported</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-verb-gradient rounded-xl mx-auto flex items-center justify-center text-white text-xl font-bold">
                    &lt;100ms
                  </div>
                  <p className="text-sm font-medium text-gray-700">Processing Time</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-verb-gradient rounded-xl mx-auto flex items-center justify-center text-white text-xl font-bold">
                    🔒
                  </div>
                  <p className="text-sm font-medium text-gray-700">Privacy Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
