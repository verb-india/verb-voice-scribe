import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a0f00]">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post cards */}
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div key={post} className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-xl p-6 shadow-[0_0_30px_rgba(255,165,0,0.1)]">
              <div className="h-48 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg mb-4"></div>
              <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
              <p className="text-gray-400 mb-4">
                Stay tuned for exciting content about voice writing, AI, and productivity.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
