"use client";

import React, { useState } from "react";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export const Header = () => {
  const router = useRouter();

  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "О НАС", href: "/about" },
    { label: "ПРОЖИВАНИЕ", href: "/accommodation" },
    { label: "БРОНИРОВАНИЕ", href: "/booking" },
    { label: "SPA-КОМПЛЕКС", href: "/spa" },
    { label: "УСЛУГИ", href: "/services" },
    { label: "РЕСТОРАН", href: "/restaurant" },
  ];
  

  return (
    <header
      className="fixed top-0 z-10 w-full bg-[rgba(145,3,1,1)] backdrop-blur-sm py-3 px-4 sm:py-6 sm:px-8 shadow-md"
    >
      <div className="max-w-[100%] mx-auto flex items-center justify-between text-[#D2B6B1]">
        {/* Логотип */}
        <span
          onClick={() => router.push('/')}
          className="text-[15px] md:text-[18px] shrink-0 cursor-pointer text-white hover:text-[#D2B6B1]  transition-colors l-0"
          style={{ fontFamily: "TDMars", marginLeft: isMobile ? "3%":"10%" }}
        >
          ЗВЁЗДНЫЙ
        </span>

        {/* Десктопная навигация */}
        {!isMobile && (
          <nav
            className="flex gap-5 sm:gap-6 lg:gap-12 rg:gap-12 text-[14px] mr-[200px]"
            style={{ fontFamily: "Gothamlight" }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className=" footer-link hover:text-white transition-colors cursor-pointer font-body text-[7px] md:text-[13px]"
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
