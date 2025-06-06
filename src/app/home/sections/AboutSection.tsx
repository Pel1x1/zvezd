"use client";

import Image from "next/image";
import rest from "@/app/img/main/rest.webp"
import rainb from "@/app/img/rooms/shalle.jpg"
import { useIsMobile } from "@/app/hooks/use-mobile";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/app/ui/card";

export const AboutSection = () => {
  const isMobile = useIsMobile();
  const textRef = useRef<HTMLDivElement>(null);
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
        <CardContent className="p-8 flex flex-col justify-between tracking-[2px]">
          <div>
            <p className="text-5xl mb-6 uppercase text-center" style={{ fontFamily: "Gothamlight" }}>
              Звёздный
            </p>

            <div className="space-y-4 text-[15px] md:text-[20px] font-light leading-8 text-black/80">
              <p className="font-medium mt-8">
                Добро пожаловать в <span style={{ fontFamily: "Roboto" }}>Загородный комплекс «Звёздный»!</span>
              </p>
              <p>
                Здесь вы найдете всё для идеального отдыха и проведения мероприятий.<br/>
                <span style={{ fontFamily: "Roboto" }}>Отель с уютными номерами для комфортного проживания.</span> Ресторан с европейской кухней и банкетные залы для проведения праздников и мероприятий любого формата.
                <span style={{ fontFamily: "Roboto" }}> Бильярд и караоке</span> для веселого времяпровождения. Баня/хаммам для полного расслабления и отдыха. Аренда беседок, костровая зона и детская площадка для активного отдыха на свежем воздухе.
                Платная рыбалка для любителей увлекательных прогулок на природе. Возможность организовать <span style={{ fontFamily: "Roboto" }}>конные прогулки и уникальные фотосессии с лошадьми.</span>
              </p>
              <p>
                Мы также предлагаем специальные предложения для наших гостей!
              </p>
              <p >
                Выберите комплекс <span style={{ fontFamily: "Roboto" }}>«Звёздный»</span> для незабываемого отдыха и организации вашего мероприятия!
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




    <div className="bg-transparent overflow-hidden mt-[50px]" style={{ fontFamily: "RobotoL" }}>
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
        <CardContent className="p-8 flex flex-col justify-between mt-[20%]" style={{marginTop: isMobile? "-10%" : ""}}>
          <div className="flex flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
            <p className="text-5xl uppercase mb-8 text-center" style={{ fontFamily: "Gothamlight" }}>
              Звёздный
            </p>
            <div className="text-[15px] md:text-[20px] mt-8 font-light leading-8 tracking-[2px] text-black/80">
              <p  >Расслабьтесь и насладитесь комфортом в <span style={{ fontFamily: "Roboto" }}>уютных номерах нашего отеля. </span>
               Побалуйте себя <span style={{ fontFamily: "Roboto" }}>изысканной европейской кухней</span> в нашем ресторане.
              <span style={{ fontFamily: "Roboto" }}> Проведите незабываемый праздник</span> в одном из наших элегантных банкетных залов, идеально подходящих <span style={{ fontFamily: "Roboto" }}>для мероприятий любого масштаба.</span></p>
            </div>
          </div>
          </CardContent>
        </div>
    </div>

    </section>
  );
};
