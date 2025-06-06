"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { Button } from "@/lib/Button";
import { useRouter } from 'next/navigation';
export const RoomSection = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
      <section className="flex flex-col relative min-h-[540px] w-full items-center text-[rgba(210,182,177,1)] text-center leading-none justify-center mt-[15px] px-20 py-[151px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <Image
      src="https://cdn.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/25f59f603504b51733bdf3afd6e80eda9a056f5a?placeholderIfAbsent=true"
      alt="Room interior"
      className="absolute h-full w-full object-cover inset-0"
      fill
    />
      <div className="relative flex mb-[-27px] w-[591px] max-w-full flex-col items-center max-md:mb-2.5">
        <h2 className="text-[38px] font-medium uppercase">номерной фонд</h2>
        <p className="text-lg font-light tracking-[2px] self-stretch mt-[15px] max-md:max-w-full">
          Отель с уютными номерами для комфортного проживания
        </p>
        <Button
          variant="outline"
          onClick={() => router.push("/accommodation")}
          className="relative text-lg leading-none tracking-[2px] mt-4 w-fit
                    hover:text-white hover:border-white hover:cursor-pointer transition-colors duration-300"
        >
          Подробнее
        </Button>
        
      </div>
      </section>
  );
};
