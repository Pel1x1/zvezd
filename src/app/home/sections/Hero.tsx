"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import zvezd3 from "@/app/img/main/zvezd3.webp";
export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{height:isMobile?"":"100vh"}}>
    {/* Контейнер для рамки и фото */}
    <div className="relative mx-auto my-auto" style={{width:isMobile?"100%":"97%", height:isMobile?"50vh":"95vh"}}>
      <Image
        placeholder="blur"
        src={zvezd3}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
    </div>
    {/* Текст в левом нижнем углу рамки */}
    
    {isMobile?(
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 z-20">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 border border-white/10">
          <p className="text-white/80 text-xs sm:text-sm font-light tracking-wider leading-tight mb-0">
            Московская область, г. Щёлково, д. Шевёлкино, 1
          </p>
        </div>
      </div>

    ):(
        <div 
      style={{width:"97%"}}
      className="mx-auto mt-[10px] left-8 bottom-8 z-10 text-[rgba(210,182,177,1)] text-sm font-light tracking-[2px] leading-none">
        Московская область, г. Щёлково, д. Шевёлкино, 1
      </div>
    )}

  </section>


  );
};
