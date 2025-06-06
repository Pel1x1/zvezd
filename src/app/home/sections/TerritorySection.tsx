"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import territory from "@/app/img/main/Territory.jpg";
import { Fullscreen } from "lucide-react";

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
        {isMobile ? (
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: isMobile ? "92%" : "90%", // совпадает с высотой img или контейнера
          backgroundColor: "rgba(0, 0, 0, 0.4)", // чёрный с прозрачностью 40%
          pointerEvents: "none", // чтобы оверлей не мешал кликам
          marginLeft: isMobile? "4%":"5%",
            marginRight: isMobile? "4%":"5%",
          zIndex: 1,
        }}
      />) : (<div></div>)}
        
        <p
          className="absolute left-1/2 top-[25%] -translate-x-1/2 text-white text-center w-full px-4 tracking-[2px]"
          style={{
            fontFamily: "Roboto",
            fontSize: isMobile ? "9px" : "25px",
            zIndex: 2,
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
