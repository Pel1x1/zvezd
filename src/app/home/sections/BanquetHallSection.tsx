"use client";

import Image from "next/image";
import { Button } from "@/app/ui/Button";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const BanquetHallSection = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{marginLeft: isMobile?"":"11%"}} className="w-full max-w-[1249px]  mt-[100px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {/* Текст слева - показываем только на десктопе */}
        <div className="w-6/12 max-md:hidden">
          <div className="flex flex-col self-stretch text-black leading-none my-auto">
            <h2 className="font-medium uppercase" style={{ fontSize: isMobile ? "20px" : "35px" }}>
              Банкетные залы
            </h2>
            <p
              style={{ fontSize: isMobile ? "15px" : "26px" }}
              className="font-light leading-[39px] tracking-[2px] self-stretch mt-[49px]"
            >
              Мы можем провести мероприятие любого формата, с любым количеством
              гостей и выбором блюд, и при этом гарантируем высокое качество
              кухни, сервиса и обслуживания.
            </p>
            <Button variant="primary" className="mt-[46px] border-black border-[1px] hover:underline">
              Подробнее
            </Button>
          </div>
        </div>

        {/* Фото с текстом поверх на мобиле */}
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 relative">
          <div className="relative aspect-[0.85] w-full">
            <Image
              placeholder="blur"
              src="/img/bg2.png"
              alt="Banquet hall"
              fill
              className="object-cover"
            />
          </div>

          {/* Текст поверх фото - показываем только на мобиле */}
          <div className="absolute top-[25%] left-0 w-full px-4 max-md:block hidden text-white text-center">
            <h2 className="font-medium uppercase" style={{ fontSize: "20px" }}>
              Банкетные залы
            </h2>
            <p className="font-light leading-[1.5] tracking-[2px] mt-4 text-[15px] max-w-full">
              Мы можем провести мероприятие любого формата, с любым количеством
              гостей и выбором блюд, и при этом гарантируем высокое качество
              кухни, сервиса и обслуживания.
            </p>
            <Button variant="primary" className="mt-6 border-white border-[2px] hover:underline text-white text-[15px]">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
