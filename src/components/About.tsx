import React from 'react';
import { Trophy, Target, Users, Calendar, Zap, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Multiple Championships",
      description: "Won several inter-university best physique championships"
    },
    {
      icon: Calendar,
      title: "10+ Years Experience",
      description: "Started bodybuilding journey in 2014, never looked back"
    },
    {
      icon: Users,
      title: "Professional Trainer",
      description: "3 years as a professional fitness trainer"
    },
    {
      icon: Target,
      title: "Natural Bodybuilding",
      description: "Decade of experience in natural bodybuilding methods"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Shahladdin - Transformation Coach"
                className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                Meet
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  SHAHLADDIN
                </span>
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                My journey began in 2014 when I first stepped into the gym. What started as a personal 
                quest for transformation evolved into a passion for helping others achieve their fitness goals.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
                Through years of dedicated training, competition, and continuous learning, I've developed 
                a proven methodology that combines the art of natural bodybuilding with the science of 
                sustainable transformation. My approach isn't just about building muscle or losing fat—it's 
                about creating a lifestyle that supports long-term health and confidence.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-black/50 p-3 xs:p-4 sm:p-6 rounded-xl border border-gray-800">
                  <achievement.icon className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-yellow-400 mb-3 xs:mb-4" />
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-3 xs:p-4 sm:p-6 rounded-xl border border-yellow-400/20">
              <div className="flex items-start space-x-4">
                <Heart className="h-5 w-5 xs:h-6 xs:w-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-2 text-yellow-400">My Philosophy</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-300">
                    "True transformation happens when you align your mindset, nutrition, and training. 
                    I don't just coach bodies—I coach lifestyles that create lasting change."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;