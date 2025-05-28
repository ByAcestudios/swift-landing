'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-swift-purple text-white pt-20 lg:pt-2 pb-40 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
        {/* Left column with text */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get your Packages delivered <span className="text-swift-green">swiftly.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Make Deliveries Easily And Quickly. The Best Logistics Service In Lagos
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black text-white rounded-lg overflow-hidden w-[180px]">
                <div className="flex items-center px-3 py-2">
                  <div className="mr-3">
                    <FaApple className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black text-white rounded-lg overflow-hidden w-[180px]">
                <div className="flex items-center px-3 py-2">
                  <div className="mr-3">
                    <FaGooglePlay className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Right column with phone image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-20 pr-0 lg:pr-4">
          <div className="relative w-[320px] md:w-[400px] lg:w-[600px] translate-y-24">
            <Image
              src="/swift-app.png"
              alt="Swift Logistics Mobile App"
              width={500}
              height={1200}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Background curved shape */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-white rounded-tl-[50px] rounded-tr-[50px] z-10"></div> */}
    </section>
  );
};

export default Hero; 