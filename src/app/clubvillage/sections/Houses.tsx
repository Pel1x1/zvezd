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
      "/img/clubvil/120/dom_120_red_ter.jpg",
      "/img/clubvil/120/dom_120_white.jpg",
      "/img/clubvil/120/dom_120_bej_ver_1.jpg",
      "/img/clubvil/120/dom_120_red_ter-1.jpg",
      "/img/clubvil/120/dom_120_white_ver_1.jpg",
      "/img/clubvil/120/dom_120_1.png",
      "/img/clubvil/120/dom_120_2.png",
    ]
  },
  {
    id: 2,
    name: "ПРОСТОРНЫЙ ДОМ ДЛЯ СЕМЬИ С ДЕТЬМИ",
    area: "141 кв.м",
    features: ["3 спальни, 3 санузла",
       "Котельная постирочная",
      "Гардеробная при входе",
      "Кладовка при кухне",
      "Терраса (или застекленная веранда)",
      "Мастер-спальня с санузлом и гардеробной",
      "Кабинет (или сауна)",
      "Опция: навес на 2 машины",],
    images: [
      "/img/clubvil/140/dom_140_bej_ter.jpg",
      "/img/clubvil/140/dom_140_red_ter.jpg",
      "/img/clubvil/140/dom_140_white_ver.jpg",
      "/img/clubvil/140/dom_140_bej_ver_n.jpg",
      "/img/clubvil/140/dom_140_red_ter_1.jpg",
      "/img/clubvil/140/dom_140_white_ver_1.jpg",
      "/img/clubvil/140/dom_140_1.png",
      "/img/clubvil/140/dom_140_2.png",
      "/img/clubvil/140/dom_140_3.png",
    ]
  },
  {
    id: 3,
    name: "ДОМ МЕЧТЫ ДЛЯ БОЛЬШОЙ СЕМЬИ",
    area: "188 кв.м",
    features: [
  "Гардеробная при входе",
  "Постирочная",
  "Кладовка при кухне",
  "Высокий второй свет",
  "4 спальни, 3 санузла",
  "Котельная",
  "Мастер-спальня с санузлом и гардеробной",
  "Опция: сауна, гараж или навес с хозблоком",
  "Кабинет",
  ],
    images: [
      "/img/clubvil/180/dom_180_bej_ver.jpg",
      "/img/clubvil/180/dom_180_red_ver.jpg",
      "/img/clubvil/180/dom_180_white_ver.jpg",
      "/img/clubvil/180/dom_180_bej_ver_1.jpg",
      "/img/clubvil/180/dom_180_red_ter_1.jpg",
      "/img/clubvil/180/dom_180_white_ter_1.jpg",
      "/img/clubvil/180/dom_180_1.png",
      "/img/clubvil/180/dom_180_2.png",
      "/img/clubvil/180/dom_180_3.png",
      "/img/clubvil/180/dom_180_4.png",
      "/img/clubvil/180/dom_180_5.png",
    ]
  },
  {
    id: 4,
    name: "ДОМ, ОБЪЕДИНЯЮЩИЙ ПОКОЛЕНИЯ",
    area: "224 кв.м",
    features: [
    "2 мастер-спальни с санузлом и гардеробной",
    "Гараж на 2 машины (опция: жилой модуль)",  
  "Гардеробная при входе",
  "Постирочная",
  "Кладовка при кухне",
  "Высокий второй свет",
  "5 спален, 4 санузла",
  "Котельная",
  "Кабинет",
    ],
    images: [
      "/img/clubvil/220/dom_220_bej_ver.jpg",
      "/img/clubvil/220/dom_220_red_ver.jpg",
      "/img/clubvil/220/dom_220_white_ver.jpg",
      "/img/clubvil/220/dom_220_bej_ver_1.jpg",
      "/img/clubvil/220/dom_220_red_ter_1.jpg",
      "/img/clubvil/220/dom_220_white_ter_1.jpg",
      "/img/clubvil/220/dom_220_1.png",
      "/img/clubvil/220/dom_220_2.png",
      "/img/clubvil/220/dom_220_3.png",
      "/img/clubvil/220/dom_220_4.png",
      "/img/clubvil/220/dom_220_5.png",
    ]
  },
];

const VillageSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleContactCall = () => {
    window.location.href = "tel:+79801625252";
  };

  return (
    <section className=" px-4" style={{paddingBottom:"50px"}}>
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
                      <div className="grid grid-cols-2 gap-1">
                        {house.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <span className="mr-2">•</span>
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