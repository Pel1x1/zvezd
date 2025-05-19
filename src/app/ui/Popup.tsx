import React from 'react';
import { HotelPOI } from '@/lib/HotelPOI';
import { MapCard, MapCardContent, MapCardHeader, MapCardTitle, MapCardDescription } from '@/app/ui/MapCard';
import { X } from 'lucide-react';
import { MapButton } from '@/app/ui/MapButton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/app/ui/dialog';

interface PopupProps {
  poi: HotelPOI | null;
  onClose: () => void;
  isHoverPopup?: boolean;
}

const HoverPopup: React.FC<PopupProps> = ({ poi, onClose }) => {
  if (!poi) return null;

  return (
    <MapCard className="w-56 absolute z-50 animate-fade-in shadow-lg">
      <MapCardHeader className="py-2 px-3">
        <MapCardTitle className="text-sm">{poi.name}</MapCardTitle>
        <MapCardDescription className="text-xs capitalize">{poi.type}</MapCardDescription>
      </MapCardHeader>
    </MapCard>
  );
};

const ClickPopup: React.FC<PopupProps> = ({ poi, onClose }) => {
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
        <div className="mt-3">
          <img 
            src={poi.image}
            alt={poi.name}
            className="w-full h-32 object-cover rounded-md opacity-70"
          />
        </div>
      </MapCardContent>
    </MapCard>
  );
};

const Popup: React.FC<PopupProps> = ({ poi, onClose, isHoverPopup = false }) => {
  if (!poi) return null;
  
  return isHoverPopup 
    ? <HoverPopup poi={poi} onClose={onClose} /> 
    : <ClickPopup poi={poi} onClose={onClose} />;
};

export default Popup;