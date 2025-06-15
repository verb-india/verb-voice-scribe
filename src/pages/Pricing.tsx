
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with Verb",
      features: [
        "Basic speech-to-text",
        "5 languages supported",
        "Standard writing assistant",
        "Works with 10 apps",
        "On-device processing",
        "Community support"
      ],
      cta: "Download Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$10",
      period: "per month",
      description: "For professionals who demand the best",
      features: [
        "Advanced speech-to-text",
        "100+ languages supported",
        "AI writing assistant with context",
        "Unlimited app integration",
        "Personal dictionary learning",
        "Whisper mode",
        "Smart commands",
        "Priority support",
        "Advanced tone adjustment"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "SSO integration",
        "Advanced analytics",
        "Custom training",
        "Priority support",
        "Volume discounts",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-verb-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 animate-slide-in">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-verb-orange transform scale-105' 
                    : 'border-gray-200 hover:border-verb-orange'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-verb-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-verb-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-verb-gradient hover:bg-verb-gradient-reverse text-white'
                      : 'bg-gray-100 hover:bg-verb-gradient-light text-gray-900 hover:text-verb-orange border border-gray-200'
                  }`}
                  onClick={() => {
                    if (plan.name === 'Enterprise') {
                      window.location.href = 'mailto:contact@verb.com';
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h3>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I switch plans anytime?</h4>
                <p className="text-gray-700">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
                <p className="text-gray-700">Yes, Pro comes with a 14-day free trial. No credit card required to start.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What about data privacy?</h4>
                <p className="text-gray-700">All processing happens on your device. We never store, analyze, or sell your data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
