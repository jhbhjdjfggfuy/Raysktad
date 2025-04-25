'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="min-h-[60vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('image/bg5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Contact <span className="text-orange-400">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <strong className="block text-gray-900">Address:</strong>
                #1 Soula Street, Cantonments Accra<br />
                P.O.Box OS 2044, Osu-Accra
              </p>
              <p>
                <strong className="block text-gray-900">Phone:</strong>
                <a href="tel:+23324435449" className="text-orange-600 hover:underline">+23324435449</a><br />
                <a href="tel:+233246705184" className="text-orange-600 hover:underline">+233246705184</a>
              </p>
              <p>
                <strong className="block text-gray-900">Email:</strong>
                <a href="mailto:info@raysktadenergy.com" className="text-orange-600 hover:underline">info@raysktadenergy.com</a>
              </p>
              <p>
                <strong className="block text-gray-900">Live Chat:</strong>
                <span className="text-gray-600">Coming soon...</span>
              </p>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              {status.message && (
                <div
                  className={`p-4 rounded-md text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-semibold text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Find Us Here</h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.332972560897!2d-0.18567598403142658!3d5.562787996021782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9aa16d8c589f%3A0x7ebf12bb7508b94f!2sCantonments%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1713969561981!5m2!1sen!2sgh"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="w-full h-[400px] border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
