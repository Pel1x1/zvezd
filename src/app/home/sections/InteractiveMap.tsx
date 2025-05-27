
import React, { useState, useRef, useEffect } from 'react';
import Marker from '@/app/ui/Marker';
import Popup from '@/app/ui/Popup';
import { HotelPOI, hotelPoints } from '@/lib/HotelPOI';
import { cn } from '@/lib/utils';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { MapButton } from '@/app/ui/MapButton';

interface InteractiveMapProps {
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ className }) => {
  const [selectedPOI, setSelectedPOI] = useState<HotelPOI | null>(null);
  const [hoverPOI, setHoverPOI] = useState<HotelPOI | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [hoverPopupPosition, setHoverPopupPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMarkerClick = (poi: HotelPOI) => {
    setSelectedPOI(poi);
    setHoverPOI(null);
    // Calculate position for popup
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const x = (poi.x / 1920) * svgRect.width;
      const y = (poi.y / 900) * svgRect.height;
      
      setPopupPosition({ 
        x: x > svgRect.width / 2 ? x - 280 : x + 20, 
        y: y > svgRect.height / 2 ? y - 150 : y 
      });
    }
  };
  const handleMarkerHover = (poi: HotelPOI) => {
    if (selectedPOI) return; // Не показываем hover если открыт popup по клику

    setHoverPOI(poi);
    
    // Calculate position for hover popup
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const x = (poi.x / 1920) * svgRect.width;
      const y = (poi.y / 900) * svgRect.height;
      
      setHoverPopupPosition({ 
        x: x > svgRect.width / 2 ? x - 240 : x + 20, 
        y: y > svgRect.height / 2 ? y - 90 : y 
      });
    }
  };

  const handleMarkerLeave = () => {
    setHoverPOI(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mapContainerRef.current && 
        !mapContainerRef.current.contains(event.target as Node) &&
        selectedPOI
      ) {
        setSelectedPOI(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedPOI]);

  return (
    <div className={cn("hotel-map-container h-full w-[95%] ml-[2.5%] mr-[2.5%] mt-[100px] mb-[150px]", className)} ref={mapContainerRef}>
      <div className="hotel-map" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <svg 
          style={{borderRadius: "10px"}} 
          className="w-full h-auto" 
          viewBox="0 0 1920 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          ref={svgRef}
        >
          <image 
            href="/img/map-summer.webp" 
            width="1920" 
            height="900" 
            preserveAspectRatio="xMidYMid meet"
          />

          {hotelPoints.map(poi => (
            <g transform={`translate(${poi.x}, ${poi.y})`} key={poi.id} >
              <Marker 
                poi={poi} 
                onClick={handleMarkerClick} 
                onMouseEnter={handleMarkerHover}
                onMouseLeave={handleMarkerLeave}
              />
            </g>
          ))}
        </svg>

        {selectedPOI && (
          <div 
            style={{ 
              position: 'absolute', 
              left: `${popupPosition.x}px`, 
              top: `${popupPosition.y}px`,
              transform: `scale(${1/scale})`,
              transformOrigin: 'top left'
            }}
          >
            <Popup poi={selectedPOI} onClose={() => setSelectedPOI(null)} />
          </div>
        )}

        {hoverPOI && !selectedPOI && (
          <div 
            style={{ 
              position: 'absolute', 
              left: `${hoverPopupPosition.x}px`, 
              top: `${hoverPopupPosition.y}px`,
              transform: `scale(${1/scale})`,
              transformOrigin: 'top left'
            }}
          >
            <Popup poi={hoverPOI} onClose={() => setHoverPOI(null)} isHoverPopup={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
