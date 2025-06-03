"use client";


import { RoomFeatureProps } from '@/lib/types';

export default function RoomFeature({ room }: RoomFeatureProps) {
  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4 ">
        <h2 className="text-5xl font-bold mb-8 text-white" style={{fontFamily:"ZenAntique"}}>Особенности номера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[15px]">
          {room.features.map((feature, index) => (
            <div key={index} className=" border-[2px] p-4 rounded-lg shadow-sm items-center flex flex-col justify-center bg-white/10">
                <p className="text-xl text-white mb-0 mt-0 font-semibold " style={{fontFamily:"RobotoL"}}>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 