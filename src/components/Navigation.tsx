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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full border border-orange-500/20 shadow-[0_0_30px_rgba(255,165,0,0.1)] w-fit">
      <div className="flex justify-center min-h-[48px]">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 px-4 py-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="scale-x-110">
              <img src="/logo.png" alt="Verb Logo" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,165,0,0.3)]" />
            </div>
            <span className="text-xl font-bold text-white">Verb</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/manifesto"
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/manifesto") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Manifesto
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/pricing") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/blog") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Blog
            </Link>
          </div>
          
          <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,165,0,0.2)] px-3 py-1.5 flex items-center gap-0.5">
            <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
              <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
            </svg>
            Download
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between min-h-[48px] px-4 w-full py-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="scale-x-110">
              <img src="/logo.png" alt="Verb Logo" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,165,0,0.3)]" />
            </div>
            <span className="text-xl font-bold text-white">Verb</span>
          </Link>
          
          <button
            onClick={toggleMenu}
            className="rounded-lg hover:bg-orange-500/10 transition-colors p-1.5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-orange-400" />
            ) : (
              <Menu className="h-5 w-5 text-orange-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md rounded-2xl border border-orange-500/20 shadow-[0_0_30px_rgba(255,165,0,0.1)] mx-2">
          <div className="flex flex-col items-center gap-3 py-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/manifesto"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/manifesto") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Manifesto
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/pricing") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                isActive("/blog") ? "text-orange-400" : "text-gray-300"
              }`}
            >
              Blog
            </Link>
            <div className="w-full px-4">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium text-sm rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,165,0,0.2)] px-3 py-1.5 flex items-center justify-center gap-0.5">
                <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
                  <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
                </svg>
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
