"use client";

import {Hero} from "./sections/Hero"
import {Rooms} from "./sections/Rooms"
import {Shalle} from "./sections/Shalle"
import { PromoSection } from "@/app/components/PromoSection";


export default function AboutPage() {
  return (
    <main className="bg-[rgba(210,182,177,1)]">
      <Hero/>
      <Rooms/>
      <Shalle/>
      <PromoSection/>
    </main>
  );
}
