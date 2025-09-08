"use client";

import About from "./sections/About";
import {Hero} from "./sections/Hero";
import { PromoSection } from "@/app/components/PromoSection";

import  SearchForm  from '@/app/components/SearchForm';
        import Head from 'next/head';


export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/spa",
    "name": "СПА-Комплекс",
    "description": "Погрузитесь в мир релаксации и красоты с нашими эксклюзивными процедурами",
    // дополнительные специфичные данные
  };
  return (
    <main className="bg-[rgba(210,182,177,1)]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Hero/>
      <About/>
    </main>
  );
}
