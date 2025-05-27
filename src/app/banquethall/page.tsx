
"use client";

import { useEffect } from 'react';
import {Hero} from './sections/HeroSection';
import BanquetHalls from './sections/BanquetHalls';
export default function EventsPage() {
    useEffect(() => {
    // SEO optimization
    document.title = "Банкетный комплекс - Залы для торжеств и свадеб";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Премиальные банкетные залы для свадеб и торжеств. Организация незабываемых мероприятий с полным сервисом.');
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'банкетный зал, свадьба, торжество, банкет, праздник, мероприятие';
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <main>
      <div className="min-h-screen text-white" style={{ backgroundColor: '#D2B6B1' }}>
        <Hero/>
        <BanquetHalls />
        </div>
    </main>
  );
}
