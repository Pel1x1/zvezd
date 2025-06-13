
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/spa/sections/card";
import { Button } from "@/app/spa/sections/button";
import { Badge } from "@/app/spa/sections/badge";
import { Separator } from "@/app/spa/sections/separator";
import { FileText } from "lucide-react";
import ServiceCard from "@/app/spa/sections/ServiceCard";
import { bodyServices, faceServices, hammamServices, saunaServices } from "@/app/spa/sections/services";

import {Card as CardSupport} from "@/app/ui/card";
import {CardContent as  CardContentSupport} from "@/app/ui/card";
import {Button as  ButtonSupport} from "@/lib/Button";

const Hero = () => {
  const [mainCategory, setMainCategory] = useState("spa"); // spa, hammam, sauna
  const [spaSubCategory, setSpaSubCategory] = useState("body"); // body или face
  const [services, setServices] = useState(bodyServices);

  useEffect(() => {
    if (mainCategory === "spa") {
      setServices(spaSubCategory === "body" ? bodyServices : faceServices);
    } else if (mainCategory === "hammam") {
      setServices(hammamServices);
    } else if (mainCategory === "sauna") {
      setServices(saunaServices);
    }
  }, [mainCategory, spaSubCategory]);

  const getCategoryTitle = () => {
    if (mainCategory === "spa") {
      return spaSubCategory === "body" ? "Услуги для тела" : "Услуги для лица";
    }
    if (mainCategory === "hammam") return "Хаммам";
    if (mainCategory === "sauna") return "Сауна";
    return "";
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = './SpaPrices.pdf';
    link.setAttribute('download', 'SpaPricesZvezd.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D2B6B1' }}>
      {/* Основные кнопки */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 text-3xl">
            <Button
              onClick={() => setMainCategory("spa")}
              variant={mainCategory === "spa" ? "default" : "transparent"}
              size="lg"
              style={{ borderRadius: "12px", fontFamily: "Roboto" }}
              className="px-10 py-3 text-white border-white bg-white/20 transition-all"
            >
              СПА услуги
            </Button>
            <Button
              onClick={() => setMainCategory("hammam")}
              variant={mainCategory === "hammam" ? "default" : "transparent"}
              size="lg"
              style={{ borderRadius: "12px", fontFamily: "Roboto" }}
              className="px-10 py-3 text-white border-white bg-white/20 transition-all"
            >
              Хаммам
            </Button>
            <Button
              onClick={() => setMainCategory("sauna")}
              variant={mainCategory === "sauna" ? "default" : "transparent"}
              size="lg"
              style={{ borderRadius: "12px", fontFamily: "Roboto" }}
              className="px-10 py-3 text-white border-white bg-white/20 transition-all"
            >
              Сауна
            </Button>
          </div>

          {/* Под-кнопки для СПА услуг */}
          {mainCategory === "spa" && (
            <div className="flex justify-center gap-4 mt-6 text-xl">
              <Button
                onClick={() => setSpaSubCategory("body")}
                variant={spaSubCategory === "body" ? "default" : "transparent"}
                size="lg"
                style={{ borderRadius: "12px", fontFamily: "Roboto" }}
                className="px-8 py-2 text-white border-white bg-white/20 transition-all"
              >
                Тело
              </Button>
              <Button
                onClick={() => setSpaSubCategory("face")}
                variant={spaSubCategory === "face" ? "default" : "transparent"}
                size="lg"
                style={{ borderRadius: "12px", fontFamily: "Roboto" }}
                className="px-8 py-2 text-white border-white bg-white/20 transition-all"
              >
                Лицо
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center" style={{ fontFamily: "ZenAntique" }}>
            {getCategoryTitle()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
      <div className="text-center space-y-12 ">
          <CardSupport className="bg-black/5 backdrop-blur-sm border-white/20 text-white pb-4 pt-4 max-w-7xl mx-auto">
            <CardContentSupport className="p-8 container mx-auto text-center">
              <h3 className="text-4xl font-bold mt-[20px]"  style={{fontFamily: "ZenAntoquie"}}>Нужна помощь с выбором?</h3>
              <p className="text-lg opacity-90 mt-[10px]"  style={{fontFamily: "RobotoL"}}>
              Наш менеджер всегда готов помочь вам подобрать идеальную спа-программу, которая подарит максимум удовольствия и расслабления. Просто свяжитесь с нами — и мы сделаем всё, чтобы ваш отдых был незабываемым!
              </p>
              <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block', borderRadius: "15px" }}>
              <Button 
                size="lg" 
                style={{borderRadius: "15px"}}
                className="text-lg px-12 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto mb-[20px]"
              >
                Cвязаться с менеджером
              </Button>
            </a>
            </CardContentSupport>
          </CardSupport>
        </div>
        </section>

      {/* PDF Download Section */}
      <section className="py-20 px-4 bg-black/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Полный каталог услуг</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Скачайте подробный каталог всех наших СПА услуг с полным описанием, ценами и рекомендациями
          </p>
          <Button 
            onClick={handleDownloadPDF}
            style={{borderRadius: "15px"}}

            size="lg" 
            className="text-lg px-12 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <FileText className="w-5 h-5" />
            Скачать каталог (PDF)
          </Button>
        </div>
      </section>

      
    </div>
  );
};

export default Hero;
