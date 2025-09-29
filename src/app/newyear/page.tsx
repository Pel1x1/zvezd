"use client";

import { useEffect } from 'react';
import {Hero} from './sections/Hero';
import NewYear from "./sections/NewYear";
import  SearchForm  from '@/app/components/SearchForm';
import Head from 'next/head';


export default function EventsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://zvezdny-complex.ru/newyear",
    "name": "Встречаем Новый 2026 год",
    "description": ".",
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
        <NewYear/>
        </div>
    </main>
  );
}
