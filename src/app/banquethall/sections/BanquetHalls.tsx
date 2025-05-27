
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/eventCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/ui/carousel";
import { Users, MapPin, Star } from "lucide-react";
const halls = [
  {
    id: 1,
    name: "Основной зал",
    capacity: "до 140 гостей",
    area: "270 кв.м",
    description: "Большой просторный зал ресторана-отеля «За поводом» Идеально подходит для торжественных мероприятий и свадеб. Удобное зонирование с тремя вип - зонами.",
    features: ["Дизайнерский интерьер", "Панорамные окна", "Камин", "Профессиональное освещение"],
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Белый зал",
    capacity: "до 100 гостей",
    area: "150 кв.м",
    description: "Стильный светлый зал в окружении березовой рощи, панорамные окна и минимализм в интерьере.",
    features: ["Выездная регистрация", "Панорамные окна", "Романтическое освещение", "Уютная атмосфера"],
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Изумрудный зал",
    capacity: "до 70 гостей",
    area: "140 кв.м",
    description: "Уютный изолированный зал на третьем этаже бутик-отеля «За поводом» для камерных мероприятий.",
    features: ["Бар", "LED-освещение", "Мультимедийное оборудование", "Зонирование"],
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const BanquetHalls = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="space-y-16">
          {halls.map((hall, index) => (
            <div key={hall.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              {/* Images Carousel */}
              <div className="w-full lg:w-1/2">
                <Carousel className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    {hall.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="aspect-video relative overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${hall.name} - фото ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Hall Information */}
              <div className="w-full lg:w-1/2">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white" style={{fontFamily: "Roboto"}}>
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-5xl mb-2" style={{fontFamily: "ZenAntoquie"}}>{hall.name}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{hall.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{hall.area}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/90 text-base leading-relaxed mb-6">
                      {hall.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">Особенности зала:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {hall.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BanquetHalls;
