"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";

export const Shalle = () => {
  const isMobile = useIsMobile();

  return (
    <section>
      <h2 className="text-7xl uppercase text-center px-0 py-[100px] max-sm:text-4xl max-sm:px-0 max-sm:py-[50px] text-white">
        Место под шалле
      </h2>
    </section>
  );
};
