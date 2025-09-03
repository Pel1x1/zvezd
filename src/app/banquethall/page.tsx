
"use client";

import { useEffect } from 'react';
import {Hero} from './sections/HeroSection';
import BanquetHalls from './sections/BanquetHalls';

const halls2 = [
  {
    id: 1,
    name: "Основной зал",
    capacity: "до 140 гостей",
    area: "270 кв.м",
    description: "Большой просторный зал ресторана-отеля «За поводом» Идеально подходит для торжественных мероприятий и свадеб. Удобное зонирование с тремя вип - зонами.",
    features: ["Дизайнерский интерьер", "Панорамные окна", "Камин", "Профессиональное освещение"],
    images: [
      "/img/bankets/banketClassic-1.webp",
      "/img/bankets/banketClassic-2.webp",
      "/img/bankets/banketClassic-3.webp",
    ]
  },
  {
    id: 2,
    name: "Белый зал",
    capacity: "до 100 гостей",
    area: "150 кв.м",
    description: "Стильный светлый зал в окружении березовой рощи, панорамные окна и минимализм в интерьере.",
    features: ["Выездная регистрация", "Панорамные окна", "Романтическое освещение", "Уютная атмосфера"],
    images: [
      "/img/bankets/banketWhite-1.webp",
      "/img/bankets/banketWhite-2.webp",
      "/img/bankets/banketWhite-3.webp",
    ] 
  },
  {
    id: 3,
    name: "Изумрудный зал",
    capacity: "до 70 гостей",
    area: "140 кв.м",
    description: "Уютный изолированный зал на третьем этаже бутик-отеля «За поводом» для камерных мероприятий.",
    features: ["Бар", "LED-освещение", "Мультимедийное оборудование", "Зонирование"],
    images: [
      "/img/bankets/banketEmerald-1.webp",
      "/img/bankets/banketEmerald-2.webp",
      "/img/bankets/banketEmerald-3.webp",
    ]
  }
];

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
        <BanquetHalls halls={halls2} />

        </div>
    </main>
  );
}
