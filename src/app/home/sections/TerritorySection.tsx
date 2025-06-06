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
            width: isMobile? "92%":"90%",
            marginLeft: isMobile? "4%":"5%",
            marginRight: isMobile? "4%":"5%",
          }}
        
        />
        <p
          className="absolute left-1/2 top-[25%] -translate-x-1/2 text-white text-center w-full px-4 tracking-[2px]"
          style={{
            fontFamily: "Roboto",
            fontSize: isMobile ? "9px" : "25px",
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
