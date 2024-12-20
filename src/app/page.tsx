"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import About from "@/app/components/About";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  }, []); 

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
