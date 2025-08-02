import React from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Cookie className="h-6 w-6 text-yellow-400 flex-shrink-0" />
          <div className="text-sm text-gray-300">
            <p>
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies.
              <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onAccept}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
          >
            Accept
          </button>
          <button
            onClick={onAccept}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;