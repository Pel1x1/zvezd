"use client";

import React from 'react';
import { FoodCard } from '@/app/ui/FoodCard';

export const Menu = () =>{

    
    const Foods = [
    {
        title: "Меню",
        description:
        "",
        imageUrl: "/img/RestMenu.png",
        link:"",
    },
    {
        title: "Завтраки",
        description:
        "",
        imageUrl: "/img/RestBreakfast.png",
        link:"Белый люкс",
    },
    {
        title: "Банкетное меню",
        description: "",
        imageUrl: "/img/RestBanket.png",
        link:"Комфорт +",
    },
    {
        title: "Детское меню",
        description: "",
        imageUrl: "/img/RestKids.png",
        link:"Комфорт",
    },
    ];
    
    return (
    <section className=" bg-[#D2B6B1] px-0 py-[50px] max-sm:px-0 max-sm:py-[30px]">
        <div className="flex flex-wrap justify-around mt-[100px]">
        {Foods.map((food, index) => (
            <FoodCard key={index} {...food} index={index} link={food.link} />
        ))}
        </div>
    </section>

    );
};