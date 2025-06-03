"use client";

import { RoomDetailsProps } from '@/lib/types';
import { useIsMobile } from "@/app/hooks/use-mobile";
import { Route } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/app/spa/sections/button";

export default function RoomDetails({ room }: RoomDetailsProps) {
      const isMobile = useIsMobile();
        const router = useRouter();
  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4">
        {(room.id === '5' || room.id === '6') && (
        <div className="mb-8 flex gap-4 justify-center">
          <Button
            onClick={() => router.push("/rooms/shalle1")}
            disabled = {room.id === '5'}
            size="lg"
            variant={room.id === "5" ? "default" : "transparent"}
            className="px-10 py-3 text-white border-white bg-white/20 transition-all "
            style={{ fontFamily: "Roboto", borderRadius: "12px", }}
          >
            1 комнатные
          </Button>
          <Button
            onClick={() => router.push("/rooms/shalle2")}
            disabled = {room.id === '6'}
            size="lg"
            variant={room.id === "6" ? "default" : "transparent"}
            className="px-10 py-3 text-white border-white bg-white/20 transition-all "
            style={{ fontFamily: "Roboto", borderRadius: "12px", }}
          >
            2 комнатные
          </Button>
        </div>
        )}
        <h2 className=" text-white font-bold mb-8" style={{fontFamily:"ZenAntique", fontSize: isMobile? "40px" : "40px"}}>{room.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white mb-[15px]" style={{fontFamily:"RobotoL", fontSize: isMobile? "20px" : "25px"}}>{room.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-[2px] p-[15px] rounded-lg bg-white/10">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Размер</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.size}</p>
              </div>
              <div className="bg-white/10 border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Вместимость</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.capacity} чел.</p>
              </div>
              <div className="bg-white/10 border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Тип кровати</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.bedType}</p>
              </div>
              <div className="bg-white/10 border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Вид</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.view}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 border-[2px] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white" style={{fontFamily:"ZenAntique"}}>Удобства</h3>
            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-white" style={{fontFamily:"RobotoL"}}>
                  <span className="mr-2">•</span>
                  <span className='text-xl font-semibold'>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 