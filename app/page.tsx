"use client";

import { useEffect } from "react";
import Particle from "../components/particle";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Works from "@/components/home/Works";
import Skills from "@/components/home/Skills";

export default function Page() {
  
  return (
    <>
      <Particle />
      <Navigation />
      <Header />
      <Works />
      <Skills />

    </>
    
  );
}
