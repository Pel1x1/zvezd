"use client";

import React from 'react';
import {Hero} from "./sections/Hero"
import { AboutSection } from "./sections/AboutSection";
import { RestaurantAndSpaSection } from "./sections/RestaurantAndSpaSection";
import { RoomSection } from "./sections/RoomSection";
import { BanquetHallSection } from "./sections/BanquetHallSection";
import { PromoSection } from "@/app/components/PromoSection";
import { TerritorySection } from "./sections/TerritorySection";
import  InteractiveMap  from "./sections/InteractiveMap";

export default function HomePage() {
  return (
    <main className='bg-[rgba(210,182,177,1)]'>
      <div className="bg-[rgba(68,68,68,1)] overflow-hidden rounded-sm border-[rgba(255,255,255,0.1)] border-solid ">
      <div className="bg-[rgba(210,182,177,1)] flex w-full flex-col items-stretch max-md:max-w-full ">
        <main className=''>
          <Hero />
          <AboutSection />
          {/*<InteractiveMap/>*/}
          <TerritorySection/>
          <RestaurantAndSpaSection />
          <RoomSection />
          <BanquetHallSection />
          <div className='mb-[100px] mt-[100px] text-transparent' style={{height:"50px"}}></div>
        </main>
      </div>
    </div>

    </main>
  );
} 