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
    <main className="min-h-screen">
      <section className="hero-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white">Our Services</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-orange">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}