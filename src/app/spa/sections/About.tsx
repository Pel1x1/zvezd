
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/spa/sections/card";
import { Button } from "@/app/spa/sections/button";
import { Badge } from "@/app/spa/sections/badge";
import { Separator } from "@/app/spa/sections/separator";
import { FileText } from "lucide-react";
import ServiceCard from "@/app/spa/sections/ServiceCard";
import { bodyServices, faceServices, hammamServices } from "@/app/spa/sections/services";

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("body");
  const [services, setServices] = useState(bodyServices);

  useEffect(() => {
    const getCurrentServices = () => {
      switch (activeCategory) {
        case "body":
          return bodyServices;
        case "face":
          return faceServices;
        case "hammam":
          return hammamServices;
        default:
          return bodyServices;
      }
    };
    
    setServices(getCurrentServices());
  }, [activeCategory]);

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "body":
        return "Услуги для тела";
      case "face":
        return "Услуги для лица";
      case "hammam":
        return "Хаммам";
      default:
        return "Услуги для тела";
    }
  };

  const handleDownloadPDF = () => {
    // Создаем временную ссылку для скачивания PDF
    const link = document.createElement('a');
    link.href = './Прайс Звездный 26.02.25.pdf'; // Путь к PDF файлу
    link.download = './Прайс Звездный 26.02.25.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D2B6B1' }}>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-3xl">
            <Button 
              onClick={() => setActiveCategory("body")}
              variant={activeCategory === "body" ? "default" : "transparent"}
              size="lg"
              style={{borderRadius: "12px", fontFamily: "Roboto"}}
              className="px-10 py-3 text-white border-white bg-white/20 transition-all "
            >
              Тело
            </Button>
            <Button 
              onClick={() => setActiveCategory("face")}
              variant={activeCategory === "face" ? "default" : "transparent"}
              size="lg"
              style={{borderRadius: "12px", fontFamily: "Roboto"}}
              className="px-10 py-3 text-white border-white  bg-white/20 transition-all "
            >
              Лицо
            </Button>
            <Button 
              onClick={() => setActiveCategory("hammam")}
              variant={activeCategory === "hammam" ? "default" : "transparent"}
              size="lg"
              style={{borderRadius: "12px", fontFamily: "Roboto"}}
              className="px-10 py-3 bg-white/20 text-white border-white  transition-all"
            >
              Хаммам
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white text-center" style={{fontFamily: "ZenAntique"}}>
            {getCategoryTitle()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {services.map((service, Index) => (
              <ServiceCard key={service.id} service={service} index={Index}/>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Download Section 
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Полный каталог услуг</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Скачайте подробный каталог всех наших СПА услуг с полным описанием, ценами и рекомендациями
          </p>
          <Button 
            onClick={handleDownloadPDF}
            size="lg" 
            className="text-lg px-12 py-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <FileText className="w-5 h-5" />
            Скачать каталог (PDF)
          </Button>
        </div>
      </section>*/}

      
    </div>
  );
};

export default Hero;
