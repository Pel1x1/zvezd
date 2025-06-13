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

    <div className="bg-transparent text-black overflow-hidden ">
      <div className="grid gap-0" style={{ display: "grid", gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
        {/* Левая часть - текст */}
        <CardContent className="p-7 flex flex-col justify-center tracking-[2px]">
          <div>
            <p className="text-5xl mb-6 uppercase text-center">
              Звёздный
            </p>

            <div className="space-y-2 text-[15px] md:text-[20px] font-light leading-8 text-black/80"  style={{ fontFamily: "RobotoL" }}>
              <p className="font-medium mt-8">
                Добро пожаловать в <span style={{ fontFamily: "Roboto" }}>Загородный комплекс «Звёздный»!</span>
              </p>
              <p>
                <span style={{ fontFamily: "Roboto" }}>«Звёздный»</span> – место, где отдых становится событием
Погрузитесь в атмосферу <span style={{ fontFamily: "Roboto" }}>уюта</span> и <span style={{ fontFamily: "Roboto" }}>комфорта </span> 
в загородном комплексе <span style={{ fontFamily: "Roboto" }}>«Звёздный»</span> – идеальном месте для отдыха, праздников и встреч с близкими. Наш отель предлагает стильные номера, где каждая деталь продумана для вашего расслабления. В ресторане вас ждут блюда европейской кухни, приготовленные с особым вниманием к вкусу и подаче.  
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




    <div className="bg-transparent overflow-hidden mt-[50px]" >
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
        <CardContent className="p-7 flex flex-col justify-center" style={{marginTop: isMobile? "-10%" : ""}}>
          <div className="flex flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
            <p className="text-5xl uppercase mb-8 text-center">
              Звёздный
            </p>
            <div className="text-[15px] md:text-[23px] mt-8 font-light leading-8 tracking-[2px] text-black/80" style={{ fontFamily: "RobotoL" }}>
              <p  >
<span style={{ fontFamily: "Roboto" }}>Для мероприятий</span> – просторные банкетные залы, оборудованные для свадеб, корпоративов и торжеств. 
После праздника можно продолжить вечер за бильярдом или караоке, а для полного релакса – баня и хаммам. На свежем воздухе вас ждут уютные беседки, костровая зона и детская площадка. Любители активного отдыха оценят рыбалку и конные прогулки с возможностью фотосессий на фоне живописной природы.  
<br/><span style={{ fontFamily: "Roboto" }}>«Звёздный»</span> – это не просто отдых, это впечатления, которые останутся с вами надолго!
              </p>
            </div>
          </div>
          </CardContent>
        </div>
    </div>

    </section>
  );
};
