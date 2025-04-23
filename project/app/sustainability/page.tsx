'use client';

import { motion } from 'framer-motion';

export default function Sustainability() {
  return (
    <main className="min-h-screen">
      <section className="hero-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white">Sustainability</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-green">Environmental Impact</h3>
              <p className="text-lg">
                We are committed to reducing our environmental footprint through sustainable practices and green initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-green">Community Development</h3>
              <p className="text-lg">
                Supporting local communities through education, employment, and social development programs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-green">Future Goals</h3>
              <p className="text-lg">
                Investing in renewable energy solutions and innovative technologies for a sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}