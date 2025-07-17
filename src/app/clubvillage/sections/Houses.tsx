import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/ui/carousel";
import { Button } from "@/app/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/app/ui/dialog";
import { Star, Home } from "lucide-react";

const houses = [
  {
    id: 1,
    name: "УЮТНЫЙ ДОМ ДЛЯ НЕБОЛЬШОЙ СЕМЬИ",
    area: "112 кв.м",
    features: ["2 спальни, 2 санузла", "Кабинет (или сауна)", "Терраса", "Котельная-постирочная", "Опция: навес на 2 машины"],
    images: [
      "/img/clubvil/120/dom_120_bej_ver.jpg",
      "/img/clubvil/120/dom_120_bej_ver_1.jpg",
      "/img/clubvil/120/dom_120_red_ter-1.jpg",
      "/img/clubvil/120/dom_120_red_ter.jpg",
      "/img/clubvil/120/dom_120_white.jpg",
      "/img/clubvil/120/dom_120_white_ver_1.jpg",
      "/img/clubvil/120/dom_120_1.png",
      "/img/clubvil/120/dom_120_2.png",
    ]
  },
  {
    id: 2,
    name: "ПРОСТОРНЫЙ ДОМ ДЛЯ СЕМЬИ С ДЕТЬМИ",
    area: "141 кв.м",
    features: ["3 спальни, 3 санузла", "Котельная постирочная",
      "Гардеробная при входе","Кладовка при кухне","Терраса (или застекленная веранда)",
      "Мастер-спальня с санузлом и гардеробной","Кабинет (или сауна)","Опция: навес на 2 машины",],
    images: [
      "/img/clubvil/140/dom_140_bej_ter.jpg",
      "/img/clubvil/140/dom_140_bej_ver_n.jpg",
      "/img/clubvil/140/dom_140_white_ver.jpg",
      "/img/clubvil/140/dom_140_white_ver_1.jpg",
      "/img/clubvil/140/dom_140_red_ter.jpg",
      "/img/clubvil/140/dom_140_red_ter_1.jpg",
      "/img/clubvil/140/dom_140_1.png",
      "/img/clubvil/140/dom_140_2.png",
      "/img/clubvil/140/dom_140_3.png",
    ]
  },
  {
    id: 3,
    name: "ДОМ МЕЧТЫ ДЛЯ БОЛЬШОЙ СЕМЬИ",
    area: "188 кв.м",
    features: ["1 спальня", "1 санузел", "Гостиная-кухня", "Мангальная зона", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "ДОМ, ОБЪЕДИНЯЮЩИЙ ПОКОЛЕНИЯ",
    area: "224 кв.м",
    features: ["1 спальня", "1 санузел", "Гостиная-кухня", "Мангальная зона", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
];

const VillageSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleContactCall = () => {
    window.location.href = "tel:+79801625252";
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Дома */}
        <div className="space-y-16">
          {houses.map((house, index) => (
            <div key={house.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              {/* Images Carousel */}
              <div className="w-full lg:w-1/2">
                <Carousel className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    {house.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="aspect-video relative overflow-hidden rounded-lg cursor-pointer">
                              <img
                                src={image}
                                alt={`${house.name} - фото ${imgIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedImage(image)}
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/90">
                            <img
                              src={image}
                              alt={`${house.name} - фото ${imgIndex + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* House Information */}
              <div className="w-full lg:w-1/2">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl mb-2">{house.name}</CardTitle>
                    <div className="flex items-center gap-2 text-xl opacity-90">
                      <Home className="w-5 h-5" />
                      <span>{house.area}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {house.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current text-amber-400" />
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={handleContactCall}
                      className="bg-gradient-to-r from-[#790301c2] to-[#af0401b9] hover:to-[#800200b4] hover:from-[#810200a4] text-white px-6 py-3 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Узнать больше
                    </Button>
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

export default VillageSection;