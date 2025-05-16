
import React from 'react';
import { HotelPOI } from '@/components/ui/HotelPOI';
import { MapCard, MapCardContent, MapCardHeader, MapCardTitle, MapCardDescription } from '@/app/ui/MapCard';
import { X } from 'lucide-react';
import { MapButton } from '@/app/ui/MapButton';

interface PopupProps {
  poi: HotelPOI | null;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ poi, onClose }) => {
  if (!poi) return null;

  return (
    <MapCard className="w-72 absolute z-50 animate-fade-in">
      <MapCardHeader className="pb-2 flex flex-row justify-between items-start">
        <div>
          <MapCardTitle className="text-lg">{poi.name}</MapCardTitle>
          <MapCardDescription className="text-xs capitalize">{poi.type}</MapCardDescription>
        </div>
        <MapButton variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X size={16} />
        </MapButton>
      </MapCardHeader>
      <MapCardContent className="text-sm">
        <p>{poi.description}</p>
      </MapCardContent>
    </MapCard>
  );
};

export default Popup;
