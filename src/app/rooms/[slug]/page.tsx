// app/rooms/[slug]/page.tsx
export const dynamic = "force-dynamic";

import { rooms } from '@/lib/rooms';
import RoomDetails from '@/app/rooms/[slug]/sections/RoomDetails';
import RoomFeature from '@/app/rooms/[slug]/sections/RoomFeature';
import RoomPhotos from '@/app/rooms/[slug]/sections/RoomPhotos';
import RoomHero from "@/app/rooms/[slug]/sections/RoomHero";
import { notFound } from 'next/navigation';
import { Room } from '@/lib/types';
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getStrapiMediaUrl = (url: string) => {
  if (!url) return '';
  return `http://localhost:1337${url}`;
};

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  {/*const res = await fetch('http://localhost:1337/api/rooms?populate=*', {
    cache: 'no-store',});
  const json: { data: Room[] } = await res.json();
  const room = json.data.find(r => r.slug === slug);*/}
  if (!room) {
    notFound();
  }

  // Преобразуем поле photos
  const formattedRoom = {
    ...room,
    photos: (room.photos || []).map((photo: any) => getStrapiMediaUrl(photo.url || photo.data?.attributes?.url)),
  };

  if (!room) {
    notFound();
  }

  return (
    <main className='bg-[#D2B6B1]'>
      <RoomHero room={room}/>
      <RoomDetails room={room} />
      <RoomFeature room={room} />
      <RoomPhotos room={room} />
    </main>
  );
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}