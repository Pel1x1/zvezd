"use client"
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {PromoSection} from "./components/PromoSection";
const inter = Inter({ subsets: ["latin", "cyrillic"] });
import Script from 'next/script';
import TravellineLoader from '@/app/components/TravellineLoader';
import { Button } from "@/app/spa/sections/button";
import { useIsMobile } from "@/app/hooks/use-mobile";
import Image from "next/image";
import  fuckinglogo from "@/app/img/logo.webp";

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    
    <html lang="ru" className="bg-black">
      
      <body className={inter.className} style={{background: "black"}} >
        
        <div className='w-full h-14 bg-[rgba(145,3,1,0.7)] border-white py-2 px-4 fixed top-0 z-10000 flex items-center justify-between'>
          {/* Левая колонка: телефон с кликом-звонком */}
          {!isMobile &&(
          <div className="text-white cursor-pointer lg:text-lg " onClick={() => window.location.href = 'tel:+79850168008'}>
            +7 (985) 016-80-08
          </div>)}

          {/* Центр: текст */}
          <div className="flex items-center gap-3 text-white font-bold text-[10px] lg:text-lg">
          {/* Круглое лого */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
            {/* Внутрь можно положить картинку или иконку */}
            <Image src={fuckinglogo} alt="Logo" className="w-8 h-8 object-cover"/>
          </div>
          <span>ЗАГОРОДНЫЙ КОМПЛЕКС «ЗВЁЗДНЫЙ»</span>
        </div>

          {/* Правая колонка: кнопка */}
          <Button
            size="lg"
            style={{
              fontFamily: "Roboto",
              fontSize: isMobile ? "10px" : "20px",
              paddingLeft: isMobile ? "15px" : "40px",
              paddingRight: isMobile ? "15px" : "40px",
              paddingTop: isMobile ? "0.5" : "0.75rem",
              paddingBottom: isMobile ? "0.5" : "0.75rem",
            }}
            className="text-black border-black bg-[rgba(255,255,255,1)] transition-all hover:bg-[rgba(145,72,71,1)]"
            onClick={() => window.location.href = '/booking'}
          >
            Забронировать
          </Button>
        </div>
        <Header/>
        <TravellineLoader />
        {children}   
        <PromoSection/>
        <Footer/>
      </body>
    </html>
  );
}
