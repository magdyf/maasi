import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/logo.jpeg" alt="Maasi logo" className="h-6 w-6 object-contain" />
            <span className="text-xl font-bold text-gray-900">Maasi</span>
          </div>
          <p className="text-gray-600 mb-8">
            Connecting hearts in Maastricht, one friendship at a time.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="/about" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              About Us
            </a>
            <a href="/support" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Support
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Privacy
            </a>
            <a href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Contact
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Maasi. Made with love in Maastricht.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
