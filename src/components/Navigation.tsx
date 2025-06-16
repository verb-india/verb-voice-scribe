
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-lg w-11/12 max-w-7xl">
      <div className="px-6 md:px-10 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between space-x-12">
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
          
          <Button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px]">
            <svg className="mr-3 h-5 w-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
              <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
            </svg>
            Download for Mac
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Verb Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">Verb</span>
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

              {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg mx-2">
          <div className="px-8 py-6 space-y-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/manifesto"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/manifesto") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Manifesto
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/pricing") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-verb-orange ${
                isActive("/blog") ? "text-verb-orange" : "text-gray-600"
              }`}
            >
              Blog
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 text-base rounded-full transition-all duration-300">
                <svg className="mr-3 h-5 w-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
                  <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
                </svg>
                Download for Mac
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
