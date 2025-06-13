
import { Card, CardContent } from "@/app/ui/eventCard";
import { Heart, Camera, Utensils, Music } from "lucide-react";

const weddingServices = [
  {
    icon: Heart,
    title: "Организация церемонии",
    description: "Полная организация выездной регистрации и торжественной части"
  },
  {
    icon: Camera,
    title: "Фото и видеосъемка",
    description: "Профессиональные фотографы и видеооператоры для сохранения воспоминаний"
  },
  {
    icon: Utensils,
    title: "Банкетное меню",
    description: "Изысканные блюда от шеф-повара, адаптированные под ваши предпочтения"
  },
  {
    icon: Music,
    title: "Музыкальное сопровождение",
    description: "DJ, живая музыка или оркестр для создания идеальной атмосферы"
  }
];

const weddingGallery = [
  "/img/weddings/weddings-1.webp",
  "/img/weddings/weddings-2.webp",
  "/img/weddings/weddings-3.webp",

  "/img/weddings/weddings-4.webp",
  "/img/weddings/weddings-5.webp",
  "/img/weddings/weddings-6.webp",
  
  "/img/weddings/weddings-7.webp",
  "/img/weddings/weddings-8.webp",
  "/img/weddings/weddings-9.webp",
];

const WeddingsSection = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {weddingServices.map((service, index) => (
            <Card key={index} className="bg-black/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2" style={{fontFamily:"ZenAntique"}}>{service.title}</h3>
                <p className="text-lg opacity-90" style={{fontFamily:"RobotoL"}}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h3 className="text-5xl font-bold text-center mb-8" style={{fontFamily: "ZenAntoquie"}}>Галерея наших свадеб</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weddingGallery.map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`Свадебное фото ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingsSection;
