import { Button } from "@/components/ui/button";
import { Download, Check, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-verb-orange-yellow-gradient flex items-center justify-center py-24 relative overflow-hidden">      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Main content */}
        <div className="space-y-8">
          {/* Logo and brand */}
          <div className="space-y-3">
            <div className="flex justify-center mb-2 py-8 md:py-12 lg:py-16">
              <img src="/logo.png" alt="Verb Logo" className="w-32 h-32 md:w-36 md:h-36" />
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-black drop-shadow-xl">
              <span className="block">Verb is a <span className="text-orange-500">Voice Writing Assistant</span></span>
              <span className="block">Your Voice</span>
              <span className="block">Perfectly Written</span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-black/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Just talk — Verb listens, transcribes, and rewrites your speech into clear, confident text
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-bold px-16 py-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <svg className="mr-2 h-5 w-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
                <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
              </svg>
              Download for Mac
            </Button>
            
            <div className="flex items-center justify-center gap-12 text-sm md:text-base text-black/80">
              <span className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                Polished Output
              </span>
              <span className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                Instant Rewriting
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
              <p className="text-sm md:text-base font-semibold text-gray-800">Languages Supported</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-black text-2xl font-black border border-gray-200 shadow-sm">
                &lt;100ms
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-800">Processing Time</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center text-black text-2xl font-black border border-gray-200 shadow-sm">
                🔒
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-800">Privacy Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
