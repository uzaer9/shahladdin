import React from 'react';
import { Dumbbell, Instagram, Youtube, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Online Coaching', href: '#services' },
      { name: 'Nutrition Plans', href: '#services' },
      { name: 'Workout Programs', href: '#services' },
      { name: 'Consultation', href: '#services' }
    ],
    company: [
      { name: 'About Me', href: '#about' },
      { name: 'Transformations', href: '#transformations' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-12 xs:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-1.5 xs:space-x-2 mb-4 xs:mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 xs:p-2 rounded-lg">
                <Dumbbell className="h-5 w-5 xs:h-6 xs:w-6 text-black" />
              </div>
              <span className="text-lg xs:text-xl sm:text-2xl font-black tracking-wider text-white">
                SHAHLADDIN
              </span>
            </div>
            <p className="text-gray-400 mb-4 xs:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base">
              Professional transformation coach with 10+ years of natural bodybuilding expertise. 
              Helping people achieve their fitness goals through personalized coaching and proven methodologies.
            </p>
            <div className="flex space-x-2 xs:space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/shahladdin?igsh=MTkwMjIybjlxcHM2NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Instagram className="h-4 w-4 xs:h-5 xs:w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Youtube className="h-4 w-4 xs:h-5 xs:w-5" />
              </a>
              <a
                href="mailto:shahzeb20shaikh@gmail.com"
                className="bg-gray-800 hover:bg-blue-600 p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300"
              >
                <Mail className="h-4 w-4 xs:h-5 xs:w-5" />
              </a>
              <a
                href="https://wa.me/919156962721"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 xs:h-5 xs:w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base xs:text-lg font-bold mb-4 xs:mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-2 xs:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs xs:text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base xs:text-lg font-bold mb-4 xs:mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-2 xs:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs xs:text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-base xs:text-lg font-bold mb-4 xs:mb-6 text-yellow-400">Get in Touch</h3>
            <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
              <a
                href="https://wa.me/919156962721"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 inline-flex items-center space-x-2 text-sm xs:text-base"
              >
                <MessageCircle className="h-3 w-3 xs:h-4 xs:w-4" />
                <span>Start Your Journey</span>
              </a>
            </div>
            <h4 className="text-xs xs:text-sm font-semibold mb-2 xs:mb-3 text-gray-300">Legal</h4>
            <ul className="space-y-1.5 xs:space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 xs:pt-8 mt-8 xs:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 xs:space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs xs:text-sm">
              © {currentYear} Shahladdin. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 xs:space-x-2 text-gray-400 text-xs xs:text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 xs:h-4 xs:w-4 text-red-500 fill-current" />
              <span>for fitness enthusiasts worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;