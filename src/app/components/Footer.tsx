"use client";

import "../components/styles.css";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const Footer = () => {
    const isMobile = useIsMobile();
  
  return (
    <footer className="bg-black flex w-full flex-col text-sm font-light tracking-[2px] px-[51px] pt-[77px] pb-3 max-md:max-w-full max-md:px-5">
      <div className="text-[rgba(210,182,177,1)] mt-[20px]">
      <a href="https://t.me" className="footer-link">TELEGRAM</a> | 
        <a href="https://vk.ru" className="footer-link hover:text-white ml-[5px]">VK</a>
      </div>
      <div className="flex items-stretch gap-2.5 mt-[18px]">
        <div className="text-[rgba(242,215,210,1)]">
          MAIL <span className="text-[rgba(210,182,177,1)]">: </span>
        </div>
        <div className="text-[rgba(210,182,177,1)] basis-auto">
          <a href="mailto:kck.zvezd@mail.ru" className="footer-link hover:text-white">kck.zvezd@mail.ru</a>
        </div>
      </div>
      <div className="text-[rgba(210,182,177,1)] mt-[18px]">
        <a href="tel:+79850168008" className="footer-link hover:text-white">+7 985 016 80 08</a>
      </div>
      <div className="text-[rgba(242,215,210,1)] leading-[21px] mt-[18px]">
        141143, Московская область, г. Щёлково,д. Шевёлкино, 1
      </div>
      <div className="text-[rgba(210,182,177,1)] leading-none mt-[21px] flex justify-between">
        <p className="" style={{fontSize: isMobile?"10px":"15px"}}>© 2025. ЗАГОРОДНЫЙ КОМПЛЕКС «ЗВЁЗДНЫЙ»</p>
        <a href="https://pel1x1.ru" className="footer-link">
          <p className="text-right whitespace-nowrap flex-shrink-0" style={{fontSize: isMobile?"10px":"15px"}}>
            Made by "K<span className="text-[10px]">&</span>K"</p>
        </a>
      </div>

    </footer>

  );
};
