
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
      <div className="px-8 py-3">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Verb Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">Verb</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/manifesto"
              className={`text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/manifesto") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Manifesto
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/pricing") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/blog") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Blog
            </Link>
          </div>
          
          <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Download for Mac
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
