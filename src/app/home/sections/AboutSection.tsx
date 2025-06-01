"use client";

import Image from "next/image";
import rest from "@/app/img/main/Container (1).webp"
import rainb from "@/app/img/main/Frame 56 1.webp"
import { useIsMobile } from "@/app/hooks/use-mobile";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/app/ui/card";

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

    <div className="bg-transparent text-black overflow-hidden " style={{ fontFamily: "RobotoL" }}>
      <div className="grid gap-0" style={{ display: "grid", gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
        {/* Левая часть - текст */}
        <CardContent className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-5xl mb-6 uppercase text-center" style={{ fontFamily: "Gothamlight" }}>
              Звёздный
            </p>

            <div className="space-y-4 text-[20px] font-light leading-6 tracking-normal text-black/80">
              <p className="font-medium text-center">
                Добро пожаловать в <span className="font-medium">Загородный комплекс «Звёздный»!</span>
              </p>
              <p>
                Здесь вы найдете всё для идеального отдыха и проведения мероприятий.
              </p>
              <p>
                Отель с уютными номерами для комфортного проживания. Ресторан с европейской кухней и банкетные залы для проведения праздников и мероприятий любого формата.
              </p>
              <p>
                Бильярд и караоке для веселого времяпровождения. Баня/хаммам для полного расслабления и отдыха. Аренда беседок, костровая зона и детская площадка для активного отдыха на свежем воздухе.
              </p>
              <p>
                Платная рыбалка для любителей увлекательных прогулок на природе. Возможность организовать конные прогулки и уникальные фотосессии с лошадьми.
              </p>
              <p>
                Мы также предлагаем специальные предложения для наших гостей!
              </p>
              <p className="font-medium text-center">
                Выберите комплекс «Звёздный» для незабываемого отдыха и организации вашего мероприятия!
              </p>
            </div>
          </div>
        </CardContent>

        {/* Правая часть - изображение */}
        <div className="grid gap-2 p-4 grid-cols-1" style={{marginTop: isMobile? "-10%" : ""}}>
          <div className="aspect-square relative overflow-hidden group">
          <Image
            src={rest} // путь к твоему изображению
            alt="Интерьер комплекса Звёздный"
            className="w-full h-full object-cover transition-transform duration-500"
            fill
          />
          </div>
        </div>
      </div>
    </div>




    <div className="bg-transparent overflow-hidden  mt-[50px]" style={{ fontFamily: "RobotoL" }}>
      <div className="grid gap-0" style={{ display: "grid", gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
        {/* Левая часть - изображение */}
        <div className="grid gap-2 p-4 grid-cols-1">
          <div className="aspect-square relative overflow-hidden group">
          <Image
            placeholder="blur"
            src={rainb}
            alt="Interior view"
            className="w-full h-full object-cover transition-transform duration-500"
            fill
          />
          </div>
        </div>

        {/* Правая часть - текст */}
        <CardContent className="p-8 flex flex-col justify-between" style={{marginTop: isMobile? "-10%" : ""}}>
          <div className="flex flex-col  justify-center text-black max-md:mt-10 max-md:max-w-full">
            <p className="text-5xl uppercase mb-8 text-center" style={{ fontFamily: "Gothamlight" }}>
              Звёздный
            </p>
            <div className="text-[20px] font-light leading-6 tracking-normal text-black/80">
              <p  >Расслабьтесь и насладитесь комфортом в уютных номерах нашего отеля.</p>
              <p>Побалуйте себя изысканной европейской кухней в нашем ресторане. </p>
              <p>Проведите незабываемый праздник в одном из наших элегантных банкетных залов, идеально подходящих для мероприятий любого масштаба.</p>
            </div>
          </div>
          </CardContent>
        </div>
    </div>

    </section>
  );
};
