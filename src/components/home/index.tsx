
"use client"
import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Blog from '@/components/home/blog';
import Services from './services';
import WhyChooseMe from './whychooseus';
export default function Home() {


  return (
    <>
      <Hero />
      <About />
      <WhyChooseMe/>
      <Services/>
      <Contact />
      <Blog />
    </>
  );
}