'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Fuel Distribution",
      description: "Premium quality fuel distribution services for businesses and retail customers."
    },
    {
      title: "Energy Solutions",
      description: "Comprehensive energy solutions tailored to meet your specific needs."
    },
    {
      title: "Storage Facilities",
      description: "State-of-the-art storage facilities ensuring product quality and availability."
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and maintenance services for our clients."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('image/bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Our <span className="text-yellow-400">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">
              Delivering excellence through innovation, sustainability, and top-tier support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">{service.title}</h3>
                <p className="text-base text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
