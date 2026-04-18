import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Problems } from '@/components/Problems';
import { Cases } from '@/components/Cases';
import { Process } from '@/components/Process';
import { Stack } from '@/components/Stack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <Problems />
      <div className="section-divider" />
      <Cases />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <Stack />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
