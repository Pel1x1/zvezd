import React from "react";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import Link from "next/link";

interface AccommodationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index?: number;

}
export const AccommodationCard: React.FC<AccommodationCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  index,
}) => {
  let customClass = "";
  let customLeft = "ml-5";
  const isMobile = useIsMobile();
  if (!isMobile) {
    customLeft = "left-[-22px]"
    if (index === 0) customClass = "mt-[0px]"; // Первая карточка выше
    if (index === 1) customClass = "mt-[75px]";  // Вторая карточка ниже
    if (index === 2) customClass = "mt-[75px]";
    if (index === 3) customClass = "mt-[0px]";
    if (!index) customClass = "";
  };
  

  return (
    <div className={`w-[45%] relative mb-[50px] max-md:w-full max-sm:w-full ${customClass}`} style={{fontFamily:"RobotoL"}}>
      <Image src={imageUrl} alt={title} className="w-full h-auto" placeholder="blur" />
      <div className={`absolute text-white  top-5 ${customLeft}`}>
        <h3 className="text-[35px] uppercase" style={{fontFamily:"ZenAntique"}}>{title}</h3>
        <p className="text-base tracking-[2px] mx-0 my-2.5">{description}</p>
        <button className="text-lg underline cursor-pointer">
          <Link className="footer-link transition-colors cursor-pointer" href={`/rooms/${encodeURIComponent(link)}`}>Подробнее</Link>
        </button>
      </div>
    </div>
  );
};