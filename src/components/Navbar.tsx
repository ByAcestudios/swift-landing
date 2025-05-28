'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-swift-purple text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg"
            alt="Swift Logistics"
            width={130}
            height={40}
            className="h-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="border-b-2 border-white">Home</Link>
          <Link href="/about" className="hover:border-b-2 hover:border-white transition-all duration-200">About</Link>
          <Link href="/contact" className="hover:border-b-2 hover:border-white transition-all duration-200">Contact</Link>
          <Link href="/how-it-works" className="hover:border-b-2 hover:border-white transition-all duration-200">How it works</Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/get-started" className="bg-swift-green text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
            Get Started
          </Link>
          <Link href="/sign-in" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-swift-purple transition">
            Sign In
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-swift-purple border-t border-gray-700 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/about" className="text-white">About</Link>
            <Link href="/contact" className="text-white">Contact</Link>
            <Link href="/how-it-works" className="text-white">How it works</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/get-started" className="bg-swift-green text-white px-4 py-2 rounded hover:bg-opacity-90 text-center">
                Get Started
              </Link>
              <Link href="/sign-in" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-swift-purple text-center">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 