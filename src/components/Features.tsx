
const Features = () => {
  const features = [
    {
      title: "Personal Dictionary",
      description: "Flow automatically learns your unique words and adds them to your personal dictionary. Whether it's names, technical terms, or your favorite expressions, Verb remembers everything you say.",
      visual: (
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-white font-semibold text-xl">Your Dictionary</h4>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">+</span>
            </div>
          </div>
          <div className="space-y-3">
            {['Valerio', 'Nora', 'EMT', 'Benton', 'Mackey', 'Zoltan', 'Vishal'].map((word, idx) => (
              <div key={idx} className="bg-teal-600 text-white px-5 py-3 rounded-full text-sm font-medium">
                {word}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "100+ Languages",
      description: "Flow automatically detects and transcribes in your language, letting you move between them—just like you do. Speak naturally in any language and watch the magic happen.",
      visual: (
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="text-center">
            <div className="text-white text-2xl font-semibold mb-6">100+ Languages</div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {['🇰🇷', '🇳🇱', '🇦🇺', '🇪🇸', '🇨🇦', '🇧🇷', '🇫🇷', '🇲🇽', '🇹🇷'].map((flag, idx) => (
                <div key={idx} className="text-3xl">{flag}</div>
              ))}
            </div>
            <div className="text-teal-400 text-lg font-medium">Speak in your native language</div>
          </div>
        </div>
      )
    },
    {
      title: "Different Tones for Each App",
      description: "Flow automatically adjusts tone based on the app you're using. Sound like you—not a robot. Professional for emails, casual for messages, and everything in between.",
      visual: (
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex flex-col justify-center items-center shadow-2xl">
          <div className="bg-gray-800 rounded-xl p-6 mb-6 w-full">
            <div className="text-white text-sm mb-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-sm">🎤</span>
              </div>
              <span className="text-lg">hi</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl mb-2 flex items-center justify-center text-white text-lg">✉️</div>
              <div className="text-white text-sm font-medium">Hello</div>
              <div className="text-gray-400 text-xs">Email</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-600 rounded-xl mb-2 flex items-center justify-center text-white text-lg">⚙️</div>
              <div className="text-white text-sm font-medium">hi</div>
              <div className="text-gray-400 text-xs">Slack</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl mb-2 flex items-center justify-center text-white text-lg">💬</div>
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
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center shadow-2xl">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">✨</div>
            <div className="text-2xl font-semibold mb-3">AI Assistant</div>
            <div className="text-gray-400 text-lg">Refine • Rephrase • Perfect</div>
            <div className="mt-6 space-y-2">
              <div className="bg-teal-600 px-4 py-2 rounded-full text-sm">Make it more formal</div>
              <div className="bg-orange-500 px-4 py-2 rounded-full text-sm">Add humor</div>
              <div className="bg-purple-500 px-4 py-2 rounded-full text-sm">Shorten</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Privacy First",
      description: "Everything stays on your device. We never sell your data or use it to train AI models. Your privacy is sacred, and your conversations remain yours.",
      visual: (
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center shadow-2xl">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🔒</div>
            <div className="text-2xl font-semibold mb-3">Privacy First</div>
            <div className="text-gray-400 text-lg mb-4">On-device processing</div>
            <div className="text-teal-400 font-medium">Your data never leaves your device</div>
          </div>
        </div>
      )
    },
    {
      title: "Lightning Fast",
      description: "Blazing fast processing under 100 milliseconds. No waiting, just instant results. Experience the future of speech recognition today.",
      visual: (
        <div className="bg-gray-900 rounded-3xl p-8 h-80 flex items-center justify-center shadow-2xl">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">⚡</div>
            <div className="text-2xl font-semibold mb-3">Lightning Fast</div>
            <div className="text-gray-400 text-lg mb-4">&lt; 100ms processing</div>
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-medium">Instant Results</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-32 bg-verb-diagonal-gradient-reverse">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Powerful Features, Effortless Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <h3 className="text-4xl font-bold mb-6 text-gray-900">{feature.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
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
