import Home from './home/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://zvezdny-complex.ru'),
  title: '«Звёздный» — Официальный сайт',
  description:
    'Загородный конно-спортивный комплекс «Звёздный» — гармония природы, утонченный отдых, великолепие моментов — всего в 20 км от Москвы среди хвойного леса и просторных лугов.',
  icons: [
    {
      rel: 'icon',
      url: '/logo.webp'
    }
  ],

/*
  appLinks: [
    {
      title: 'Услуги',
      url: 'https://zvezdny-complex.ru/services',
      description: 'Дополните ваше мероприятие нашими эксклюзивными услугами.'
    },
    {
      title: 'Ресторан',
      url: 'https://zvezdny-complex.ru/restaurant',
      description: 'Европейские блюда от наших талантливых поваров сделают ваш визит поистине особенным.'
    },
    {
      title: 'SPA-комплекс',
      url: 'https://zvezdny-complex.ru/spa/',
      description: 'Погрузитесь в мир релаксации и красоты с нашими эксклюзивными процедурами.'
    },
    {
      title: 'Банкетные заллы',
      url: 'https://zvezdny-complex.ru/banquethall',
      description: 'Идеальное место для проведения незабываемых мероприятий.'
    },
    {
      title: 'Мероприятия',
      url: 'https://zvezdny-complex.ru/events',
      description: 'Присоединяйтесь к нашим эксклюзивным мероприятиям. Каждое событие - это уникальная возможность насладиться особенной атмосферой и создать незабываемые воспоминания.'
    },
    {
      title: 'Проживание',
      url: 'https://zvezdny-complex.ru/accommodation/',
      description: 'Большой выбор комфортных номеров'
    }
  ],
  otherResultsUrl:
    'https://www.google.com/search?q=звездный+загородный+комплекс+site:zvezdny-complex.ru'*/
};

export default function MainPage() {
  return <Home />;
}
