"use client";

import {Hero} from "./sections/Hero"
import WeddingsSection from "./sections/WeddingsSection"
import SpecialOffers from "./sections/SpecialOffers";
export default function RestaurantPage() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
        <Hero/>
        <WeddingsSection/>
        <SpecialOffers/>
    </main>
  );
}
