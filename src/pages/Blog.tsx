
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-verb-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 animate-fade-in">
              Blog
            </h1>
            <p className="text-xl text-gray-700 animate-slide-in">
              Insights, updates, and stories from the Verb team
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-verb-gradient-light p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Coming Soon</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're working on bringing you the latest insights about the future of speech technology, 
                productivity tips, and behind-the-scenes stories from our journey.
              </p>
              <p className="text-gray-600">
                Want to be notified when we publish our first post? 
                <a href="mailto:contact@verb.com" className="text-verb-orange hover:underline ml-1">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
