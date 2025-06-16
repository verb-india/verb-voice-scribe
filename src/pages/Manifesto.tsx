import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a0f00]">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">
            Our Manifesto
          </h1>
          
          <div className="space-y-8">
            <section className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-4">Voice is the Future</h2>
              <p className="text-gray-300 leading-relaxed">
                We believe that voice is the most natural and powerful way to interact with technology. 
                For millennia, humans have used speech to communicate, create, and connect. Yet in the 
                digital age, we've been constrained to keyboards and screens.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-4">Breaking Barriers</h2>
              <p className="text-gray-300 leading-relaxed">
                Traditional typing creates barriers - it's slow, causes physical strain, and limits our 
                creative flow. Voice writing removes these constraints, allowing thoughts to flow 
                naturally and ideas to be captured effortlessly.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-4">AI-Powered Understanding</h2>
              <p className="text-gray-300 leading-relaxed">
                We're harnessing the latest advances in AI to create a voice writing experience that 
                truly understands you. Our technology adapts to your speaking style, learns your 
                preferences, and helps you write better.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-4">Privacy First</h2>
              <p className="text-gray-300 leading-relaxed">
                Your voice and your words are personal. We're committed to protecting your privacy 
                with industry-leading security measures and transparent data practices. Your trust 
                is our top priority.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-4">Join the Revolution</h2>
              <p className="text-gray-300 leading-relaxed">
                We're building more than just a product - we're creating a movement towards a 
                future where technology adapts to humans, not the other way around. Join us in 
                making voice writing the new standard for digital creation.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manifesto;
