"use client";

import {Hero} from "./sections/Hero"
import {About} from "./sections/About"
import {Menu} from "./sections/Menu"
import { PromoSection } from "@/app/components/PromoSection";
export default function RestaurantPage() {
  return (
    <main className="bg-[rgba(210,182,177,1)]">
      <Hero/>
      <About/>
      <Menu/>
    </main>
  );
}
