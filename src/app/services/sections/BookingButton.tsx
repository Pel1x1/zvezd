import { useState } from "react";
import {Phone } from "lucide-react";
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@/app/spa/sections/button";
import React, { MouseEvent } from "react";

type ServiceType = {
  title: string;
  // добавьте другие свойства service, если нужны
};

type BookingButtonProps = {
  service: ServiceType;
  isMobile: boolean;
};


function BookingButton({ service, isMobile }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneNumber = "+7 (985) 016-80-08";
  const phoneHref = "tel:+79850168008";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile && service.title !== "Конные прогулки") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <a
        href={service.title === "Конные прогулки" ? "https://ksk-zvezdniy.ru/" : phoneHref}
        className="footer-link"
        style={{ display: "inline-block" }}
        target={service.title === "Конные прогулки" ? "_blank" : undefined}
        rel={service.title === "Конные прогулки" ? "noopener noreferrer" : undefined}
        onClick={handleClick}
      >
        <Button
          size="lg"
          className="text-lg px-12 py-4 bg-white/5 backdrop-blur-md border-white/50 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto mb-[20px]"
          style={{
            borderRadius: "10px",
            fontFamily: "RobotoL",
            fontSize: isMobile ? "18px" : "20px",
          }}
        >
          Забронировать
        </Button>
      </a>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#00000075] bg-opacity-70 z-50 ">
          <div className="bg-[rgba(210,182,177,1)] rounded-lg p-6 max-w-xs w-full text-center relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 w-10 h-10"
              aria-label="Close modal"
            >
              <p className="text-3xl">x</p>
            </button>
            <h2 className="mb-4 font-semibold text-xl">Контакты</h2>
            <a
              href={phoneHref}
              className="flex items-center text-xl justify-center gap-2 mb-4 text-blue-600 hover:underline footer-link"
            >
              <Phone className="w-7 h-7" /> {phoneNumber}
            </a>
            <div className="flex justify-center gap-6 text-gray-700">
              <a
                href="https://vk.com/zvevdniy_complex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VK"
                className="hover:text-blue-500"
              >
                <FaVk className="w-15 h-15" />
              </a>
              <a
                href="https://t.me/zvezdniycomplex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="hover:text-blue-500"
              >
                <FaTelegram className="w-13 h-13 mt-1 " />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingButton;
