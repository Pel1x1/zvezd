
import React from 'react';
import { HotelPOI } from '@/components/ui/HotelPOI';
import { 
  BedDouble, 
  Utensils, 
  Waves, 
  Heart, 
  Car, 
  Building, 
  CircleHelp, 
  Dumbbell
} from 'lucide-react';

interface MarkerProps {
  poi: HotelPOI;
  onClick: (poi: HotelPOI) => void;
}

const iconColors = {
  room: '#446263',
  restaurant: '#d35400',
  pool: '#3498db',
  spa: '#9b59b6',
  parking: '#7f8c8d',
  reception: '#2c3e50',
  conference: '#2980b9',
  sport: '#27ae60'
};

const Marker: React.FC<MarkerProps> = ({ poi, onClick }) => {
  const getIcon = () => {
    switch (poi.type) {
      case 'room':
        return <BedDouble size={24} className="text-white" />;
      case 'restaurant':
        return <Utensils size={24} className="text-white" />;
      case 'pool':
        return <Waves size={24} className="text-white " />;
      case 'spa':
        return <Heart size={24} className="text-white" />;
      case 'parking':
        return <Car size={24} className="text-white" />;
      case 'reception':
        return <CircleHelp size={24} className="text-white" />;
      case 'conference':
        return <Building size={24} className="text-white" />;
      case 'sport':
        return <Dumbbell size={24} className="text-white" />;
      default:
        return <CircleHelp size={24} className="text-white" />;
    }
  };

  const backgroundColor = iconColors[poi.type];

  return (
    <g 
      className="placemark animate-pulse duration-1500" 
      id={`marker-${poi.id}`} 
      data-item={poi.type} 
      data-placemark={poi.id} 
      onClick={() => onClick(poi)}
      style={{ cursor: 'pointer' }}
    >
      <circle 
        cx="0" 
        cy="0" 
        r="24" 
        fill="white" 
        className="marker-pulse" 
      />
      <circle 
        cx="0" 
        cy="0" 
        r="20" 
        fill={backgroundColor} 
        stroke="white" 
        strokeWidth="2" 
      />
      <foreignObject x="-12" y="-12" width="24" height="24">
        <div className="flex items-center justify-center w-full h-full">
          {getIcon()}
        </div>
      </foreignObject>
    </g>
  );
};

export default Marker;
