
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/app/spa/sections/badge";
import { Separator } from "@/app/spa/sections/separator";
import { Clock, DollarSign } from "lucide-react";

interface ServiceProps {
  service: {
    id: string;
    name: string;
    description: string;
    includes: string[];
    pricing: Array<{
      duration: string;
      price: string;
    }>;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceProps) => {
  return (
    <Card 
      className="bg-black/5 backdrop-blur-md border-black/10 border-[1px] hover:bg-white/5 transition-all duration-300 hover-scale animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s`, fontFamily: "RobotoL" }}
    >
      <CardHeader>
        <CardTitle className="text-white text-xl font-bold"  style={{fontFamily: "ZenAntique"}}>
          {service.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-white/90 leading-relaxed">
          {service.description}
        </p>
        
        <Separator className="bg-black/10" />
        
        <div>
          <h4 className="text-white font-semibold mb-3">Включает в себя:</h4>
          <div className="flex flex-wrap gap-2">
            {service.includes.map((item, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="bg-white/10 text-white border-purple-400/50 hover:bg-transparent transition-colors"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
        
        <Separator className="bg-black/10" />
        
        <div>
          <h4 className="text-white font-semibold mb-3">Время и стоимость:</h4>
          <div className="space-y-2">
            {service.pricing.map((option, idx) => (
              <div 
                key={idx} 
                className="flex justify-between items-center bg-black/10 rounded-lg p-3"
              >
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{option.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <span>{option.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
