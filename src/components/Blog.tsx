import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Apple, Dumbbell } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Progressive Overload: Why Your Muscles Need Challenge",
      excerpt: "Understanding the fundamental principle that drives muscle growth and how to apply it effectively in your training routine.",
      category: "Training",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      icon: Dumbbell
    },
    {
      id: 2,
      title: "Flexible Dieting: How to Enjoy Food While Achieving Your Goals",
      excerpt: "Learn how to create a sustainable nutrition approach that fits your lifestyle without sacrificing results.",
      category: "Nutrition",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      icon: Apple
    },
    {
      id: 3,
      title: "Building Mental Resilience: The Mindset of Successful Transformations",
      excerpt: "Discover the psychological strategies that separate those who achieve lasting change from those who give up.",
      category: "Mindset",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      icon: TrendingUp
    }
  ];

  const categories = [
    { name: "Training", count: 12, color: "bg-blue-500" },
    { name: "Nutrition", count: 8, color: "bg-green-500" },
    { name: "Mindset", count: 6, color: "bg-purple-500" },
    { name: "Lifestyle", count: 4, color: "bg-orange-500" }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            FITNESS
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              INSIGHTS
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 xs:px-4">
            Evidence-based articles on training, nutrition, and mindset to help you make informed decisions 
            about your fitness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 mb-6 xs:mb-8 sm:mb-12">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 xs:bottom-4 xs:left-4 xs:right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center space-x-2 xs:space-x-4 mb-3 xs:mb-4">
                    <span className="bg-yellow-400 text-black px-2 py-1 xs:px-2 xs:py-1 sm:px-3 rounded-full text-xs sm:text-sm font-bold">
                      Featured
                    </span>
                    <span className="text-gray-300 text-xs sm:text-sm">{blogPosts[0].category}</span>
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">{blogPosts[0].title}</h3>
                </div>
              </div>
              <div className="p-3 xs:p-4 sm:p-6">
                <p className="text-xs xs:text-sm sm:text-base text-gray-300 mb-3 xs:mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 xs:h-4 xs:w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 xs:h-4 xs:w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors flex items-center space-x-1 text-xs xs:text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3 xs:h-4 xs:w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4">
                      <div className="bg-black/80 backdrop-blur-sm p-1.5 xs:p-2 rounded-lg">
                        <post.icon className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 xs:p-4 sm:p-6">
                    <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-2 xs:mb-3">
                      <span className="text-yellow-400 text-xs sm:text-sm font-semibold">{post.category}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold mb-2 xs:mb-3 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 xs:mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs sm:text-sm">{post.date}</span>
                      <a
                        href="#"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <ArrowRight className="h-3 w-3 xs:h-4 xs:w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 mt-6 xs:mt-8 lg:mt-0">
            {/* Categories */}
            <div className="bg-black rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-800">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Categories</h3>
              <div className="space-y-3 xs:space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-xs xs:text-sm sm:text-base text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl p-3 xs:p-4 sm:p-6 border border-yellow-400/20">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 text-yellow-400">Stay Updated</h3>
              <p className="text-gray-300 mb-3 xs:mb-4 sm:mb-6 text-xs sm:text-sm">
                Get the latest fitness insights, training tips, and transformation strategies delivered to your inbox.
              </p>
              <div className="space-y-2 xs:space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none text-xs xs:text-sm"
                />
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2 xs:py-2.5 sm:py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-xs xs:text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-black rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-800">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {['Muscle Building', 'Fat Loss', 'Nutrition', 'Strength Training', 'Cardio', 'Recovery', 'Supplements', 'Motivation'].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-2 py-1 xs:px-2 xs:py-1 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;