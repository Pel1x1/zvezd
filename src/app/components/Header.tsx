"use client";

import React, { useState } from "react";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { Icon, Menu, X } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";


export const Header = () => {
  const router = useRouter();

  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "ПРОЖИВАНИЕ", href: "/accommodation" },
    { label: "БАНКЕТНЫЕ ЗАЛЫ", href: "/banquethall" },
    { label: "SPA-КОМПЛЕКС", href: "/spa" },
    { label: "МЕРОПРИЯТИЯ", href: "/events" },
    { label: "СВАДЬБЫ", href: "/weddings" },
    { label: "УСЛУГИ", href: "/services" },
    { label: "РЕСТОРАН", href: "/restaurant" },
  ];
  

  return (
    <header
      className="fixed top-0 z-10 w-full bg-[rgba(145,3,1,1)] backdrop-blur-sm py-3 px-4 sm:py-6 sm:px-8 shadow-md"
    >
      <div className="max-w-[100%] mx-auto flex items-center text-center justify-between text-[#D2B6B1] ">
        {/*<Image src={"/img/logo.png"} width={40} height={40} className="rounded-4xl l-0" alt="Звёздный"></Image>*/}
        <span
          onClick={() => router.push('/')}
          className="text-[15px] md:text-[20px] shrink-1 tracking-[2px] cursor-pointer text-white hover:text-[#D2B6B1] transition-colors l-0"
          style={{ fontFamily: "MontserratR"}}
        >
          ЗВЁЗДНЫЙ
        </span>

        {/* Десктопная навигация */}
        {!isMobile && (
          <nav
            className="flex gap-5 sm:gap-6 lg:gap-12 rg:gap-12 "
            style={{ fontFamily: "Gothamlight", }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className=" footer-link hover:text-white transition-colors cursor-pointer font-body text-[14px]"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}

        {/* Мобильное меню - иконка */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            className="text-[#D2B6B1] hover:text-white transition-colors focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        )}
      </div>

      {/* Мобильное меню - выезжающее */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-20 flex">
        {/* Полупрозрачный оверлей слева */}
        <div
          className="flex-1 bg-transparent"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      
        {/* Само меню справа */}
        <div className="bg-[rgba(145,3,1,1)] mt-[-15px]">
          <nav
            className="bg-[rgba(145,3,1,1)] p-6 flex flex-col gap-[15px]"
            style={{ fontFamily: "Gothamlight" }}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#D2B6B1] hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Пункты меню */}
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors footer-link cursor-pointer font-body text-[15px] text-[#D2B6B1] text-left"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      )}
    </header>
  );
};
