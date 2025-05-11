"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { AccommodationCard } from "@/app/ui/AccommodationCard";

export const Rooms = () => {
  const isMobile = useIsMobile();

  const accommodations = [
    {
      title: "Черный люкс",
      description:
        "«Черный» Люкс в стиле «лофт» с прекрасным видом на хвойный лес.",
      imageUrl: "/img/BlackLux.jpg",
      link:"BlackLux",
      index: 0
    },
    {
      title: "Белый люкс",
      description:
        "Роскошный «Белый» люкс предлагает исключительный комфорт для каждого гостя",
      imageUrl: "/img/WhiteLux.jpg",
      link:"WhiteLux",
    },
    {
      title: "Комфорт +",
      description: "Просторный однокомнатный номер",
      imageUrl: "/img/ComfortPlus.jpg",
      link:"ComfortPlus",
    },
    {
      title: "Комфорт",
      description: "Комфорт — уютный номер, выполненный в современном стиле.",
      imageUrl: "/img/Comfort.jpg",
      link:"Comfort",
    },
  ];

  return (
    <section className=" bg-[#D2B6B1] px-0 py-[50px] max-sm:px-0 max-sm:py-[30px]">
        <div className="flex flex-wrap justify-around mt-[100px]">
        {accommodations.map((accommodation, index) => (
            <AccommodationCard key={index} {...accommodation} index={index} />
        ))}
        </div>
    </section>

  );
};