"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import territory from "@/app/img/Territory.png";

export const TerritorySection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="self-center w-full max-w-full mt-[100px] mb-[25px] max-md:mt-[100px]">
      <div className="relative inline-block w-full">
        <Image
          src={territory}
          alt="Территория комплекса"
          priority
          width={1280} // Укажи реальные размеры картинки
          height={720}
          style={{
            transform: isMobile ? "scale(1.35)" : "none",
            display: "block",
            width: isMobile ? "100%" : "auto",
            height: "auto",
          }}
          className="w-full h-auto"
        />
        <p
          className="absolute left-1/2 top-[25%] -translate-x-1/2 text-white text-center w-full px-4"
          style={{
            fontFamily: "Roboto",
            fontSize: isMobile ? "11px" : "25px",
          }}
        >
          Территория комплекса находится в экологически чистом районе
          <br />
          Подмосковья. Занимает 10 гектар и обладает всей необходимой
          <br />
          инфраструктурой для комфортного пребывания.
        </p>
      </div>
    </section>
  );
};
