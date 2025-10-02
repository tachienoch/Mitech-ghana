import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  );
}
