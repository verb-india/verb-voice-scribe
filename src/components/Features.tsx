
const Features = () => {
  const features = [
    {
      title: "Personal Dictionary",
      description: "Learns from your speech patterns and continuously improves accuracy with your personal vocabulary.",
      icon: "🧠"
    },
    {
      title: "100+ Languages",
      description: "Speak in any language and get instant translation to English or any other supported language.",
      icon: "🌍"
    },
    {
      title: "Context-Aware Tone",
      description: "Automatically adjusts tone and style based on the application you're using - Gmail, iMessage, or any app.",
      icon: "🎯"
    },
    {
      title: "AI Writing Assistant",
      description: "Intelligent suggestions to refine, rephrase, and perfect your writing with context-aware recommendations.",
      icon: "✨"
    },
    {
      title: "Privacy First",
      description: "Everything stays on your device. We never sell your data or use it to train AI models. Your privacy is sacred.",
      icon: "🔒"
    },
    {
      title: "Lightning Fast",
      description: "Blazing fast processing under 100 milliseconds. No waiting, just instant results.",
      icon: "⚡"
    },
    {
      title: "Universal Integration",
      description: "Works on top of any application - WhatsApp, Telegram, browsers, and every app you use daily.",
      icon: "🔗"
    },
    {
      title: "Whisper Mode",
      description: "Speak quietly without disturbing anyone. Advanced noise processing understands even whispers.",
      icon: "🤫"
    },
    {
      title: "Smart Commands",
      description: "Use natural keywords like 'list', 'space', 'newline' for intelligent formatting and structure.",
      icon: "🎤"
    },
    {
      title: "Cross-Platform",
      description: "Available on iOS, Android, Windows, macOS. Seamless experience across all your devices.",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Powerful Features, Effortless Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed to make your communication faster, smarter, and more natural.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-verb-gradient-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
