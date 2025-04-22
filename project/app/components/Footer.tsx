export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>#1 Soula Street, Cantonments Accra</p>
            <p>P.O.Box OS 2044</p>
            <p>Osu-Accra</p>
            <p>Tel: +23324435449, +233246705184</p>
            <p>Email: info@raysktadenergy.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-500">Services</a></li>
              <li><a href="/sustainability" className="hover:text-orange-500">Sustainability</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">Facebook</a>
              <a href="#" className="hover:text-orange-500">Twitter</a>
              <a href="#" className="hover:text-orange-500">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Raysktad Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}