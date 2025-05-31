
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Calendar, Clock, Percent, Gift } from "lucide-react";

// Динамичные специальные предложения - легко изменяемые
const specialOffers = [
  {
    id: 1,
    title: "Молодоженам со скидкой",
    description: "Люкс молодоженам со скидкой в 50%.",
    validUntil: "постоянно",
    discount: "50%",
    icon: Percent,
    image: "/img/rooms/BlackLux/BlackLux-2.jpg",
    badge: "Популярное",
    conditions: ["Заказ меню на сумму от 250.000", "Любое количество гостей"]
  },
  {
    id: 2,
    title: "Молодоженам в подарок",
    description: "Для новобрачных - люкс для проживания в подарок при заказе свадебного банкета.",
    validUntil: "постоянно",
    discount: "Подарки",
    icon: Gift,
    image: "/img/rooms/WhiteLux/WhiteLux.webp",
    badge: "Свадьбам",
    conditions: ["Заказ меню на сумму от 350.000", "Любое количество гостей"]
  },
  {
    id: 3,
    title: "Спа в подарок",
    description: "СПА - тариф «Свадебный» один час релакса в хаммаме с массажем для него и для нее.",
    validUntil: "постоянно",
    discount: "Подарки",
    icon: Gift,
    image: "/img/spa.webp",
    badge: "Выгодно",
    conditions: ["Заказ свадьбы", "Любое количество гостей"]
  },
  {
    id: 4,
    title: "Скидка на проживание",
    description: "Скидка на проживание в отеле «За поводом» по тарифу «Гости Банкета»",
    validUntil: "постоянно",
    discount: "от 10%",
    icon: Percent,
    image: "/img/rooms/ComfortPlus/ComfortPlus-3.jpg",
    badge: "Удобно",
    conditions: ["Посещение любого банкета в качестве гостя"]
  }
];

const SpecialOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: "ZenAntoquie"}}>Специальные предложения</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto" style={{fontFamily: "RobotoL"}}>
            При проведении банкета в загородном комплексе Звездный, мы предлагаем гостям специальные предложения на проживание и посещение СПА.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <Card 
              key={offer.id} 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 "
              onClick={() => setSelectedOffer(selectedOffer === offer.id ? null : offer.id)}
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-800 font-semibold">
                    {offer.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full font-bold">
                  {offer.discount}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start gap-3">
                  <offer.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2" style={{fontFamily: "ZenAntoquie"}}>{offer.title}</CardTitle>
                    <CardDescription className="text-white/90" style={{fontFamily: "Roboto"}}>
                      {offer.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-75" style={{fontFamily: "Roboto"}}>Действует до:</span>
                  <span className="font-semibold"style={{fontFamily: "RobotoL"}}>{offer.validUntil}</span>
                </div>

                {selectedOffer === offer.id && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg animate-fade-in">
                    <h4 className="font-semibold mb-2" style={{fontFamily: "ZenAntoquie"}}>Условия предложения:</h4>
                    <ul className="space-y-1 text-sm opacity-90" style={{fontFamily: "Roboto"}}>
                      {offer.conditions.map((condition, index) => (
                        <li key={index}>• {condition}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-3xl opacity-90 mb-4" style={{fontFamily: "ZenAntoquie"}}>
            Связь со свадебным менеджером
          </p>
          <p className="text-2xl font-semibold">
            <a href="tel:+79850168008" className="text-white hover:text-gray transition-colors cursor-pointer">+7 (985) 016-80-08</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
