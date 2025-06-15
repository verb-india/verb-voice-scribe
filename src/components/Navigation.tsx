
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-verb-gradient bg-clip-text text-transparent">
            Verb
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
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
          
          <Button className="bg-verb-gradient hover:bg-verb-gradient-reverse text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Download for Mac
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
