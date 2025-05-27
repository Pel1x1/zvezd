"use client";

import Image from "next/image";
import rest from "@/app/img/main/Container (1).webp"
import rainb from "@/app/img/main/Frame 56 1.webp"
import { useIsMobile } from "@/app/hooks/use-mobile";
import React, { useRef, useEffect, useState } from "react";

export const AboutSection = () => {
  const isMobile = useIsMobile();
  const textRef = useRef<HTMLDivElement>(null); // Явная типизация
  const [imageHeight, setImageHeight] = useState(400);

  useEffect(() => {
    function updateHeight() {
      if (textRef.current) { // Проверка существования current
        setImageHeight(textRef.current.offsetHeight);
      }
    }
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  
  return (
  <section className="self-center w-[90%] ml-[5%] mr-[5%] max-w-full mt-11 max-md:max-w-[full] max-md:mt-10 ">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      <div className="w-[50%] max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col items-stretch text-black max-md:max-w-full max-md:mt-10">
          <h1 className="text-[45px] font-medium leading-none uppercase">
            Звёздный
          </h1> 

          <div className="text-base font-light leading-6 tracking-[0px] mt-10 max-md:max-w-full text-[15px]">
            Добро пожаловать в{" "}
            <span className="font-medium ">
              Загородный комплекс «Звёздный»!
            </span>
            <br />
            <br />
            Здесь вы найдете <span className="font-normal">всё</span> для
            идеального отдыха и проведения мероприятий.
            <br />
            <span className="font-medium">
              Отель с уютными номерами для комфортного проживания
            </span>
            . Ресторан с европейской кухней и банкетные залы для проведения
            праздников и мероприятий любого формата.{" "}
            <span className="font-medium">Бильярд и караоке</span> для
            веселого времяпровождения. Баня/хаммам для полного расслабления и
            отдыха. Аренда беседок, костровая зона и детская площадка для
            активного отдыха на свежем воздухе. Платная рыбалка для любителей
            увлекательных прогулок на природе. Возможность организовать{" "}
            <span className="font-medium">
              конные прогулки и уникальные фотосессии с лошадьми.
            </span>
            <br />
            <br />
            Мы также предлагаем специальные предложения для наших гостей!
            <br />
            <br />
            Выберите комплекс <span className="font-medium">
              «Звёздный»
            </span>{" "}
            для незабываемого отдыха и организации вашего мероприятия!
          </div>
        </div>
      </div>
      <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col relative min-h-[100%] overflow-hidden max-md:max-w-[50%]">
        <Image
        placeholder="blur"
        src={rest}
        alt="Interior view"
        className="absolute h-full w-full object-cover inset-0"
        fill
      />
        
        </div>
      </div>
    </div>

    <div className="gap-5 flex max-md:flex-col max-md:items-stretch mt-[50px]">
      <div className="w-[45%] max-md:w-full max-md:ml-0">
        <div className="flex flex-col relative min-h-[100%] overflow-hidden max-md:max-w-[50%] ">
        <Image
        placeholder="blur"
        src={rainb}
        alt="Interior view"
        className="absolute h-full w-full object-cover inset-0"
        fill
      />

        </div>
      </div>
      <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col self-stretch items-stretch text-black my-auto max-md:max-w-full max-md:mt-10">
          <h2 className="text-[45px] font-medium leading-none uppercase">
            Звёздный
          </h2>
          <div className="text-base font-light leading-6 tracking-[0px] mt-[74px] max-md:max-w-full max-md:mt-10 text-[15px]">
            Расслабьтесь и насладитесь комфортом в{" "}
            <span className="font-medium">уютных номерах нашего отеля.</span>{" "}
            Побалуйте себя{" "}
            <span className="font-medium">изысканной европейской кухней</span>{" "}
            в нашем ресторане и{" "}
            <span className="font-medium">
              проведите незабываемый праздник
            </span>{" "}
            в одном из наших элегантных банкетных залов, идеально подходящих{" "}
            <span className="font-medium">
              для мероприятий любого масштаба.
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
