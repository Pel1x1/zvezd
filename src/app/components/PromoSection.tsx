"use client";

import React from "react";
import Script from "next/script";
import { Button } from "@/app/ui/Button";
import { useIsMobile } from "@/app/hooks/use-mobile";

// Тип данных для карточки
type CardData = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const cards: CardData[] = [
  { title: "Свадебный тариф", image: "../img/weddings.webp", description: "Спецпредложение скидка 10% на бронирование номеров молодоженам и на годовщину свадьбы.", link: "" },
  { title: "Скидки для именинников", image: "../img/events.jpg", description: "Скидка 10% на проживание на весь заезд.", link: "" },
  { title: "За поводом", image: "/img/zapovod.jpg", description: "Уютный интерьер с панорамными окнами и камином, профессиональный сервис и авторские блюда.", link: "" },
];

export const PromoSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="bg-[rgba(210,182,177,1)]">
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {cards.map((card, idx) => (
            <div
              className={`carousel-item${idx === 0 ? " active" : ""}`}
              key={card.title}
              style={{fontFamily: "TrajanPro3", height: isMobile?"":"60vh"}}
              
            >
              <img src={card.image} className="d-block w-100" style={{height: isMobile?"23vh":""}} alt={card.title} />
              <div className="carousel-caption d-md-block top-0 mt-[5%] ">
                <p style={{fontSize: isMobile ? "15px" : "45px"}}>{card.title}</p>
                
                {card.description && <p style={{fontSize: isMobile ? "10px" : "25px"}}>{card.description}</p>}

                

              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
/*<Button
                  variant="outline"
                  className="self-center mt-[30px] transform  text-white hover:border-white hover:cursor-pointer transition-colors duration-300"
                  style={{borderWidth: isMobile?"2px":"4px" ,fontSize: isMobile? "10px":"20px",paddingLeft: isMobile?"10px":"60px", paddingRight: isMobile?"10px":"60px", paddingTop: isMobile?"10px":"30px", paddingBottom: isMobile?"10px":"30px"}}
                  onClick={() => {
                    if (card.link) window.location.href = card.link;
                  }}
                >
                  Подробнее
                </Button> */

