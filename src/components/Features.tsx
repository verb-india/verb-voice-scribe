const Features = () => {
  const features = [
    {
      title: "Personal Dictionary",
      description: "VERB automatically learns your unique words and adds them to your personal dictionary. Whether it's names, technical terms, or your favorite expressions, Verb remembers everything you say.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex flex-col justify-between shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-white font-semibold text-xl">Your Dictionary</h4>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
              <span className="text-orange-400 text-xl">+</span>
            </div>
          </div>
          <div className="space-y-3">
            {['Valerio', 'Nora', 'EMT', 'Benton'].map((word, idx) => (
              <div key={idx} className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-3 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(255,165,0,0.2)]">
                {word}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "100+ Languages",
      description: "VERB automatically detects and transcribes in your language, letting you move between them—just like you do. Speak naturally in any language and watch the magic happen.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="text-center">
            <div className="text-white text-2xl font-semibold mb-6">100+ Languages</div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {['🇰🇷', '🇳🇱', '🇦🇺', '🇪🇸', '🇨🇦', '🇧🇷', '🇫🇷', '🇲🇽', '🇹🇷'].map((flag, idx) => (
                <div key={idx} className="text-3xl">{flag}</div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text text-lg font-medium">Speak in your native language</div>
          </div>
        </div>
      )
    },
    {
      title: "Different Tones for Each App",
      description: "VERB automatically adjusts tone based on the app you're using. Sound like you—not a robot. Professional for emails, casual for messages, and everything in between.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex flex-col justify-center items-center shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="bg-black/60 rounded-xl p-6 mb-6 w-full border border-orange-500/20">
            <div className="text-white text-sm mb-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                <span className="text-sm">🎤</span>
              </div>
              <span className="text-lg">hi</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl mb-2 flex items-center justify-center text-white text-lg shadow-[0_0_15px_rgba(255,165,0,0.2)]">✉️</div>
              <div className="text-white text-sm font-medium">Hello</div>
              <div className="text-gray-400 text-xs">Email</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl mb-2 flex items-center justify-center text-white text-lg border border-orange-500/30">⚙️</div>
              <div className="text-white text-sm font-medium">hi</div>
              <div className="text-gray-400 text-xs">Slack</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl mb-2 flex items-center justify-center text-white text-lg shadow-[0_0_15px_rgba(255,165,0,0.2)]">💬</div>
              <div className="text-white text-sm font-medium">hey</div>
              <div className="text-gray-400 text-xs">Messages</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Writing Assistant",
      description: "Intelligent suggestions to refine, rephrase, and perfect your writing with context-aware recommendations. Never send a message you'll regret again.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">✨</div>
            <div className="text-2xl font-semibold mb-3">AI Assistant</div>
            <div className="text-gray-400 text-lg">Refine • Rephrase • Perfect</div>
            <div className="mt-6 space-y-2">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(255,165,0,0.2)]">Make it more formal</div>
              <div className="bg-gradient-to-r from-orange-600 to-yellow-600 px-4 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(255,165,0,0.2)]">Add humor</div>
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(255,165,0,0.2)]">Shorten</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Privacy First",
      description: "Everything stays on your device. We never sell your data or use it to train AI models. Your privacy is sacred, and your conversations remain yours.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🔒</div>
            <div className="text-2xl font-semibold mb-3">Privacy First</div>
            <div className="text-gray-400 text-lg mb-4">On-device processing</div>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text font-medium text-lg">Your data never leaves your device</div>
          </div>
        </div>
      )
    },
    {
      title: "Lightning Fast",
      description: "Blazing fast processing under 100 milliseconds. No waiting, just instant results. Experience the future of speech recognition today.",
      visual: (
        <div className="bg-gradient-to-br from-black/80 to-[#1a0f00] rounded-3xl p-8 h-80 flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.1)] border border-orange-500/20">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-2xl font-semibold mb-3">Lightning Fast</div>
            <div className="text-gray-400 text-lg mb-4">&lt; 100ms processing</div>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-full font-medium shadow-[0_0_15px_rgba(255,165,0,0.2)]">Instant Results</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-black via-black to-[#1a0f00]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Powerful Features, Effortless Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every feature designed to make your communication faster, smarter, and more natural.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="flex-1">
                {feature.visual}
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">{feature.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
