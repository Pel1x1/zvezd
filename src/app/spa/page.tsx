"use client";

import About from "./sections/About";
import {Hero} from "./sections/Hero";
import { PromoSection } from "@/app/components/PromoSection";


export default function AboutPage() {
  return (
    <main className="bg-[rgba(210,182,177,1)]">
      <Hero/>
      <About/>
    </main>
  );
}
