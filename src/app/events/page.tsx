"use client";

import { useEffect } from 'react';
import {Hero} from './sections/Hero';
import EventsSections from "./sections/EventsSection";
import  SearchForm  from '@/app/components/SearchForm';
        
export default function EventsPage() {
  return (
    <main>
      <div className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
        <Hero/>
        <EventsSections/>
        </div>
    </main>
  );
}
