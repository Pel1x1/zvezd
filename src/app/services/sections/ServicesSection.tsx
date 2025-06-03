import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/app/spa/sections/button";
import { useIsMobile } from "@/app/hooks/use-mobile";
import { useState } from 'react';
const services = [
  {
    id: 1,
    title: "Бильярд",
    location: "Бильярдный зал в ресторане «За Поводом»",
    workingHours: {
      weekdays: "с 12:00 до 22:00",
      weekends: "с 12:00 до 00:00"
    },
    description: "Здесь вы можете наслаждаться игрой в бильярд, проводить комфортно время и расслабиться. Выбирайте американский или русский бильярд и наслаждайтесь игрой в уютной атмосфере.",
    pricing: {
      weekdays: "1500₽ в час",
      weekends: "2500₽ в час"
    },
    status: "Доступно",
    images: [
      "/img/services/Billiard-1.webp",
    ]
  },
  {
    id: 2,
    title: "Караоке",
    location: "Караоке комната в ресторане ресторане «За Поводом»",
    workingHours: {
      weekdays: "с 18:00 до 02:00",
      weekends: "с 16:00 до 03:00"
    },
    description: "Загородный комплекс «Звёздный» предлагает полный спектр развлечений и отдыха, включая великолепные услуги караоке. Специальная караоке комната, оборудованная профессиональной системой. Можно заказать напитки и закуски.",
    pricing: {
      weekdays: "1500₽ в час",
      weekends: "2500₽ в час"
    },
    status: "Популярно",
    images: [
      "/img/services/Karaoke-1.webp",
    ]
  },
  {
    id: 3,
    title: "Аренда беседок для шашлыка",
    location: "Площадки под открытом небом",
    workingHours: {
      weekdays: "с 11:00 до 22:00",
      weekends: "с 11:00 до 22:00"
    },
    description: "Приватная зона отдыха со своим прудом и развлечениями в загородном комплексе «Звёздный». Аренда беседок с мангалом до 25 человек. Площадки под открытом небом, включающие все необходимое для барбекю.",
    pricing: {
      weekdays: "2000₽ в час",
      weekends: "3000₽ в час"
    },
    status: "Под заказ",
    images: [
      "/img/services/Besedka-1.webp",
    ]
  },
  {
    id: 4,
    title: "Конные прогулки",
    location: "КСК «Звёздный»",
    workingHours: {
      weekdays: "с 10:00 до 22:00",
      weekends: "с 10:00 до 22:00"
    },
    description: "Конные прогулки — это не просто отдых, это настоящее волшебство, которое наполняет жизнь яркими красками и незабываемыми впечатлениями. В седле лошади каждый человек может почувствовать себя свободным и сильным, забыв о повседневных заботах и стрессах. Контакт с природой, свежий воздух и теплое общение с этими прекрасными животными делают конные прогулки идеальным способом провести время как в одиночестве, так и в компании друзей или семьи.",

    status: "Под заказ",
    images: [
      "/img/services/Horses-1.webp",
    ]
  },
  {
    id: 5,
    title: "Костровая зона",
    location: "Зона отдыха",
    workingHours: {
      weekdays: "с 11:00 до 22:00",
      weekends: "с 11:00 до 22:00"
    },
    description: "Приглашаем вас отдохнуть в нашей костровой зоне, где вы найдете уютные качели и кресла для комфортного времяпровождения. Здесь вы можете насладиться ароматным чаем у костра, устроить гриль-вечеринку или организовать небольшой пикник в кругу друзей. Приходите встречать рассветы и провожать закаты в нашей уютной зоне отдыха.",
    pricing: {
      weekdays: "8500₽",
      weekends: "8500₽"
    },
    status: "Под заказ",
    images: [
      "/img/services/Koster-1.webp",
    ]
  }
];

const ServicesSection = () => {
    const isMobile = useIsMobile();
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {services.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden mb-[50px]" style={{fontFamily: "RobotoL"}}>
              <div className="grid gap-0" style={{display: 'grid' ,gridTemplateColumns: isMobile? '1fr' : '1fr 1fr'}}>
                {/* Image Gallery */}
                <div className={`grid gap-2 p-4 ${service.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {service.images.map((image, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                      <img
                        src={image}
                        alt={`${service.title} фото ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                  ))}
                </div>

                {/* Service Info */}
                <CardContent className="px-[40px] py-[50px] flex flex-col justify-between" style={{fontFamily: "RobotoL"}}>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mt-4">
                        {service.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-4xl font-bold mb-4" style={{fontFamily: "ZenAntoquie"}}>{service.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span>{service.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5" />
                        <div className="flex flex-col">
                          <span>Будни: {service.workingHours.weekdays}</span>
                          <span>Выходные: {service.workingHours.weekends}</span>
                        </div>
                      </div>
                      {service.pricing && (service.pricing.weekdays || service.pricing.weekends) ? (
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5" />
                        <div className="flex flex-col">
                          <span>Будни: {service.pricing.weekdays}</span>
                          <span>Выходные: {service.pricing.weekends}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5" />
                        <span>Договорная</span>
                      </div>
                    )}
                    </div>
                    
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {service.pricing && (service.pricing.weekdays || service.pricing.weekends) ? (<p className="text-xl font-bold" style={{fontSize: isMobile? "15px" : "24px"}}>от {service.pricing.weekdays}</p>) : (<span className="text-sm"></span>)}
                    </div>
                    <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block' }}>
                    <Button
                      size="lg"
                      className="text-lg px-12 py-4 bg-white/5 backdrop-blur-md border-white/50 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto mb-[20px]"
                      style={{
                        borderRadius:"10px",
                        fontFamily:"RobotoL",
                        fontSize: isMobile? "22px" : "20px",
                      }}>
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
        <div className="text-center mt-[50px]">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white pb-4 pt-4">
            <CardContent className="p-8 container mx-auto text-center">
              <h3 className="text-4xl font-bold mt-[20px]">Индивидуальные услуги</h3>
              <p className="text-lg opacity-90 mt-[10px]">
                Нужна особенная услуга? Мы готовы обсудить индивидуальные предложения 
                и создать идеальные условия для вашего мероприятия.
              </p>
              <a href="tel:+79850168008" className="footer-link " style={{ display: 'inline-block', borderRadius: "15px" }}>
                <Button
                  style={{borderRadius: "15px"}}
                  size="lg"
                  className="text-lg px-12 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex gap-3 mx-auto mb-[20px] ml-[0px]">
                  Обсудить услуги
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;