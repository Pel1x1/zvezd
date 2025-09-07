
declare global {
  interface Window {
    travelline?: any;
    TL?: any;
  }
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  link: string;
  description: string;
  price: number;
  features: string[];
  photos: string[];
  amenities: {
    name: string;
    icon: string;
  }[];
  details: {
    size: string;
    capacity: number;
    bedType: string;
    view: string;
  };
}




export interface RoomDetailsProps {
  room: Room;
}

export interface RoomFeatureProps {
  room: Room;
}

export interface RoomPhotosProps {
  room: Room;
} 

export interface RoomHeroProps {
  room: Room;
} 