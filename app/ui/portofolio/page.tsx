"use client";
import { useState, useEffect } from "react";
import { Variants } from "framer-motion";
import NavBar from "@/app/components/portofolio/NavBar";
import Hero from "@/app/components/portofolio/section/Hero";
import About from "@/app/components/portofolio/section/About";
import Project from "@/app/components/portofolio/section/Project";
import Skill from "@/app/components/portofolio/section/Skill";
import Contact from "@/app/components/portofolio/section/Contact";
import Footer from "@/app/components/portofolio/section/Footer";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 text-black font-playfair-display">
      <NavBar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <About fadeUp={fadeUp} />
      <Project fadeUp={fadeUp} />
      <Skill fadeUp={fadeUp} />
      <Contact fadeUp={fadeUp} />
      <Footer />
    </div>
  );
}
