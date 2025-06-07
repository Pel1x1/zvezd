"use client";

import { useState, useEffect } from "react";
import { RoomPhotosProps } from "@/lib/types";
import Image from "next/image";

export default function RoomPhotos({ room }: RoomPhotosProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем мобильное устройство по ширине окна
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Количество фото для отображения в зависимости от устройства
  const photosToShow = isMobile ? 1 : 3;
  const maxStartIndex = room.photos.length - photosToShow;

  const openModal = (photo: string) => {
    setCurrentPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentPhoto(null);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev * 0 + maxStartIndex));
  };

  const goNext = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : prev * 0 + 1));
  };

  const slideWidthPercent = 50 / photosToShow;
  const visiblePhotos = room.photos.slice(startIndex, startIndex + photosToShow);

  return (
    <section className="py-12 bg-[#D2B6B1]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold mb-8 text-white " style={{ fontFamily: "ZenAntique" }}>
          Фотографии номера
        </h2>

        {isMobile ? (
          <div
            className="grid grid-cols-[auto_1fr_auto] items-center"
            style={{
              gap: "1rem", // gap-4
              marginTop: "0.75rem", // mt-3
              width: "100%",
              margin: "0 auto"
            }}
          >
            <button
              onClick={goPrev}
              aria-label="Предыдущие фото"
              style={{
                color: "white", // text-white
                fontSize: "3rem", // text-5xl
                fontWeight: "bold", // font-bold
                opacity: 1, // disabled:opacity-40 handled by React disabled prop
                userSelect: "none" // select-none
              }}
            >
              &lt;
            </button>

            <div
              className="relative w-full"
              style={{
                borderRadius: "0.5rem", // rounded-lg
                overflow: "hidden", // overflow-hidden
                cursor: "pointer", // cursor-pointer
                transition: "transform 0.5s ease-in-out", // transition-all duration-500 ease-in-out
                aspectRatio: "4 / 3"
              }}
              onClick={() => openModal(visiblePhotos[0])}
            >
              <Image
                src={visiblePhotos[0]}
                alt={`${room.name} - фото ${startIndex}`}
                fill
                className="object-cover"
                priority={startIndex === 0}
              />
            </div>

            <button
              onClick={goNext}
              aria-label="Следующие фото"
              style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                opacity: 1,
                userSelect: "none"
              }}
            >
              &gt;
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center"
            style={{
              gap: "1rem",
              marginTop: "1rem", // mt-4
              width: "100%",
              margin: "0 auto",
              transform: "scale(1.05)"
            }}
          >
            <button
              onClick={goPrev}
              aria-label="Предыдущие фото"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                opacity: 1,
                userSelect: "none"
              }}
            >
              &lt;
            </button>
            {visiblePhotos.map((photo, idx) => (
              <div
                key={startIndex + idx}
                className="relative w-full"
                style={{
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: "4 / 3"
                }}
                onClick={() => openModal(photo)}
              >
                <Image
                  src={photo}
                  alt={`${room.name} - фото ${startIndex + idx}`}
                  fill
                  className="object-cover"
                  priority={startIndex === 0 && idx === 0}
                />
              </div>
            ))}
            <button
              onClick={goNext}
              aria-label="Следующие фото"
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                opacity: 1,
                userSelect: "none"
              }}
            >
              &gt;
            </button>
          </div>
        )}


        {/* Модальное окно */}
        {isOpen && currentPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 "
            onClick={closeModal}
          >
            <div className="relative w-[95%] h-[95%]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={currentPhoto}
                alt="Фото в полном размере"
                fill
                className="object-contain rounded transition-transform duration-500 ease-in-out"
                priority
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-5xl font-bold bg-black bg-opacity-50 rounded-full w-[50px] h-[50px] flex items-center justify-center"
                aria-label="Закрыть"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
