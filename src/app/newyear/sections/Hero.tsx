"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import zvezd3 from "@/app/img/main/zvezd3.webp";
export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-black overflow-hidden" style={{height:isMobile?"":"100vh"}}>
        {/* Контейнер для рамки и фото */}
      <div>
        <div className="relative mx-auto my-auto" style={{width:isMobile?"100%":"97%", height:isMobile?"50vh":"95vh"}}>
          <Image
            src={zvezd3}
            alt="Hero background"
            fill
            className="object-cover "
            priority
            placeholder="blur"
          />
        </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-1 ">
        <div className="items-center flex flex-col justify-center">
          <p className="text-white text-[30px] md:text-[70px] mb-4 drop-shadow-lg" style={{fontFamily: "ZenAntoquie"}}>Встречаем Новый 2026 год</p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block', borderRadius: "15px" }}>
            <button
                className="bg-gray-200 text-gray-900 px-8 py-3 font-semibold text-[16px] md:text-[22px] shadow-md transition hover:bg-[#ffffff83] border-white border-1"
                style={{fontFamily: "RobotoL", borderRadius: "0.5rem" }}
            >
                Забронировать
            </button>
            </a>
            <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block', borderRadius: "15px" }}>
            <button
                className="bg-gray-200 text-gray-900 px-8 py-3 font-semibold text-[16px] md:text-[22px] shadow-md transition hover:bg-[#ffffff83] border-white border-1"
                style={{fontFamily: "RobotoL", borderRadius: "0.5rem"}}
            >
                Заказать звонок
            </button>
            </a>
            </div>
        </div>
      </div>        
        {isMobile?(
          <div style={{position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 3}}>
            <div style={{backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', borderRadius: '0.5rem', padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.1)'}}>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 300, letterSpacing: '0.05em', lineHeight: '1.25rem', marginBottom: 0}}>
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
        </div>
    </section>
  );
};
