'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Clock, Flame, Zap } from 'lucide-react';

export default function Promotion() {
  const [currentImage, setCurrentImage] = useState(0);

  const promoImages = [
    '/image/bg4.jpg',
    '/image/bg1.jpeg',
    '/image/bg2.jpeg',
    '/image/bg6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % promoImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const promos = [
    {
      title: '15% Off Fleet Fueling',
      description: 'Save big on bulk fueling services for logistics and corporate fleets.',
      icon: <Flame size={32} className="text-yellow-500 mb-4" />,
    },
    {
      title: 'Green Energy Bundle',
      description: 'Hybrid energy installation & solar packages at a discounted rate.',
      icon: <Zap size={32} className="text-green-500 mb-4" />,
    },
    {
      title: 'Loyalty Rewards',
      description: 'Earn points and bonuses for recurring fuel or service orders.',
      icon: <BadgePercent size={32} className="text-indigo-500 mb-4" />,
    },
    {
      title: 'Limited-Time Offer',
      description: 'Enjoy discounted consultation & setup for your energy needs.',
      icon: <Clock size={32} className="text-red-500 mb-4" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero with Background Slideshow */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative transition-all duration-1000"
        style={{ backgroundImage: `url(${promoImages[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Current <span className="text-yellow-400">Promotions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-white mt-4"
          >
            Explore our latest offers designed to bring energy efficiency and savings your way.
          </motion.p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Limited-Time Deals</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Take advantage of our exclusive energy service offers, tailored for both individuals and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {promos.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center">{promo.icon}</div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{promo.title}</h3>
                <p className="text-gray-700">{promo.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
