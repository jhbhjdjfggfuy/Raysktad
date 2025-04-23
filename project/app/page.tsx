import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section
  className="hero-section min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative py-20"
  style={{backgroundImage: "url('image/bg.jpeg')"}} // replace with your actual image path
>
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* optional dark overlay */}

  <div className="container mx-auto px-6 lg:px-8 text-center z-10 relative">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
      Moving Energy for Better
    </h1>
    <p className="text-lg md:text-2xl text-white mb-10 max-w-2xl mx-auto">
      Leading the way in sustainable energy solutions.
    </p>
    <Link
      href="/contact"
      className="inline-block px-8 py-4 bg-orange-600 text-white text-lg font-medium rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
    >
      Get in Touch
    </Link>
  </div>
</section>


<section className="py-20 bg-orange">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Quality Products</h3>
              <p className="text-gray-600">Premium fuel and energy products that meet international standards.</p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">24/7 customer support and consistent energy supply.</p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">Committed to environmental responsibility and green energy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}