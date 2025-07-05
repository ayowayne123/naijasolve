"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Hero from "./components/hero";
import CurvedImage from "./components/curvedImage";
import Vision from "./components/vision";
import Download from "./components/download";
import HowItWorks from "./components/howItWorks";
import Empower from "./components/empower";
import Highlights from "./components/highlights";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Hero />
      <CurvedImage />
      <Vision />
      <Download />
      <HowItWorks />
      <Empower />
      <Highlights />
    </>
  );
}
