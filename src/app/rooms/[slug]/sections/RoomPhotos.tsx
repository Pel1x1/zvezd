"use client";

import { useState } from "react";
import { RoomPhotosProps } from "@/lib/types";
import Image from "next/image";

export default function RoomPhotos({ room }: RoomPhotosProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);

  const openModal = (photo: string) => {
    setCurrentPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentPhoto(null);
  };

  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white" style={{fontFamily:"ZenAntique"}}>Фотографии номера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {room.photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <Image
                src={photo}
                alt={`${room.name} - фото ${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} // можно при необходимости
              />
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {isOpen && currentPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-[90%] h-[90%]">
            <Image
              src={currentPhoto}
              alt="Фото в полном размере"
              fill
              className="object-contain rounded"
              priority
            />
            <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-5xl font-bold bg-black bg-opacity-50 rounded-full w-1 h-1 flex items-center justify-center"
            aria-label="Закрыть"
          >
            &times;
          </button>
          </div>
        </div>
      )}
    </section>
  );
}
