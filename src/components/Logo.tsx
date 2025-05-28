'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {


  return (
    <Link href="/" className={`flex items-center ${className}`}>
       <Image 
          src="/logo.svg" 
          alt="Swift Logistics Logo" 
          width={150} 
          height={40} 
          className="h-auto" 
        />
    </Link>
  );
};

export default Logo; 