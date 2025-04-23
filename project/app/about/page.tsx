"use client";

import { motion } from "framer-motion";

export default function About() {
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
            About <span className="text-yellow-400">Raysktad Energy</span>
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-yellow-400 inline-block">
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Raysktad Energy has been at the forefront of Ghana's energy sector, providing
                reliable and sustainable energy solutions to businesses and communities
                across the nation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded with a vision to transform the energy landscape, we've grown to become
                one of the leading energy providers in West Africa.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-yellow-400 inline-block">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                To provide sustainable and reliable energy solutions while maintaining the
                highest standards of safety and environmental responsibility.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Commitment to quality</li>
                <li>Environmental stewardship</li>
                <li>Community development</li>
                <li>Innovation in energy</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
