"use client";

import React from 'react';
import {Hero} from "./sections/Hero"
import { AboutSection } from "./sections/AboutSection";
import { RestaurantAndSpaSection } from "./sections/RestaurantAndSpaSection";
import { RoomSection } from "./sections/RoomSection";
import { BanquetHallSection } from "./sections/BanquetHallSection";
import { PromoSection } from "@/app/components/PromoSection";
import { TerritorySection } from "./sections/TerritorySection";
import  InteractiveMap  from "./sections/InteractiveMap";
import  SearchForm  from '@/app/components/SearchForm';
import  BookingForm  from '@/app/components/BookingForm';
import TravellineLoader from '@/app/components/TravellineLoader';
import Head from 'next/head';


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/",
    "name": "«Звёздный»",
    "description": "Загородный комплекс «Звёздный» — Официальный сайт",
    // дополнительные специфичные данные
  };
  return (
    <main className='bg-[rgba(210,182,177,1)]'>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="bg-[rgba(68,68,68,1)] overflow-hidden rounded-sm border-[rgba(255,255,255,0.1)] border-solid ">
      <div className="bg-[rgba(210,182,177,1)] flex w-full flex-col items-stretch max-md:max-w-full ">
        <main className=''>
          <Hero />
          
          <BookingForm/>
          <AboutSection />
          {/*<InteractiveMap/>*/}
          <TerritorySection/>
          <RestaurantAndSpaSection />
          <RoomSection />
          <BanquetHallSection />
          <div className=' text-transparent' style={{height:"10px"}}></div>
        </main>
      </div>
    </div>

    </main>
  );
} 