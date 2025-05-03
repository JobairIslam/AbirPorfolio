import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Tools from "@/components/sections/tools";
import Experience from "@/components/sections/experience";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Tools />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}