import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/eventCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/ui/carousel";
import { Button } from "@/app/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/app/ui/dialog";
import { Star, Home, Phone, QrCode, Check } from "lucide-react";
import QRCode from "react-qr-code";


const comfortFeatures = [
  "Детские и спортивные площадки",
  "Зоны прогулок и отдыха",
  "Пруд и мангальные зоны",
  "Конно-спортивный комплекс",
  "Парк Альпак и контактный зоопарк",
  "Праздничные мероприятия",
  "Ресторан и кафе",
  "Номерной фонд для гостей",
  "Спа и массаж",
  "Бильярд",
  "Охрана и видеонаблюдение",
  "Консьерж-сервис"
];


const communicationFeatures = [
  "Асфальтированные дороги",
  "Электричество подземное 15 квт",
  "Газ по границе участка",
  "Скважина",
  "Канализация",
  "Уличное освещение",
  "Озеленение общих зон"
];

const About = () => {
    const handleContactCall = () => {
    window.location.href = "tel:+79801625252";
    };

    return (
        <section className="py-20 px-[15] md:px-[15%]">

        {/* Описание секции */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <p className="text-xl md:text-4xl text-white/90 leading-normal tracking-[1px]">
            Клубный посёлок «Звёздный» погрузит Вас в неповторимую атмосферу русских традиций и современной архитектуры!
          </p>
          <p className="text-lg md:text-3xl text-white/90 leading-normal tracking-[2px]">
            Мы уже построили всю необходимую инфраструктуру, чтобы Вы могли наслаждаться природой и уединением не в ущерб привычному образу жизни. Для жителей посёлка особые условия на все услуги.
          </p>
        </div>

        {/* Комфорт блок */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-16 py-2">
            <CardHeader>
                <CardTitle className="text-4xl flex items-center gap-3">
                    <Star className="w-8 h-8" />
                    Комфорт
                </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comfortFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <span className="mr-1 text-2xl">•</span>
                    <span className="text-2xl">{feature}</span>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>

        {/* Коммуникации блок */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-16">
            <CardHeader>
                <CardTitle className="text-4xl flex items-center gap-3">
                    <Home className="w-8 h-8" />
                    Коммуникации
                </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Левая часть - список */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {communicationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <span className="mr-1 text-2xl">•</span>
                        <span className="text-2xl">{feature}</span>
                    </div>
                    ))}
                    </div>
                </div>

                {/* Правая часть - QR код и кнопка */}
                <div className="lg:w-80 flex flex-col items-center gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <span className="text-black text-sm ml-[1%] mr-[1%] center text-center" >Узнать подробнее</span>
                    <QRCode value="https://t.me/kpzvezdniy" className="w-32 h-32 text-gray-800" />
                </div>
                    <Button 
                    onClick={handleContactCall}
                    className="bg-gradient-to-r from-[#790301c2] to-[#af0401b9] hover:to-[#800200b4] hover:from-[#810200a4] text-white px-6 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                    <p className="text-sm mb-0">ЗАПИСАТЬСЯ НА ВСТРЕЧУ:</p><p className="text-lg mt-2 mb-0"> +7(980)162-52-52 </p>
                    </Button>
                </div>
            </div>
            </CardContent>
        </Card>
        </section>
    );
};
export default About