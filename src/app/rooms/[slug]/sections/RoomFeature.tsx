"use client";


import { RoomFeatureProps } from '@/lib/types';

export default function RoomFeature({ room }: RoomFeatureProps) {
  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white" style={{fontFamily:"ZenAntique"}}>Особенности номера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {room.features.map((feature, index) => (
            <div key={index} className="bg-transparent border-[2px] p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <p className="text-2xl text-white mt-1 font-semibold" style={{fontFamily:"RobotoL"}}>{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 