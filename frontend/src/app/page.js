import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Services from "./components/Services";
import dynamic from 'next/dynamic';

const CalendlyInline = dynamic(() => import('./components/CalendlyInline'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Header/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}
