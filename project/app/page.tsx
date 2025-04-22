import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero-section min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving Energy for Better
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Leading the way in sustainable energy solutions
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Quality Products</h3>
            <p>Premium fuel and energy products that meet international standards</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Reliable Service</h3>
            <p>24/7 customer support and consistent energy supply</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
            <p>Committed to environmental responsibility and green energy</p>
          </div>
        </div>
      </section>
    </main>
  );
}