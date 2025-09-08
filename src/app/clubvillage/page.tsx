"use client";

import { useEffect } from 'react';
import {Hero} from './sections/Hero';
import About from './sections/About';
import VillageSection from "./sections/Houses";
        import Head from 'next/head';


export default function EventsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/clubvillage",
    "name": "Клубный посёлок",
    "description": "Описание страницы",
    // дополнительные специфичные данные
  };
  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
        <Hero/>
        <About/>
        <VillageSection/>
        </div>
    </main>
  );
}
