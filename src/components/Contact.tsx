import React, { useState } from 'react';
import { supabase, type ConsultationRequest } from '../lib/supabase';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Youtube,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Submit to Supabase
    submitToSupabase();
  };

  const submitToSupabase = async () => {
    try {
      console.log('Submitting form data:', formData);
      
      const consultationData: ConsultationRequest = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        goal: formData.goal,
        message: formData.message
      };

      console.log('Consultation data:', consultationData);

      const { error } = await supabase
        .from('consultation_requests')
        .insert([consultationData]);

      if (error) {
        console.error('Supabase error:', error);
        alert(`Database error: ${error.message}. Please try again or contact us directly.`);
        setIsLoading(false);
        return;
      }

      console.log('Form submitted successfully');
      // Success
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        goal: '',
        message: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      alert(`Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact us directly.`);
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            START YOUR
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              TRANSFORMATION
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 xs:px-4">
            Ready to transform your physique and lifestyle? Let's discuss your goals and create a personalized plan that works for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-4 xs:p-6 sm:p-8 border border-gray-800">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6">Get Your Free Consultation</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8 xs:py-12">
                <CheckCircle className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-3 xs:mb-4" />
                <h4 className="text-base xs:text-lg sm:text-xl font-bold text-green-400 mb-2">Request Submitted!</h4>
                <p className="text-xs xs:text-sm sm:text-base text-gray-300">Your consultation request has been submitted successfully! I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 xs:mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors text-xs xs:text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 xs:mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors text-xs xs:text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 xs:mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors text-xs xs:text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 xs:mb-2">Primary Goal *</label>
                    <select
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-3 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors text-xs xs:text-sm"
                    >
                      <option value="">Select your goal</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="body-recomposition">Body Recomposition</option>
                      <option value="strength-training">Strength Training</option>
                      <option value="lifestyle-change">Lifestyle Change</option>
                      <option value="competition-prep">Competition Prep</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 xs:mb-2">Tell me about your fitness journey *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none text-xs xs:text-sm"
                    placeholder="Share your current fitness level, previous experience, challenges you're facing, and what you hope to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2.5 xs:py-3 sm:py-4 rounded-lg font-bold text-sm xs:text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isLoading 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg hover:shadow-yellow-400/25'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 border-b-2 border-gray-300"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl p-4 xs:p-6 sm:p-8 border border-yellow-400/20">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6 text-yellow-400">Prefer Direct Contact?</h3>
              <div className="space-y-4 xs:space-y-6">
                <a
                  href="https://wa.me/919156962721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 p-3 xs:p-4 sm:p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 animate-pulse"
                >
                  <div className="relative">
                    <MessageCircle className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 w-3 h-3 xs:w-4 xs:h-4 bg-white rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm xs:text-base sm:text-lg group-hover:text-green-100 transition-colors">WhatsApp</div>
                    <div className="text-green-100 group-hover:text-white transition-colors text-xs xs:text-sm sm:text-base">Message me directly • Online now</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 xs:w-3 xs:h-3 bg-green-300 rounded-full animate-bounce"></div>
                  </div>
                </a>

                <a
                  href="mailto:shahzeb20shaikh@gmail.com"
                  className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 p-3 xs:p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="relative">
                    <Mail className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 text-white group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
                    <div className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 w-4 h-4 xs:w-5 xs:h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm xs:text-base sm:text-lg group-hover:text-blue-100 transition-colors">Email</div>
                    <div className="text-blue-100 group-hover:text-white transition-colors text-xs xs:text-sm sm:text-base break-all">shahzeb20shaikh@gmail.com</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6 xs:w-8 xs:h-8 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Additional Contact Info */}
              <div className="mt-6 xs:mt-8 pt-4 xs:pt-6 border-t border-yellow-400/20">
                <div className="flex items-center justify-center space-x-3 xs:space-x-4 sm:space-x-8 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3 xs:h-4 xs:w-4 text-yellow-400" />
                    <span className="hidden sm:inline">Response within 2 hours</span>
                    <span className="sm:hidden">Quick response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 xs:h-4 xs:w-4 text-green-400" />
                    <span>Free consultation</span>
                  </div>
                </div>
              </div>
            </div>

            


           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;