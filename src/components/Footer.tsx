'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.svg" alt="Swift Logistics" width={140} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-sm mb-4">
              Swift Logistics provides reliable package delivery services across Lagos. Fast, safe, and efficient logistics solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-swift-purple hover:text-swift-green transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-swift-purple hover:text-swift-green transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-swift-purple hover:text-swift-green transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-swift-purple hover:text-swift-green transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-swift-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-swift-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-swift-purple transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-swift-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-swift-purple transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-swift-purple transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-swift-purple transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-swift-purple transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-swift-purple" />
                <span>19 Funmilayo Onaronke Akoka, Yaba, Lagos</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-2 text-swift-purple" />
                <span>+2348147321515</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 text-swift-purple" />
                <span>info@swiftlogistics.com</span>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-swift-purple" />
                <span>Mon-SUN: 8AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Swift Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 