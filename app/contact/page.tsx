'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

interface FormStatus {
  success?: string;
  error?: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({});

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus({
        success: 'Thank you! Your message has been sent successfully.',
      });
      form.reset();
    } catch (error) {
      setFormStatus({
        error: 'Sorry, something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jordantyrill@gmail.com',
      href: 'jordantyrill@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254710148740',
      href: '+254710148740',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
  ];

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="py-12"
    >
      <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6">
        {/* Navigation */}
        <motion.nav 
          className="flex items-center"
          variants={fadeInUp}
        >
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.nav>

        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={fadeInUp}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg space-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-white font-semibold">Current Availability</h3>
              <p className="text-gray-300">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-green-500 text-sm">Available for work</span>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            variants={fadeInUp}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                  placeholder="Your message..."
                  disabled={isSubmitting}
                />
              </div>

              {formStatus.error && (
                <div className="text-red-500 text-sm p-3 bg-red-500/10 rounded-lg">
                  {formStatus.error}
                </div>
              )}
              
              {formStatus.success && (
                <div className="text-green-500 text-sm p-3 bg-green-500/10 rounded-lg">
                  {formStatus.success}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}