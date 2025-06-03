"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import shalle from "@/app/img/rooms/shalle.jpg";
import Link from "next/link";


export const Shalle = () => {
  const isMobile = useIsMobile();

  return (
    <section className="self-center w-full max-w-full mt-[10px] bg-[rgba(210,182,177,1)] mb-[-7px]">
      <div className="relative inline-block bg-[rgba(210,182,177,1)] ">
        <Image
          src={shalle}
          alt="Территория комплекса"
          priority
          style={{
            display: "block",
          }}
          className="w-[100%]"
        />
        <p
          className="absolute left-1/2 top-[25%] -translate-x-1/2 text-white text-center w-full px-4"
          style={{
            fontFamily: "ZenAntique",
            fontSize: isMobile ? "11px" : "35px",
          }}
        >
          БЕРЁЗКИ
        </p>
        <p
          className="absolute left-1/2 top-[35%] -translate-x-1/2 text-white text-center w-full px-4"
          style={{
            fontFamily: "RobotoL",
            fontSize: isMobile ? "10px" : "25px",
          }}
        >
          Апартаменты "Берёзки" – ваш уютный уголок в гармонии с природой!
        </p>
        <button className="absolute left-1/2 top-[40%] underline -translate-x-1/2 text-white text-center w-full px-4"
        style={{
            fontFamily: "RobotoL",
            fontSize: isMobile ? "11px" : "25px",
          }}>
          <Link className="footer-link transition-colors" href={`/rooms/shalle1`}>Подробнее</Link>
        </button>
      </div>
    </section>
  );
};
