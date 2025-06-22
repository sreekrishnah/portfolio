'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Send, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { contactConfig } from '@/app/utils/ContactConfig';
import { submitContactForm } from '@/app/utils/ContactService';
import { ContactFormData } from '@/app/types/ContactType';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await submitContactForm(formData);
      
      if (success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          icon: <CheckCircle2 className="w-5 h-5" />,
          duration: 4000,
        });
        handleClear();
      } else {
        toast.error('Failed to send message. Please try again later.', {
          icon: <XCircle className="w-5 h-5" />,
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again.', {
        icon: <XCircle className="w-5 h-5" />,
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <section id="Contact" className="relative min-h-screen overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight"
                >
                  {contactConfig.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xs sm:text-sm md-text-base text-gray-300 leading-relaxed max-w-md"
                >
                  {contactConfig.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-2"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl py-3 px-6 md:p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <h3 className="text-sm sm:text-base font-semibold text-orange-400">
                      {contactConfig.emailSection.title}
                    </h3>
                  </div>
                  <a
                    href={`mailto:${contactConfig.emailSection.email}`}
                    className="text-white hover:text-purple-300 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {contactConfig.emailSection.email}
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="text-xs md:text-base w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="text-xs md:text-base w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="text-xs md:text-base w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-row gap-4"
                  >
                    <button
                      type="submit"
                      disabled={!isFormValid || isLoading}
                      className="ui-btn text-xs sm:text-sm flex w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 disabled:from-gray-600 disabled:to-gray-700 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed group"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      )}
                      <span>{isLoading ? 'Sending...' : 'Send'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleClear}
                      disabled={isLoading}
                      className="ui-btn text-xs sm:text-sm sm:flex-none w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 disabled:from-gray-600 disabled:to-gray-700 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed group"
                    >
                      <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      <span>Clear</span>
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            color: '#fff',
            background: 'rgb(23, 24, 23)',
          },
          success: {
            style: {
             border: '1px solid rgba(108, 239, 68, 0.5)',
            },
          },
          error: {
            style: {
              border: '1px solid rgba(239, 68, 68, 0.5)',
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;