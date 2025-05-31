
"use client";

import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Calendar, Grid, MapPin, Users } from "lucide-react";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { HoverCard } from "radix-ui";
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: "Новогодний банкет 2024",
    date: "31 декабря 2023",
    time: "20:00",
    location: "Большой зал",
    capacity: "до 200 гостей",
    description: "Встретьте Новый год в роскошной атмосфере нашего банкетного комплекса. Праздничное меню от шеф-повара, живая музыка и незабываемая атмосфера.",
    price: "от 4500₽ за персону",
    status: "Осталось мест: 15",
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 2,
    title: "День святого Валентина",
    date: "14 февраля 2024",
    time: "19:00",
    location: "Романтический зал",
    capacity: "до 50 пар",
    description: "Романтический ужин для влюбленных. Изысканное меню, живая музыка, декор в красно-белых тонах и особая атмосфера любви.",
    price: "от 3500₽ за пару",
    status: "Раннее бронирование",
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: 3,
    title: "Винная дегустация",
    date: "каждая пятница",
    time: "18:00",
    location: "Винный погреб",
    capacity: "до 30 гостей",
    description: "Познакомьтесь с лучшими винами из нашей коллекции в сопровождении сомелье. Закуски от шеф-повара и атмосфера французского винного погреба.",
    price: "от 2500₽ за персону",
    status: "Еженедельно",
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ]
  }
];

const EventsSection = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">

        <div className="space-y-12">
          {events.map((event) => (
            <Card key={event.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden mb-[50px]">
              <div className="grid gap-0" style={{display: 'grid' ,gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-2 p-4">
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
                <CardContent className="px-[30px] py-[40px] flex flex-col justify-between" style={{fontFamily: "RobotoL"}}>
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
                        <span>{event.date} в {event.time}</span>
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
                      <p className="text-xl font-bold">{event.price}</p>
                    </div>
                    <button 
                    className="transition-colors hover:bg-white/40 px-5 py-3 font-semibold text-gray-800 border-[2px] border-white" 
                    style={{
                      borderRadius:"10px",
                    }} 
                    >
                      Забронировать
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 mt-6"  style={{fontFamily: "ZenAntoquie"}}>Индивидуальные мероприятия</h3>
              <p className="text-lg opacity-90 mb-6 mt-6"  style={{fontFamily: "RobotoL"}}>
                Хотите организовать собственное мероприятие?<br/> Мы поможем воплотить любую идею в жизнь. 
                Корпоративы, дни рождения, юбилеи - каждое событие станет особенным.
              </p>
              <button className="bg-white mt-6 mb-6 text-gray-800 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold" style={{borderRadius:"10px"}}> 
                Обсудить мероприятие
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

