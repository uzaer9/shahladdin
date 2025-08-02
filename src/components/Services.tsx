import React from 'react';
import { 
  Dumbbell, 
  Apple, 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Home,
  Target,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Custom Workout Programs",
      description: "Personalized training plans designed for your goals, experience level, and available equipment.",
      features: ["Gym-based programs", "Home workout alternatives", "Progressive overload planning", "Exercise video demonstrations"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Apple,
      title: "Personalized Nutrition Plans",
      description: "Science-based nutrition strategies tailored to your lifestyle, preferences, and transformation goals.",
      features: ["Macro-based meal planning", "Flexible dieting approach", "Supplement recommendations", "Weekly adjustments"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Online Coaching",
      description: "Comprehensive coaching programs for muscle gain, fat loss, and performance enhancement.",
      features: ["Weekly check-ins", "Progress tracking", "24/7 support", "Goal-specific programming"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: MessageCircle,
      title: "One-on-One Consultation",
      description: "Personal consultation sessions to address your specific needs and create actionable plans.",
      features: ["Goal assessment", "Lifestyle analysis", "Custom strategy development", "Q&A sessions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Bulking & Shredding",
      description: "Specialized programs for lean muscle gain and fat loss phases with precise protocols.",
      features: ["Phase-specific training", "Nutrition periodization", "Body composition tracking", "Transition planning"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Lifestyle Coaching",
      description: "Holistic approach to fitness that integrates seamlessly with your daily life and commitments.",
      features: ["Habit formation", "Stress management", "Sleep optimization", "Mindset coaching"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            TRANSFORMATION
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 xs:px-4">
            Comprehensive coaching solutions designed to transform your physique, 
            mindset, and lifestyle. Every service is personalized to your unique goals and circumstances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-2xl p-4 xs:p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 xs:p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 xs:mb-6`}>
                <service.icon className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-4 xs:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 xs:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 xs:mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm xs:text-base"
                >
                  Learn More
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 xs:mt-16">
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl p-4 xs:p-6 sm:p-8 border border-yellow-400/20">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-gray-300 mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base">
              Every journey begins with a single step. Let's discuss your goals and create a personalized plan that works for you.
            </p>
            <a
              href="https://wa.me/919156962721"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full font-bold text-sm xs:text-base sm:text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4 xs:h-5 xs:w-5" />
              <span>Get Your Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;