import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a0f00]">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Free Plan */}
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
            <h3 className="text-2xl font-semibold text-white mb-2">Free</h3>
            <p className="text-gray-400 mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Button className="w-full mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
              Get Started
            </Button>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Up to 10 minutes of voice transcription per day</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Basic voice commands</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Standard support</span>
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-gray-400 mb-6">For power users</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$15</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Button className="w-full mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
              Get Started
            </Button>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Unlimited voice transcription</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Advanced voice commands</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Custom voice shortcuts</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Cross-platform sync</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
            <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-6">For organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <Button className="w-full mb-8 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
              Contact Sales
            </Button>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Everything in Pro</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">SLA guarantees</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Custom security requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
