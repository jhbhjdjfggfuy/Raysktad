import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = localFont({
  src: '../public/fonts/inter-var.woff2',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Raysktad Energy - Moving Energy for Better',
  description: 'Leading energy company in Ghana providing sustainable energy solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}