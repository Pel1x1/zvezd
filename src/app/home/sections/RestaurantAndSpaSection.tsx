"use client";

import Image from "next/image";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { Button } from "@/lib/Button";
import { useRouter } from 'next/navigation';
export const RestaurantAndSpaSection = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <section className="bg-[rgba(210,182,177,1)] w-full px-[70px] py-[71px] max-md:max-w-full max-md:px-5 mt-[50px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[586px] text-[rgba(210,182,177,1)] font-light pl-6 pr-12 pt-44 pb-[277px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/9036c1d4f274b79ae606c61008debe2c01211df6?placeholderIfAbsent=true"
              alt="Restaurant interior"
              className="absolute h-full w-full object-cover inset-0"
              fill
            />
            <h2 className="relative text-[37px] font-medium leading-none uppercase">
              Ресторан
            </h2>
            <p className="relative text-[20px] leading-5 tracking-[2px] self-stretch mt-[31px] max-md:max-w-full">
              Европейские блюда от наших талантливых поваров - все это сделает
              ваш визит поистине особенным.
            </p>
            <Button
              variant="outline"
              className="relative text-lg leading-none tracking-[2px] underline mt-4 w-fit
                        hover:text-white hover:border-white hover:underline hover:cursor-pointer transition-colors duration-300"
                        onClick={() => router.push('/restaurant')}
            >
              Подробнее
            </Button>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[580px] text-[rgba(210,182,177,1)] font-light leading-none mt-[164px] pl-[17px] pr-[52px] pt-[113px] pb-[306px] max-md:max-w-full max-md:mt-10 max-md:pr-5 max-md:py-[100px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/e80f950f6d514655b299aa20146ab877/3ee540ed1fd96755dcfb5200fbdfc298dd6674ca?placeholderIfAbsent=true"
              alt="SPA complex"
              className="absolute h-full w-full object-cover inset-0"
              fill
            />
            <h2 className="relative text-[38px] font-medium uppercase">СПА</h2>
            <p className="relative text-[20px] leading-5 tracking-[2px] self-stretch mt-5 max-md:max-w-full">
              Для расслабляющего отдыха и оздоровления мы предлагаем финскую
              сауну, турецкий хаммам. Также в загородном комплексе ``Звездный``
              доступны услуги профессионального массажа!
              <br />
            </p>
            <Button
              variant="outline"
              className="relative text-lg leading-none tracking-[2px] underline mt-4 w-fit
                        hover:text-white hover:border-white hover:underline hover:cursor-pointer transition-colors duration-300"
                         onClick={() => router.push('/spa')}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>

  );
};
