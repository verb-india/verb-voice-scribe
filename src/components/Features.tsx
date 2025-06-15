
const Features = () => {
  const features = [
    {
      title: "Personal Dictionary",
      description: "Flow automatically learns your unique words and adds them to your personal dictionary.",
      icon: "🧠",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold text-lg">Your Dictionary</h4>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">+</span>
            </div>
          </div>
          <div className="space-y-2">
            {['Valerio', 'Nora', 'EMT', 'Benton', 'Mackey'].map((word, idx) => (
              <div key={idx} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                {word}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "100+ Languages",
      description: "Flow automatically detects and transcribes in your language, letting you move between them—just like you do.",
      icon: "🌍",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <div className="text-white text-lg font-semibold mb-2">100+ Languages</div>
            <div className="grid grid-cols-3 gap-2">
              {['🇰🇷', '🇳🇱', '🇦🇺', '🇪🇸', '🇨🇦', '🇧🇷', '🇫🇷', '🇳🇱', '🇹🇷'].map((flag, idx) => (
                <div key={idx} className="text-2xl">{flag}</div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Different Tones for Each App",
      description: "Flow automatically adjusts tone based on the app you're using. Sound like you—not a robot.",
      icon: "🎯",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex flex-col justify-center items-center">
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <div className="text-white text-sm mb-2 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-xs">🎤</span>
              </div>
              hi
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 rounded-lg mb-1 flex items-center justify-center text-white">✉️</div>
              <div className="text-white text-xs">Hello</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-600 rounded-lg mb-1 flex items-center justify-center text-white">⚙️</div>
              <div className="text-white text-xs">hi</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-green-500 rounded-lg mb-1 flex items-center justify-center text-white">💬</div>
              <div className="text-white text-xs">hey</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Writing Assistant",
      description: "Intelligent suggestions to refine, rephrase, and perfect your writing with context-aware recommendations.",
      icon: "✨",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">✨</div>
            <div className="text-lg font-semibold">AI Assistant</div>
            <div className="text-sm text-gray-400 mt-2">Refine • Rephrase • Perfect</div>
          </div>
        </div>
      )
    },
    {
      title: "Privacy First",
      description: "Everything stays on your device. We never sell your data or use it to train AI models. Your privacy is sacred.",
      icon: "🔒",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">🔒</div>
            <div className="text-lg font-semibold">Privacy First</div>
            <div className="text-sm text-gray-400 mt-2">On-device processing</div>
          </div>
        </div>
      )
    },
    {
      title: "Lightning Fast",
      description: "Blazing fast processing under 100 milliseconds. No waiting, just instant results.",
      icon: "⚡",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-lg font-semibold">Lightning Fast</div>
            <div className="text-sm text-gray-400 mt-2">&lt; 100ms processing</div>
          </div>
        </div>
      )
    },
    {
      title: "Universal Integration",
      description: "Works on top of any application - WhatsApp, Telegram, browsers, and every app you use daily.",
      icon: "🔗",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">🔗</div>
            <div className="text-lg font-semibold">Universal</div>
            <div className="text-sm text-gray-400 mt-2">Works everywhere</div>
          </div>
        </div>
      )
    },
    {
      title: "Whisper Mode",
      description: "Speak quietly without disturbing anyone. Advanced noise processing understands even whispers.",
      icon: "🤫",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">🤫</div>
            <div className="text-lg font-semibold">Whisper Mode</div>
            <div className="text-sm text-gray-400 mt-2">Quiet & private</div>
          </div>
        </div>
      )
    },
    {
      title: "Smart Commands",
      description: "Use natural keywords like 'list', 'space', 'newline' for intelligent formatting and structure.",
      icon: "🎤",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">🎤</div>
            <div className="text-lg font-semibold">Smart Commands</div>
            <div className="text-sm text-gray-400 mt-2">Natural keywords</div>
          </div>
        </div>
      )
    },
    {
      title: "Cross-Platform",
      description: "Available on iOS, Android, Windows, macOS. Seamless experience across all your devices.",
      icon: "📱",
      visual: (
        <div className="bg-gray-900 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-lg font-semibold">Cross-Platform</div>
            <div className="text-sm text-gray-400 mt-2">All your devices</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Powerful Features, Effortless Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed to make your communication faster, smarter, and more natural.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                {feature.description}
              </p>
              <div className="flex justify-center">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index + 3} className="text-center">
              <div className="mb-6">
                {feature.visual}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
