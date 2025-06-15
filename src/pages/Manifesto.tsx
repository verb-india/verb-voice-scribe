
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Manifesto = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-verb-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
              Our Manifesto
            </h1>
            <p className="text-xl text-gray-700 animate-slide-in">
              The future of human-computer interaction starts with understanding intent, not just words.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-verb-orange">The Problem</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Communication technology has barely evolved in decades. We're still typing on keyboards designed in the 1800s, 
                struggling with autocorrect that doesn't understand context, and switching between apps that don't talk to each other. 
                Meanwhile, our thoughts move at the speed of speech, but our tools force us to crawl at the speed of typing.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-verb-orange">The Truth</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every human deserves technology that amplifies their natural abilities rather than constraining them. 
                Your voice carries nuance, emotion, and intent that no keyboard can capture. Your thoughts are unique, 
                and your tools should adapt to you—not the other way around. Privacy isn't a luxury; it's a fundamental right. 
                Your words, your ideas, your conversations should never be harvested to train someone else's AI.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-verb-orange">The Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Verb represents a new paradigm: technology that understands not just what you say, but how you mean it. 
                An AI that learns your patterns without compromising your privacy. A writing assistant that adapts to every 
                context, every app, every conversation. Speed that matches the pace of thought, not the limitations of fingers.
              </p>
              <div className="bg-verb-gradient-light p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">We believe in:</h3>
                <ul className="space-y-3 text-left max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="text-verb-orange mr-3">•</span>
                    <span className="text-gray-700">Privacy-first technology that keeps your data on your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verb-orange mr-3">•</span>
                    <span className="text-gray-700">Intelligence that adapts to you, not generic AI for everyone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verb-orange mr-3">•</span>
                    <span className="text-gray-700">Speed that matches human thought and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verb-orange mr-3">•</span>
                    <span className="text-gray-700">Universal access across all languages and platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-verb-orange mr-3">•</span>
                    <span className="text-gray-700">Context-aware technology that understands intent</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manifesto;
