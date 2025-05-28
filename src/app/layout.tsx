import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Swift Logistics - Fast Package Delivery in Lagos",
  description: "Swift Logistics provides fast and reliable package delivery services in Lagos. Get your packages delivered swiftly with our mobile app available on iOS and Android.",
  keywords: "logistics, delivery, swift delivery, package delivery, Lagos delivery, courier service, shipping",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Swift Logistics - Fast Package Delivery in Lagos",
    description: "Swift Logistics provides fast and reliable package delivery services in Lagos. Get your packages delivered swiftly with our mobile app available on iOS and Android.",
    url: "https://swiftlogisticsng.com",
    siteName: "Swift Logistics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
