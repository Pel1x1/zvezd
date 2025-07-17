"use client";

import { useEffect } from 'react';
import {Hero} from './sections/Hero';
import About from './sections/About';
import VillageSection from "./sections/Houses";

export default function EventsPage() {
  return (
    <main>
      <div className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
        <Hero/>
        <About/>
        <VillageSection/>
        </div>
    </main>
  );
}
