import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Intelligence } from '@/components/Intelligence';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Intelligence />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
