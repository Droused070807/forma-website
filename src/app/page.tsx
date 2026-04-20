import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Proof } from '@/components/Proof';
import { How } from '@/components/How';
import { Engine } from '@/components/Engine';
import { Feel } from '@/components/Feel';
import { Price } from '@/components/Price';
import { Final } from '@/components/Final';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Proof />
      <How />
      <Engine />
      <Feel />
      <Price />
      <Final />
      <Footer />
    </main>
  );
}
