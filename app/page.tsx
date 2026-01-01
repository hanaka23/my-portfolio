"use client";

import { useEffect } from "react";
import Particle from "../components/particle";
import Header from "@/components/Header";
import Top from "@/components/home/Top";
import Works from "@/components/home/Works";
import Skills from "@/components/home/Skills";
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";

export default function Page() {
  return (
    <>
      <Particle />
      <Header />

      <section id="top">
        <Top />
      </section>

      <section id="works">
        <Works />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
