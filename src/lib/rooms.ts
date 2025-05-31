import { Room } from './types';

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'BlackLux',
    name: 'Черный люкс',
    description: '«Черный» Люкс в стиле «лофт» с прекрасным видом на хвойный лес.',
    price: 15000,
    features: [
    'Ванна с панорамным видом',
    'Дизайн в тёмных тонах',
    'Балкон с красивым видом'
    ],
    photos: [
      '/img/rooms/BlackLux/BlackLux.webp',
      '/img/rooms/BlackLux/BlackLux-11.jpg',
      '/img/rooms/BlackLux/BlackLux-2.jpg',

      '/img/rooms/BlackLux/BlackLux-3.jpg',
      '/img/rooms/BlackLux/BlackLux-4.jpg',
      '/img/rooms/BlackLux/BlackLux-5.jpg',

      '/img/rooms/BlackLux/BlackLux-6.jpg',
      '/img/rooms/BlackLux/BlackLux-12.jpg',
      '/img/rooms/BlackLux/BlackLux-7.jpg',

      '/img/rooms/BlackLux/BlackLux-8.jpg',
      '/img/rooms/BlackLux/BlackLux-9.jpg',
      '/img/rooms/BlackLux/BlackLux-10.jpg',

      '/img/rooms/BlackLux/BlackLux-13.jpg',

    ],
    amenities: [
      { name: 'Wi-Fi', icon: 'wifi' },
      { name: 'Кондиционер', icon: 'ac' },
      { name: 'Мини-бар', icon: 'minibar' },
      { name: 'Сейф', icon: 'safe' }
    ],
    details: {
      size: '35 м²',
      capacity: 2,
      bedType: 'King Size',
      view: 'Хвойный лес'
    }
  },
  {
     id: '2',
    slug: 'WhiteLux',
    name: 'Белый люкс',
    description: 'Роскошный «Белый» люкс предлагает исключительный комфорт для каждого гостя',
    price: 15000,
    features: [
      'Ванна с панорамным видом',
      'Дизайн в светлых тонах',
      'Теплый пол',
    ],
    photos: [
      '/img/rooms/WhiteLux/WhiteLux.webp',
      '/img/rooms/WhiteLux/WhiteLux-2.webp',
      '/img/rooms/WhiteLux/WhiteLux-3.webp',

      '/img/rooms/WhiteLux/WhiteLux-4.webp',
      '/img/rooms/WhiteLux/WhiteLux-5.webp',
      '/img/rooms/WhiteLux/WhiteLux-6.webp',

      '/img/rooms/WhiteLux/WhiteLux-7.webp',
      '/img/rooms/WhiteLux/WhiteLux-8.webp',
      '/img/rooms/WhiteLux/WhiteLux-9.webp',

      '/img/rooms/WhiteLux/WhiteLux-10.webp',
      '/img/rooms/WhiteLux/WhiteLux-11.webp',
      '/img/rooms/WhiteLux/WhiteLux-12.webp',
    ],
    amenities: [
      { name: 'Wi-Fi', icon: 'wifi' },
      { name: 'Кондиционер', icon: 'ac' },
      { name: 'Мини-бар', icon: 'minibar' },
      { name: 'Сейф', icon: 'safe' }
    ],
    details: {
      size: '35 м²',
      capacity: 2,
      bedType: 'King Size',
      view: 'Городской'
    }
  },
  {
    id: '3',
    slug: 'ComfortPlus',
    name: 'Комфорт +',
    description: 'Просторный однокомнатный номер',
    price: 8000,
    features: [
      'Комфортная кровать',
      'Ванная комната'
    ],
    photos: [
      '/img/rooms/ComfortPlus/ComfortPlus.webp',
      '/img/rooms/ComfortPlus/ComfortPlus-3.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-4.jpg',

      '/img/rooms/ComfortPlus/ComfortPlus-5.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-6.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-7.jpg',

      '/img/rooms/ComfortPlus/ComfortPlus-8.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-9.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-10.jpg',

      '/img/rooms/ComfortPlus/ComfortPlus-14.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-15.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-16.jpg',

      '/img/rooms/ComfortPlus/ComfortPlus-11.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-12.jpg',
      '/img/rooms/ComfortPlus/ComfortPlus-13.jpg',
    ],
    amenities: [
      { name: 'Wi-Fi', icon: 'wifi' },
      { name: 'Кондиционер', icon: 'ac' },
      { name: 'Телевизор', icon: 'tv' }
    ],
    details: {
      size: '25 м²',
      capacity: 1,
      bedType: 'Queen Size',
      view: 'Внутренний двор'
    }
  },
  {
    id: '4',
    slug: 'Comfort',
    name: 'Комфорт',
    description: 'Комфорт - уютный номер, выполненный в современном стиле.',
    price: 8000,
    features: [
      'Комфортная кровать',
      'Рабочая зона',
      'Ванная комната'
    ],
    photos: [
      '/img/rooms/Comfort/Comfort.webp',
      '/img/rooms/Comfort/Comfort-2.jpg',
      '/img/rooms/Comfort/Comfort-3.jpg',

      '/img/rooms/Comfort/Comfort-4.jpg',
      '/img/rooms/Comfort/Comfort-6.jpg',
      '/img/rooms/Comfort/Comfort-5.jpg',


      '/img/rooms/Comfort/Comfort-7.jpg',
      '/img/rooms/Comfort/Comfort-8.jpg',
      '/img/rooms/Comfort/Comfort-9.jpg',
    ],
    amenities: [
      { name: 'Wi-Fi', icon: 'wifi' },
      { name: 'Кондиционер', icon: 'ac' },
      { name: 'Телевизор', icon: 'tv' }
    ],
    details: {
      size: '25 м²',
      capacity: 1,
      bedType: 'Queen Size',
      view: 'Внутренний двор'
    }
  },
  {
    id: '5',
    slug: 'shalle',
    name: 'Апартаменты',
    description: 'Апартаменты Берёзки',
    price: 15000,
    features: [
      'Панорамные окна',
      'Отдельная гостиная',
      'Мини-кухня'
    ],
    photos: [
      '/img/rooms/Shalle/shalle.jpg',
      '/img/rooms/Shalle/shalle-2.jpg',
      '/img/rooms/Shalle/shalle-3.jpg',

      '/img/rooms/Shalle/shalle-3.jpg',
      '/img/rooms/Shalle/shalle-4.jpg',
      '/img/rooms/Shalle/shalle-5.jpg',

      '/img/rooms/Shalle/shalle-11.jpg',
      '/img/rooms/Shalle/shalle-12.jpg',
      '/img/rooms/Shalle/shalle-13.jpg',

      '/img/rooms/Shalle/shalle-14.jpg',
      '/img/rooms/Shalle/shalle-15.jpg',
      '/img/rooms/Shalle/shalle-16.jpg',
      
      '/img/rooms/Shalle/shalle-6.jpg',
      '/img/rooms/Shalle/shalle-10.jpg',
      '/img/rooms/Shalle/shalle-9.jpg',

      '/img/rooms/Shalle/shalle-17.jpg',
      '/img/rooms/Shalle/shalle-18.jpg',
      '/img/rooms/Shalle/shalle-19.jpg',


    ],
    amenities: [
      { name: 'Wi-Fi', icon: 'wifi' },
      { name: 'Кондиционер', icon: 'ac' },
      { name: 'Мини-бар', icon: 'minibar' },
      { name: 'Сейф', icon: 'safe' }
    ],
    details: {
      size: '45 м²',
      capacity: 2,
      bedType: 'King Size',
      view: 'Хвойный лес'
    }
  },
]; 