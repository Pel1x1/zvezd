"use client";

import React from 'react';
import { FoodCard } from '@/app/ui/FoodCard';

import RestMenu from "@/app/img/rest/RestMenu.webp";
import RestBreakfast from "@/app/img/rest/RestBreakfast.webp";
import RestBanket from "@/app/img/rest/RestBanket.webp";
import RestKids from "@/app/img/rest/RestKids.webp";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const Menu = () =>{
  const isMobile = useIsMobile();

    
    const Foods = [
    {
        title: "Меню",
        description:
        "",
        imageUrl: RestMenu,
        link:"",
    },
    {
        title: "Завтраки",
        description:
        "",
        imageUrl: RestBreakfast,
        link:"Белый люкс",
    },
    {
        title: "Банкетное меню",
        description: "",
        imageUrl: RestBanket,
        link:"Комфорт +",
    },
    {
        title: "Детское меню",
        description: "",
        imageUrl: RestKids,
        link:"Комфорт",
    },
    ];
    
    return (
    <section className=" bg-[#D2B6B1] px-0 py-[50px] max-sm:px-0 max-sm:py-[30px]" style={{marginTop:isMobile?"-50px":"50px"}}>
        <div className="flex flex-wrap justify-around mt-[100px]">
        {Foods.map((food, index) => (
            <FoodCard key={index}
              index={index}
              title={food.title}
              description={food.description}
              imageUrl={food.imageUrl}
              link={food.link}/>
        ))}
        </div>
    </section>

    );
};