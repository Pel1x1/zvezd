"use client";

import {Hero} from "./sections/Hero"
import {About} from "./sections/About"
import {Menu} from "./sections/Menu"
import { PromoSection } from "@/app/components/PromoSection";
import  SearchForm  from '@/app/components/SearchForm';
import TravellineLoader from '@/app/components/TravellineLoader';
import Head from 'next/head';


export default function RestaurantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/restaurant",
    "name": "Ресторан За Поводом",
    "description": "Европейские блюда от наших талантливых поваров сделают ваш визит поистине особенным.",
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
      <Menu/>
    </main>
  );
}
