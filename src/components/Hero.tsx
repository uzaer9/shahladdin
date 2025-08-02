import React from 'react';
import { ArrowRight, Play, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Fitness Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1 xs:space-x-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 mb-6 xs:mb-8">
            <Award className="h-3 w-3 xs:h-4 xs:w-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-xs xs:text-sm sm:text-base">10+ Years of Proven Results</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 xs:mb-6 leading-tight px-2">
            TRANSFORM YOUR
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              PHYSIQUE
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-8 max-w-3xl mx-auto leading-relaxed px-2 xs:px-4">
            Professional transformation coach with a decade of natural bodybuilding expertise. 
            Get personalized coaching that delivers real, lasting results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 md:gap-8 mb-8 xs:mb-12 px-2 xs:px-4 max-w-md xs:max-w-lg sm:max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">Clients Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">10+</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">95%</div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 xs:gap-4 justify-center items-center px-2 xs:px-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full font-bold text-sm xs:text-base sm:text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center space-x-2 w-full max-w-xs xs:max-w-sm justify-center"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-4 w-4 xs:h-5 xs:w-5" />
            </a>
            <a
              href="https://wa.me/919156962721"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full font-bold text-sm xs:text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 w-full max-w-xs xs:max-w-sm justify-center"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;