'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const images = [
    '/image/bg2.jpeg',
    '/image/bg5.jpeg',
    '/image/bg4.jpg',
    '/image/bg6.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen overflow-hidden">
  <div className="absolute inset-0 z-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
       style={{ transform: `translateX(-${currentImage * 100}%)` }}>
    {images.map((src, i) => (
      <div key={i} className="min-w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
    ))}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-20 text-center px-6 flex flex-col justify-center items-center min-h-screen"
  >
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Moving Energy for Better
    </h1>
    <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">
      Leading the way in sustainable energy solutions.
    </p>
    <Link
      href="/contact"
      className="inline-block px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-orange-700 transition-all duration-300"
    >
      Get in Touch
    </Link>
  </motion.div>
</section>


      {/* Our Core Offerings */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Offerings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Premium Fuels",
                text: "High-quality fuels ensuring optimal engine performance and efficiency."
              },
              {
                title: "Advanced Lubricants",
                text: "Engine oils and lubricants designed for maximum protection and longevity."
              },
              {
                title: "Retail Services",
                text: "Convenient retail outlets offering a range of automotive products and services."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {[
              {
                title: "Quality Products",
                text: "Premium fuel and energy products that meet international standards."
              },
              {
                title: "Reliable Service",
                text: "24/7 customer support and consistent energy supply."
              },
              {
                title: "Sustainability",
                text: "Committed to environmental responsibility and green energy."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border shadow hover:shadow-lg bg-gray-50"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-orange-200">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4"
          >
            Exclusive Offers
          </motion.h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our loyalty program to enjoy special discounts and rewards.
          </p>
          <Link
            href="/promotions"
            className="inline-block px-8 py-4 bg-orange-600 text-white text-lg rounded-xl hover:bg-orange-700 transition-all"
          >
            View Promotions
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Latest News
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "New Station Opening",
                link: "/news/new-station-opening",
                desc: "We're excited to announce the opening of our new station in Accra."
              },
              {
                title: "Sustainability Initiatives",
                link: "/news/sustainability-initiatives",
                desc: "Discover our latest efforts in promoting sustainable energy solutions."
              },
              {
                title: "Customer Appreciation Week",
                link: "/news/customer-appreciation-week",
                desc: "Join us in celebrating our valued customers with special offers."
              }
            ].map((news, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.desc}</p>
                <Link href={news.link} className="text-orange-600 hover:underline">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
