"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";

interface ServicesCardsProps {
  title: string;
  image: string;
  description?: string; // Описание для модального окна
  link?: string;
}

export const ServiceCard: React.FC<ServicesCardsProps> = ({
  title,
  image,
  description,
  link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useIsMobile();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
      <div className="flex grow flex-col items-stretch max-md:mt-10">
        <div className="relative aspect-[1.1] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-stretch mt-5">
          <h3 className="text-black text-2xl font-medium leading-7">
            {title}
          </h3>
          <p className="text-black text-base font-light leading-6 tracking-[0px] mt-4">
            {description}
          </p>
        </div>
      </div>
      <div className="relative flex mb-[-29px] w-[1000px] max-w-full flex-col items-stretch max-md:mb-2.5">
        <Button
            variant="outline"
            className="self-center mt-[30px] transform transition-transform duration-300 text-[15px] text-white hover:border-white hover:cursor-pointer transition-colors duration-300"
            onClick={() => {
              if (link) window.location.href = link;
            }}
          >
            Подробнее
        </Button> 
      </div>
      <button
        className="carousel-control-prev z-10 top-1/2 -translate-y-1/2"
        type="button"
        data-bs-target="#cafeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next z-10 top-1/2 -translate-y-1/2"
        type="button"
        data-bs-target="#cafeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
