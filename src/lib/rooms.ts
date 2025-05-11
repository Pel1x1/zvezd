import { Room } from './types';

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'BlackLux',
    name: 'Черный люкс',
    description: '«Черный» Люкс в стиле «лофт» с прекрасным видом на хвойный лес.',
    price: 15000,
    features: [
      'Панорамные окна',
      'Отдельная гостиная',
      'Джакузи',
      'Мини-кухня'
    ],
    photos: [
      '/img/BlackLux.jpg',
      '/rooms/deluxe-suite-2.jpg',
      '/rooms/deluxe-suite-3.jpg'
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
  {
    id: '2',
    slug: 'WhiteLux',
    name: 'Белый люкс',
    description: 'Роскошный «Белый» люкс предлагает исключительный комфорт для каждого гостя',
    price: 15000,
    features: [
      'Панорамные окна',
      'Отдельная гостиная',
      'Джакузи',
      'Мини-кухня'
    ],
    photos: [
      '/img/WhiteLux.jpg',
      '/rooms/deluxe-suite-2.jpg',
      '/rooms/deluxe-suite-3.jpg'
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
      'Рабочая зона',
      'Ванная комната'
    ],
    photos: [
      '/img/ComfortPlus.jpg',
      '/rooms/standard-2.jpg',
      '/rooms/standard-3.jpg'
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
      '/img/Comfort.jpg',
      '/rooms/standard-2.jpg',
      '/rooms/standard-3.jpg',
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
  }
]; 