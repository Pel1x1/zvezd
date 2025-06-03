// app/rooms/[slug]/page.tsx
import { rooms } from '@/lib/rooms';
import RoomDetails from '@/app/rooms/[slug]/sections/RoomDetails';
import RoomFeature from '@/app/rooms/[slug]/sections/RoomFeature';
import RoomPhotos from '@/app/rooms/[slug]/sections/RoomPhotos';
import RoomHero from "@/app/rooms/[slug]/sections/RoomHero";
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RoomPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

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