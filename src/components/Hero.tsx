import { Button } from "@/components/ui/button";
import { Download, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a0f00] flex items-center justify-center py-24 relative overflow-hidden">      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-yellow-500/10 to-transparent blur-3xl pointer-events-none"></div>
        
        <div className="relative mt-8">
          {/* Orange gradient background like in OpenGraph image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-gradient-radial from-orange-500/60 via-orange-600/40 to-orange-900/20 rounded-full blur-3xl"></div>
          </div>
          {/* Additional deeper gradient for more intensity */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-gradient-radial from-yellow-400/40 via-orange-500/50 to-orange-700/30 rounded-full blur-2xl"></div>
          </div>
          {/* Core bright glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 bg-gradient-radial from-yellow-300/60 via-orange-400/40 to-transparent rounded-full blur-xl"></div>
          </div>
          <div className="scale-x-110 relative z-10 pointer-events-none">
            <img
              src="/logo.png"
              alt="Verb Logo"
              className="w-32 h-32 mx-auto drop-shadow-[0_0_500px_rgba(255,165,0,0.1)] drop-shadow-[0_0_96px_rgba(255,165,0,0.2)] drop-shadow-[0_0_64px_rgba(255,140,0,0.3)] drop-shadow-[0_0_48px_rgba(255,200,0,0.4)] drop-shadow-[0_0_32px_rgba(255,255,0,0.5)]"
            />
          </div>
        </div>

        <h1 className="mt-12 text-4xl md:text-6xl font-bold text-white relative z-20 select-text">
          Verb is a <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">Voice Writing Assistant</span>
        </h1>
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white relative z-20 select-text">
          Your Voice<br />Perfectly Written
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto relative z-20 select-text">
          Just talk — Verb listens, transcribes, and rewrites your speech into clear, confident text
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/download" className="inline-block">
            <button className="bg-gradient-to-r from-orange-700 to-yellow-600 hover:from-orange-800 hover:to-yellow-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,165,0,0.2)]">
              <svg className="mr-2 h-5 w-5 fill-white inline" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
                <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
              </svg>
              Download for Mac
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mt-12">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Lightning Fast</h3>
            <p className="text-gray-400">Real-time transcription and editing</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Wide array of languages</h3>
            <p className="text-gray-400">100+ language support</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Privacy First</h3>
            <p className="text-gray-400">Everythiing On-Device: Your data stays with you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
