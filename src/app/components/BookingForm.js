'use client';

import { useEffect } from 'react';
import TravellineLoader from '@/app/components/TravellineLoader';

export default function SearchForm() {

  return (
    <>
    <div id="tl-booking-form" className='mt-20 mb-20' ></div>
    <TravellineLoader />
    </>
  );
}