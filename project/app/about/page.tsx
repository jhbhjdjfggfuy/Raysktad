"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/image/bg1.jpeg",
    "/image/bg2.jpeg",
    "/image/bg5.jpeg",
    "/image/bg6.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section with Slideshow */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            About <span className="text-yellow-400">Raysktad Energy</span>
          </motion.h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-6">
            Our Vision
          </motion.h2>
          <p className="text-lg text-gray-700">
            Inspired by global leaders in energy like SOCAR and Caltex, our vision is to lead Africa into a new era of responsible and innovative energy
            development—delivering solutions that are efficient, inclusive, and environmentally sound.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Kwame Mensah</h3>
                <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                <p className="text-sm text-gray-500">Bringing over 15 years of leadership in oil and gas across Africa.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Akosua Addo</h3>
                <p className="text-gray-600 mb-2">Head of Operations</p>
                <p className="text-sm text-gray-500">Expert in logistics and refining, spearheading efficiency initiatives.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Kojo Boateng</h3>
                <p className="text-gray-600 mb-2">Sustainability Director</p>
                <p className="text-sm text-gray-500">Leading sustainable projects and partnerships across the continent.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-8">
            Sustainability Goals
          </motion.h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We are committed to supporting the global energy transition by investing in renewable energy, reducing emissions, and promoting clean technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Net Zero Commitment</h3>
              <p className="text-gray-600">Our roadmap includes achieving carbon neutrality by 2040.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Renewable Projects</h3>
              <p className="text-gray-600">Launching solar and wind energy projects across rural Ghana.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
              <p className="text-gray-600">We partner with local communities to foster education and clean energy awareness.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
