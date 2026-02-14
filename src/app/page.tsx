import Navbar from '@/components/Navbar';
import AmbientAudio from '@/components/AmbientAudio';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Philosophy from '@/components/Philosophy';
import Differentiators from '@/components/Differentiators';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <AmbientAudio />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Philosophy />
      <Differentiators />
      <Contact />
    </main>
  );
}
