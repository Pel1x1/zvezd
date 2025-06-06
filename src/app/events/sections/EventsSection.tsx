"use client";

import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Calendar, Grid, MapPin, Users } from "lucide-react";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { HoverCard } from "radix-ui";
import { useState } from 'react';
import { Button } from "@/app/spa/sections/button";

const events = [
  {
    id: 1,
    title: "Корпортаивные мероприятия",
    date: "Всегда",
    time: "Всегда",
    location: "«Звездный»",
    capacity: "до 200 гостей",
    description: "В загородном комплексе «Звездный» вы найдете все необходимое для организации незабываемого корпоративного праздника, который оставит яркие впечатления у ваших сотрудников и партнеров.",
    price: "",
    status: "Всегда",
    images: [
      "/img/events/event-1.webp",
      
    ]
  },
  {
    id: 2,
    title: "Свадьбы",
    date: "Всегда",
    time: "",
    location: "«Звездный»",
    capacity: "до 200 гостей",
    description: "На территории загородного комплекса «Звёздный» у вас есть возможность провести свадьбу мечты. Уникальная природная атмосфера, уютные номера, живописные места для церемонии и три зала на выбор для торжественного банкета – все для вашего незабываемого события.",
    price: "",
    status: "Всегда",
    images: [
      "/img/weddings/weddings-2.webp",
    ]
  },
  {
    id: 3,
    title: "Банкеты",
    date: "Всегда",
    time: "",
    location: "«Звездный»",
    capacity: "до 200 гостей",
    description: "Мы можем провести мероприятие любого формата, с любым количеством гостей и выбором блюд, и при этом гарантируем высокое качество кухни, сервиса и обслуживания. Поверьте нам заботу о вашем важном дне, и мы превратим его в незабываемый опыт.",
    price: "",
    status: "Всегда",
    images: [
      "/img/bankets/banketWhite-1.webp",
    ]
  },
  {
    id: 4,
    title: "Личное торжество",
    date: "Всегда",
    time: "",
    location: "«Звездный»",
    capacity: "до 200 гостей",
    description: "Создайте свои незабываемые воспоминания, соберите всех близких и дорогих людей и отправьтесь провести время на природе. Мы гарантируем, что ваш отдых будет комфортным и наполненным радостными моментами.",
    price: "",
    status: "Всегда",
    images: [
      "/img/bankets/banketEmerald-2.webp",
    ]
  },
  {
    id: 5,
    title: "Детские праздники",
    date: "Всегда",
    time: "",
    location: "«Звездный»",
    capacity: "до 200 гостей",
    description: "Лучший выбор для проведения детского праздника: выбор банкетных залов, специальное меню для взрослых и маленьких гостей, программа анимации.",
    price: "",
    status: "Всегда",
    images: [
      "/img/events/events-4.webp",
    ]
  }
];

const EventsSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-12">
          {events.map((event) => (
            <Card key={event.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden mb-[50px]">
              <div className="grid gap-0" style={{display: 'grid' ,gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
                {/* Image Gallery */}
                <div className={`grid gap-2 p-4 ${event.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {event.images.map((image, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                      <img
                        src={image}
                        alt={`${event.title} фото ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                {/* Event Info */}
                <CardContent className="px-[40px] py-[50px] flex flex-col justify-between" style={{fontFamily: "RobotoL"}}>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mt-4">
                        {event.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-4xl font-bold mb-4" style={{fontFamily: "ZenAntoquie"}}>{event.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 mt-2 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 mb-2">
                        <Users className="w-5 h-5" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between" >
                    <div>
                      <p className="text-xl font-bold" style={{fontSize: isMobile? "18px" : "24px"}}>{event.price}</p>
                    </div>
                    <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block' }}>
                    <Button 
                     size="lg" 
                     className="text-lg px-12 py-4 bg-white/5 backdrop-blur-md border-white/50 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto mb-[20px]"
                    style={{
                      borderRadius:"10px",
                      fontFamily:"RobotoL",
                      fontSize: isMobile? "22px" : "20px",
                    }} 
                    >
                      Забронировать
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white pb-4 pt-4">
            <CardContent className="p-8 container mx-auto text-center">
              <h3 className="text-4xl font-bold mt-[20px]"  style={{fontFamily: "ZenAntoquie"}}>Индивидуальные мероприятия</h3>
              <p className="text-lg opacity-90 mt-[10px]"  style={{fontFamily: "RobotoL"}}>
                Хотите организовать собственное мероприятие?<br/> Мы поможем воплотить любую идею в жизнь. 
                Корпоративы, дни рождения, юбилеи - каждое событие станет особенным.
              </p>
              <a href="tel:+79850168008" className="footer-link " style={{ display: 'inline-block', borderRadius: "15px" }}>
              <Button 
                  style={{borderRadius: "15px"}}
                   size="lg" 
                    className="text-lg px-12 py-4   bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex gap-3 mx-auto mb-[20px] ml-[0px]"
                >
                  Cвязаться с менеджером
                </Button>
            </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

