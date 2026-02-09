import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Values from '@/components/sections/Values';
import Services from '@/components/sections/Services';
import Explore from '@/components/sections/Explore';
import History from '@/components/sections/History';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Banner from '@/components/sections/Banner';
import FundingExplore from '@/components/sections/FundingExplore';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Banner />
      <Explore /> {/* 오마이컴퍼니 스타일 핵심 */}
      <About />
      <Values />
      <Services />
      <History />
      <Team />
      <Contact />
    </main>
  );
}