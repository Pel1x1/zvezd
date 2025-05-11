"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
    {/* Контейнер для рамки и фото */}
    <div className="relative w-[calc(100vw-64px)] h-[calc(100vh-64px)] mx-auto my-auto ">
      <Image
        src="/img/accommodation1.jpg"
        alt="Hero background"
        fill
        className="object-cover "
        priority
        placeholder="blur"
      />
    </div>
    {/* Центрированный текст поверх фото */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-1 ">
      <div className="items-center flex flex-col justify-center">
      <p className="text-white text-[30px] md:text-[70px] mb-4 drop-shadow-lg" style={{fontFamily: "ZenAntoquie"}}>ПРОЖИВАНИЕ</p>
      <p className="text-white text-[20px] md:text-[30px] font-light max-w-2xl text-center drop-shadow-md"  style={{fontFamily: "RobotoL"}}>
      Отель с уютными номерами для комфортного проживания!
      </p>
      </div>
    </div>
    {/* Текст в левом нижнем углу рамки */}
    <div className="ml-[25px] mt-[10px] bottom-8 z-1 text-[rgba(210,182,177,1)] text-sm font-light tracking-[2px] leading-none">
      Московская область, г. Щёлково, д. Шевёлкино, 1
    </div>
  </section>


  );
};
