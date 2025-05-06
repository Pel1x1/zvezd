"use client";

import React from 'react';

export const About = () =>{

    return(
        <section className="bg-[rgba(210,182,177,1)] w-full pt-[138px] pb-[376px] px-[55px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
    <div className="mb-[-75px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch text-white font-normal max-md:max-w-full max-md:mt-10">
                    <p className="text-[64px] leading-none max-md:max-w-full max-md:text-[40px]">
                        <span style={{ fontFamily: "ZenAntique" }}>Ресторан за поводом</span>
                    </p>
                    <p className="text-[25px] leading-[40px] tracking-[2px] mt-[200px] max-md:max-w-full max-md:mt-[200px]"
                    style={{fontFamily:"RobotoL"}}>
                        Наше меню разработано с учетом самых разнообразных гастрономических предпочтений. 
                        Будь то корпоративное торжество, свадебное мероприятие, встреча с друзьями или романтический 
                        вечер - мы создадим для вас незабываемую атмосферу. Уютный интерьер с панорамными окнами и 
                        камином, профессиональный сервис и авторские блюда от наших талантливых поваров - все это 
                        сделает ваш визит поистине особенным. В меню ресторана собраны любимые блюда разных кухонь 
                        мира и специальные позиции для маленьких гостей ресторана.
                        <br />
                    </p>
                </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <img
                src="/img/RestPhoto.png"
                alt="Restaurant interior"
                className="aspect-[0.9] object-contain w-full grow max-md:max-w-full max-md:mt-10 h-full"
                style={{transform: "scale(0.9)"}}
                />
            </div>
        </div>
    </div>
    </section>

    );
};