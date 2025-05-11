"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
    {/* Контейнер для рамки и фото */}
    <div className="relative w-[calc(100vw-64px)] h-[calc(100vh-64px)] mx-auto my-auto">
      <Image
        placeholder="blur"
        src="/img/zverd3.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
    </div>
    {/* Текст в левом нижнем углу рамки */}
    <div className="ml-[25px] mt-[10px] left-8 bottom-8 z-10 text-[rgba(210,182,177,1)] text-sm font-light tracking-[2px] leading-none">
      Московская область, г. Щёлково, д. Шевёлкино, 1
    </div>
  </section>


  );
};
