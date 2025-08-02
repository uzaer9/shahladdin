import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-1 xs:space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 xs:p-2 rounded-lg">
              <Dumbbell className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-black" />
            </div>
            <span className="text-lg xs:text-xl sm:text-2xl font-black tracking-wider text-white">
              SHAHLADDIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/919156962721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 xl:px-6 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-sm xl:text-base"
            >
              Start Your Transformation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 xs:h-6 xs:w-6" /> : <Menu className="h-5 w-5 xs:h-6 xs:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/919156962721"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-center mt-4 text-base"
              >
                Start Your Transformation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;