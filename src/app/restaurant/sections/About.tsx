"use client";

import React from 'react';
import Image from "next/image";
import abresimage from "@/app/img/rest/RestPhoto.webp";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const About = () =>{
  const isMobile = useIsMobile();

    return(
        <section className="bg-[rgba(210,182,177,1)] w-full pt-[138px]  px-[55px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
    <div className="mb-[-75px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch text-black font-normal max-md:max-w-full max-md:mt-10" style={{marginTop:isMobile?"-50px":"15%"}}>
                    <p className="text-[60px] leading-none max-md:max-w-full max-md:text-[30px]">
                        <span className='text-center' style={{ fontFamily: "ZenAntique" }}>Ресторан «За Поводом»</span>
                    </p>
                    <p className="tracking-[2px] mt-[200px] max-md:max-w-full max-md:mt-[200px] text-[15px] md:text-[29px]"
                    style={{fontFamily:"RobotoL"}}>
                        Наше меню разработано с учетом самых разнообразных гастрономических предпочтений.<br/>

                        Будь то корпоративное торжество, свадебное мероприятие, встреча с друзьями или романтический 
                        вечер - мы создадим для вас незабываемую атмосферу.<br/>

                        Уютный интерьер с панорамными окнами и 
                        камином, профессиональный сервис и авторские блюда от наших талантливых поваров - все это 
                        сделает ваш визит поистине особенным.<br/>

                        В меню ресторана собраны любимые блюда разных кухонь 
                        мира и специальные позиции для маленьких гостей ресторана.
                        <br />
                    </p>
                </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <Image
                src={abresimage}
                alt="Restaurant interior"
                className="aspect-[0.9] object-contain w-full grow max-md:max-w-full max-md:mt-10 h-full"
                style={{transform: "scale(1)", marginTop:isMobile?"-50px":""}}
                />
            </div>
        </div>
    </div>
    </section>

    );
};