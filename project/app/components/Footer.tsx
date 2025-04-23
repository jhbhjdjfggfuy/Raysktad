import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>#1 Soula Street, Cantonments Accra</li>
              <li>P.O.Box OS 2044, Osu-Accra</li>
              <li>Tel: +23324435449, +233246705184</li>
              <li>Email: <a href="mailto:info@raysktadenergy.com" className="hover:text-orange-500">info@raysktadenergy.com</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-500 transition">Services</a></li>
              <li><a href="/sustainability" className="hover:text-orange-500 transition">Sustainability</a></li>
              <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Follow Us</h3>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-orange-500 transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Raysktad Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
