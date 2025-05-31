"use client";

import "../components/styles.css";

export const Footer = () => {
  return (
    <footer className="bg-black flex w-full flex-col text-sm font-light tracking-[2px] px-[51px] py-[77px] max-md:max-w-full max-md:px-5">
      <div className="text-[rgba(210,182,177,1)]">
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
        <p>© 2025. ЗАГОРОДНЫЙ КОМПЛЕКС «ЗВЁЗДНЫЙ»</p>
        <p className="text-[14px]">Made by "K<span className="text-[10px]">&</span>K"</p>
      </div>
      
    </footer>

  );
};
