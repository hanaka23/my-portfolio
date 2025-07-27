"use client";

import { useEffect } from "react";
import Particle from "../components/Particle";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Works from "@/components/home/Works";

export default function Page() {
  
  return (
    <>
      <Particle />
      <Navigation />
      <Header />
      <Works />
    </>
    
  );
}
