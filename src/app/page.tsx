import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <div className='bg-swift-purple'>
      <Hero />
      <Features />
      </div>
      <Footer />
    </main>
  );
}
