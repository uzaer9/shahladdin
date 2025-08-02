import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Transformations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      name: "Rahul Gorliwale",
      age: 28,
      transformation: "Lost 25kg in 6 months",
      before: "public/rkkkk.jpg",
      after: "public/rkA.jpg",
      testimonial: "Shahladdin's approach completely changed my relationship with fitness. The personalized nutrition plan and consistent support helped me achieve what I thought was impossible.",
      rating: 5
    },
    {
      name: "Umar Jakatdar",
      age: 21,
      transformation: "Gained 8kg lean muscle",
      before: "public/umB.jpg",
      after: "public/umA.jpg",
      testimonial: "As a college student, I struggled to find time for fitness. Shahladdin's flexible coaching program fit perfectly into my schedule, and the results speak for themselves.",
      rating: 5
    },
    {
      name: "Suresh Gortyal",
      age: 45,
      transformation: "Complete body recomposition",
      before: "public/Sb.jpg",
      after: "public/Sa.jpg",
      testimonial: "The knowledge and dedication Shahladdin brings is unmatched. He doesn't just give you a plan—he educates you on why each element matters.",
      rating: 5
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [transformations.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="transformations" className="py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            REAL PEOPLE,
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              REAL RESULTS
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 xs:px-4">
            See the incredible transformations achieved by my clients through dedication, 
            proper guidance, and personalized coaching programs.
          </p>
        </div>

        {/* Transformation Slider */}
        <div className="relative">
          <div className="bg-black rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
              {/* Before/After Images */}
              <div className="space-y-4 xs:space-y-6">
                <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-6">
                  {/* Before */}
                  <div className="text-center">
                    <h4 className="text-xs xs:text-sm sm:text-lg font-bold mb-1 xs:mb-2 sm:mb-4 text-gray-400">BEFORE</h4>
                    <div className="relative">
                      <img
                        src={transformations[currentSlide].before}
                        alt="Before transformation"
                        className="w-full h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-red-500/20 rounded-xl"></div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <h4 className="text-xs xs:text-sm sm:text-lg font-bold mb-1 xs:mb-2 sm:mb-4 text-yellow-400">AFTER</h4>
                    <div className="relative">
                      <img
                        src={transformations[currentSlide].after}
                        alt="After transformation"
                        className="w-full h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-green-500/20 rounded-xl"></div>
                    </div>
                  </div>
                </div>

                {/* Transformation Stats */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl p-3 xs:p-4 sm:p-6 border border-yellow-400/20">
                  <div className="text-center">
                    <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-black text-yellow-400 mb-1 xs:mb-2">
                      {transformations[currentSlide].transformation}
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base text-gray-400">
                      {transformations[currentSlide].name}, Age {transformations[currentSlide].age}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="space-y-4 xs:space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(transformations[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-400/50" />

                <blockquote className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 italic">
                  "{transformations[currentSlide].testimonial}"
                </blockquote>

                <div className="pt-4 xs:pt-6 border-t border-gray-800">
                  <div className="font-bold text-sm xs:text-base sm:text-lg">{transformations[currentSlide].name}</div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-400">Verified Client</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-3 xs:space-x-4 mt-6 xs:mt-8">
            <button
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-700 p-2 xs:p-2.5 sm:p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <div className="flex space-x-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-700 p-2 xs:p-2.5 sm:p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-12 xs:mt-16">
          <div className="text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 xs:mb-2">50+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Successful Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 xs:mb-2">95%</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 xs:mb-2">2500+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Pounds Lost by Clients</div>
          </div>
          <div className="text-center">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 xs:mb-2">1000+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">Pounds of Muscle Gained</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;