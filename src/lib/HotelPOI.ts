
export interface HotelPOI {
  id: number;
  type: 'room' | 'restaurant' | 'pool' | 'spa' | 'parking' | 'reception' | 'conference' | 'sport';
  name: string;
  description: string;
  image: string;
  x: number;
  y: number;
}

export const hotelPoints: HotelPOI[] = [
  {
    id: 1,
    type: 'room',
    name: 'Стандартный номер',
    description: 'Комфортабельный номер с видом на лес',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 295,
    y: 150
  },
  {
    id: 2,
    type: 'room',
    name: 'Люкс апартаменты',
    description: 'Просторные апартаменты для семейного отдыха',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 425,
    y: 100
  },
  {
    id: 3,
    type: 'restaurant',
    name: 'Ресторан "Лесной"',
    description: 'Изысканная кухня с видом на природу',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 455,
    y: 180
  },
  {
    id: 4,
    type: 'pool',
    name: 'Открытый бассейн',
    description: 'Бассейн с подогревом и зоной отдыха',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 590,
    y: 200
  },
  {
    id: 5,
    type: 'spa',
    name: 'СПА центр',
    description: 'Различные виды массажа и спа-процедур',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 612,
    y: 130
  },
  {
    id: 6,
    type: 'sport',
    name: 'Теннисный корт',
    description: 'Профессиональный корт с освещением',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 545,
    y: 50
  },
  {
    id: 7,
    type: 'sport',
    name: 'Волейбольная площадка',
    description: 'Площадка для пляжного волейбола',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 810,
    y: 50
  },
  {
    id: 8,
    type: 'room',
    name: 'Президентский номер',
    description: 'Эксклюзивный номер с панорамным видом',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 850,
    y: 80
  },
  {
    id: 9,
    type: 'room',
    name: 'Семейный номер',
    description: 'Просторный номер для всей семьи',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 800,
    y: 180
  },
  {
    id: 11,
    type: 'reception',
    name: 'Главная рецепция',
    description: 'Регистрация и информация',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 930,
    y: 250
  },
  {
    id: 12,
    type: 'room',
    name: 'Люкс с террасой',
    description: 'Номер с собственной террасой и джакузи',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1190,
    y: 350
  },
  {
    id: 13,
    type: 'conference',
    name: 'Конференц-зал',
    description: 'Современный зал для мероприятий',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1310,
    y: 400
  },
  {
    id: 14,
    type: 'restaurant',
    name: 'Кафе "У озера"',
    description: 'Легкие закуски и напитки у воды',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1195,
    y: 120
  },
  {
    id: 15,
    type: 'pool',
    name: 'Крытый бассейн',
    description: 'Бассейн с подогревом и сауной',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1295,
    y: 153
  },
  {
    id: 16,
    type: 'sport',
    name: 'Спортивная площадка',
    description: 'Многофункциональная спортивная площадка',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1678,
    y: 220
  },
  {
    id: 17,
    type: 'parking',
    name: 'Парковка A',
    description: 'Охраняемая парковка для гостей',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1790,
    y: 350
  },
  {
    id: 18,
    type: 'parking',
    name: 'Парковка B',
    description: 'Дополнительная парковка',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1768,
    y: 450
  },
  {
    id: 19,
    type: 'room',
    name: 'Коттедж',
    description: 'Отдельный коттедж для уединенного отдыха',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1780,
    y: 560
  },
  {
    id: 20,
    type: 'restaurant',
    name: 'Ресторан "Панорама"',
    description: 'Видовой ресторан с террасой',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1550,
    y: 736
  },
  {
    id: 21,
    type: 'room',
    name: 'Двухместный номер',
    description: 'Комфортабельный номер для двоих',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 470,
    y: 60
  },
  {
    id: 22,
    type: 'room',
    name: 'Апартаменты Премиум',
    description: 'Премиальные апартаменты с кухней',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 990,
    y: 300
  },
  {
    id: 23,
    type: 'room',
    name: 'Стандартный номер с балконом',
    description: 'Номер с видом на окрестности',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1050,
    y: 350
  },
  {
    id: 24,
    type: 'room',
    name: 'Номер Делюкс',
    description: 'Улучшенный номер повышенного комфорта',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",

    x: 1090,
    y: 370
  },
  {
    id: 25,
    type: 'spa',
    name: 'Массажный кабинет',
    description: 'Различные виды терапевтического массажа',
    image:"https://downloader.disk.yandex.ru/preview/1529ae4f73598a3ecae8014c0a2572c46f8cd1b46c217e65eed4e7c4fcf64358/682b987c/uywWHJ-U_uKthLTJRIhlM3U3NH0b7CYjFGDU5GS70Ma9VWk18KA76pzFXJFVSw_et9NgZo8eUPMRdDgG1pSyOg%3D%3D?uid=0&filename=2025-05-19%2019-45-30.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048",
    x: 365,
    y: 70
  }
];
