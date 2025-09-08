"use client";

import {Hero} from "./sections/Hero"
import WeddingsSection from "./sections/WeddingsSection"
import SpecialOffers from "./sections/SpecialOffers";
import  SearchForm  from '@/app/components/SearchForm';
        import Head from 'next/head';


export default function RestaurantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/weddings",
    "name": "Сдадьбы",
    "description": "На территории загородного комплекса вы сможете провести красивую незабываемую церемонию регистрации брака.",
    // дополнительные специфичные данные
  };
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
        <Hero/>
        <WeddingsSection/>
        <SpecialOffers/>
    </main>
  );
}
