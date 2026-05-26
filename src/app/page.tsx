import Preloader from "@/components/Preloader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Technologies from "@/sections/Technologies";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import HomeCTA from "@/sections/HomeCTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Preloader />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Projects />
      <Experience />
      <Testimonials />
      <HomeCTA />
      <Footer />
    </main>
  );
}
