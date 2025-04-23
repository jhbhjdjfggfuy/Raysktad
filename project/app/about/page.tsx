"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen">
      <section
  className="hero-section min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative py-20"
  style={{backgroundImage: "url('image/bg.jpeg')"}} // replace with your actual image path
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white">About Raysktad Energy</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Raysktad Energy has been at the forefront of Ghana's energy sector, providing reliable and sustainable energy solutions to businesses and communities across the nation.
              </p>
              <p className="text-lg mb-4">
                Founded with a vision to transform the energy landscape, we've grown to become one of the leading energy providers in West Africa.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                To provide sustainable and reliable energy solutions while maintaining the highest standards of safety and environmental responsibility.
              </p>
              <ul className="list-disc list-inside space-y-2">
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