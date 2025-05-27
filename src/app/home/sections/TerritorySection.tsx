"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import territory from "@/app/img/main/Territory.jpg";

export const TerritorySection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="self-center w-full max-w-full mt-[100px] mb-[25px] max-md:mt-[100px] bg-[rgba(210,182,177,1)]">
      <div className="relative inline-block bg-[rgba(210,182,177,1)] ">
        <Image
          src={territory}
          alt="Территория комплекса"
          priority
          style={{
            display: "block",
          }}
          className="w-[80%] ml-[10%] mr-[10%]"
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
