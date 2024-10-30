import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Zero</h3>
            <p className="text-sm">
              Empowering developers with seamless deployment solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-gray-800 dark:hover:text-white transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-800 dark:hover:text-white transition">Pricing</Link></li>
              <li><Link to="/docs" className="hover:text-gray-800 dark:hover:text-white transition">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-800 dark:hover:text-white transition">About</Link></li>
              <li><Link to="/blogs" className="hover:text-gray-800 dark:hover:text-white transition">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-gray-800 dark:hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-gray-800 dark:hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-800 dark:hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Zero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
