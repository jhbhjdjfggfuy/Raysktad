'use client';

import { motion } from 'framer-motion';
import {
  Leaf,
  Users,
  Lightbulb,
  ShieldCheck,
  Recycle,
  Globe,
  Flame,
  HandHeart,
} from 'lucide-react';

export default function Sustainability() {
  const sustainabilityItems = [
    {
      title: "Environmental Impact",
      description:
        "We are committed to reducing our environmental footprint through sustainable practices and green initiatives.",
      icon: <Leaf size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Community Development",
      description:
        "Supporting local communities through education, employment, and social development programs.",
      icon: <Users size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Future Goals",
      description:
        "Investing in renewable energy solutions and innovative technologies for a sustainable future.",
      icon: <Lightbulb size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Safety & Assurance",
      description:
        "Implementing robust safety protocols and quality assurance backed by international standards.",
      icon: <ShieldCheck size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Waste Management",
      description:
        "Developing comprehensive waste management systems to minimize environmental impact.",
      icon: <Recycle size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Global Partnerships",
      description:
        "Collaborating with global partners to promote sustainable energy practices worldwide.",
      icon: <Globe size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Carbon Reduction",
      description:
        "Implementing strategies to reduce carbon emissions and promote cleaner energy sources.",
      icon: <Flame size={32} className="text-green-600 mb-4" />,
    },
    {
      title: "Health & Well-being",
      description:
        "Fostering health and well-being initiatives for our employees and the communities we serve.",
      icon: <HandHeart size={32} className="text-green-600 mb-4" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/image/bg6.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Our <span className="text-green-400">Sustainability</span> Vision
          </motion.h1>
        </div>
      </section>

      {/* Sustainability Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Driving Sustainable Progress
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Raysktad Energy, sustainability is at the core of our operations—from environmental care to empowering communities and investing in a greener tomorrow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {sustainabilityItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
