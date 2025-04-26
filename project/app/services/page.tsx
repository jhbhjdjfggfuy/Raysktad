'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Flame, Zap, Warehouse, Headphones, ShieldCheck,
  Recycle, Truck, PackageCheck
} from 'lucide-react';

const images = [
  '/image/bg1.jpeg',
  '/image/bg2.jpeg',
  '/image/bg5.jpeg',
  '/image/bg6.jpg'
];

const services = [
  {
    title: "Fuel Distribution",
    description: "Premium quality fuel distribution services tailored for retail and commercial sectors.",
    icon: <Flame size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Energy Solutions",
    description: "Tailor-made clean energy and hybrid solutions with focus on sustainability.",
    icon: <Zap size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Storage Facilities",
    description: "State-of-the-art fuel and energy storage with high safety and quality standards.",
    icon: <Warehouse size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Technical Support",
    description: "24/7 maintenance and engineering support ensuring seamless operations.",
    icon: <Headphones size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Environmental Compliance",
    description: "We lead with green practices and are compliant with global environmental standards.",
    icon: <Recycle size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Fleet Services",
    description: "Dedicated fleet fueling and servicing for logistics and transportation industries.",
    icon: <Truck size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Commercial Partnerships",
    description: "Strategic B2B partnerships to deliver energy directly to businesses.",
    icon: <PackageCheck size={32} className="text-orange-600 mb-4" />
  },
  {
    title: "Safety & Assurance",
    description: "Robust safety protocols and quality assurance backed by international standards.",
    icon: <ShieldCheck size={32} className="text-orange-600 mb-4" />
  },
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero with Slideshow */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Comprehensive <span className="text-yellow-400">Energy Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-white mt-4"
          >
            Empowering industries, communities, and the environment with innovative energy solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Offerings</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Explore the wide range of high-quality, efficient, and sustainable energy services we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
