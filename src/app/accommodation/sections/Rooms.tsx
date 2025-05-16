"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { AccommodationCard } from "@/app/ui/AccommodationCard";
import blacklux from "@/app/img/BlackLux.jpg";
import whitelux from "@/app/img/WhiteLux.jpg";
import comfortplus from "@/app/img/ComfortPlus.jpg";
import comfort from "@/app/img/Comfort.jpg";

export const Rooms = () => {
  const isMobile = useIsMobile();

  const accommodations = [
    {
      title: "Черный люкс",
      description:
        "«Черный» Люкс в стиле «лофт» с прекрасным видом на хвойный лес.",
      imageUrl: blacklux,
      link:"BlackLux",
      index: 0
    },
    {
      title: "Белый люкс",
      description:
        "Роскошный «Белый» люкс предлагает исключительный комфорт для каждого гостя",
      imageUrl: whitelux,
      link:"WhiteLux",
    },
    {
      title: "Комфорт +",
      description: "Просторный однокомнатный номер",
      imageUrl: comfortplus,
      link:"ComfortPlus",
    },
    {
      title: "Комфорт",
      description: "Комфорт — уютный номер, выполненный в современном стиле.",
      imageUrl: comfort,
      link:"Comfort",
    },
  ];

  return (
    <section className=" bg-[#D2B6B1] px-0 py-[50px] max-sm:px-0 max-sm:py-[30px]">
        <div className="flex flex-wrap justify-around mt-[100px]">
        {accommodations.map((accommodation, index) => (
            <AccommodationCard
              key={index}
              index={index}
              title={accommodation.title}
              description={accommodation.description}
              imageUrl={accommodation.imageUrl}
              link={accommodation.link}
            />
        ))}
        </div>
    </section>

  );
};