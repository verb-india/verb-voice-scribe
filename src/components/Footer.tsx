
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-verb-gradient bg-clip-text text-transparent mb-4">
              Verb
            </h3>
            <p className="text-gray-400 mb-4">
              The most intelligent speech-to-text and writing assistant for modern professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/manifesto" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="mailto:contact@verb.com" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-verb-orange transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Verb. All rights reserved. Made with love for creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
