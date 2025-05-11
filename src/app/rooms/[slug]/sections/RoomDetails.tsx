"use client";

import { RoomDetailsProps } from '@/lib/types';

export default function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-white font-bold mb-8" style={{fontFamily:"ZenAntique"}}>{room.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-white mb-6" style={{fontFamily:"RobotoL"}}>{room.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-transparent border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Размер</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.size}</p>
              </div>
              <div className="bg-transparent border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Вместимость</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.capacity} чел.</p>
              </div>
              <div className="bg-transparent border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Тип кровати</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.bedType}</p>
              </div>
              <div className="bg-transparent border-[2px] p-[15px] rounded-lg">
                <p className="text-xl text-white" style={{fontFamily:"ZenAntique"}}>Вид</p>
                <p className="font-semibold text-white text-2xl" style={{fontFamily:"RobotoL"}}>{room.details.view}</p>
              </div>
            </div>
          </div>
          <div className="bg-transparent border-[2px] rounded-lg p-6">
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