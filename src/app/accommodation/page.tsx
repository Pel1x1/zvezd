"use client";

import {Hero} from "./sections/Hero"
import {Rooms} from "./sections/Rooms"
import {Shalle} from "./sections/Shalle"
import { PromoSection } from "@/app/components/PromoSection";
        import Head from 'next/head';



export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/accommodation",
    "name": "Проживание",
    "description": "Отель с уютными номерами для комфортного проживания!",
    // дополнительные специфичные данные
  };
  return (
    <main className="bg-[rgba(210,182,177,1)]" style={{paddingBottom:"10%"}}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Hero/>
      <Rooms/>
      <Shalle/>
    </main>
  );
}
