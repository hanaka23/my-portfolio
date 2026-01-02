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
      <Header variant="top" />

      <section id="top">
        <Top />
      </section>

      <div className="bg-[var(--color-base)] w-full px-[12px] pb-[64px]">
        <div className="max-w-[1080px] m-auto">
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
        </div>
      </div>
    </>
  );
}
