import { Card, CardContent } from '@/app/ui/card';
import { Button } from "@/app/ui/Button";
import { Snowflake, Star, Gift, Calendar } from 'lucide-react';
import {CardContent as  CardContentSupport} from "@/app/ui/card";
import {Card as CardSupport} from "@/app/ui/card";
import { Button as ButtonSup } from "@/app/spa/sections/button";

const NewYear = () => {
  const programs = [
    {
      date: "30 декабря",
      description: "Заселение в уютные номера, где вас ждет приветственный сюрприз. Вечером вас ждет ужин в ресторане с программой и вокалом."
    },
    {
      date: "31 декабря", 
      description: "День, полный сюрпризов! Анимация для детей, а вечером – таинственное появление Деда Мороза и Снегурочки! Затем вас ждет Праздничный Новогодний банкет, море подарков, сюрпризов, праздничный салют и танцы-танцы-танцы!"
    },
    {
      date: "1 января",
      description: "Встречаем первый рассвет года, идем на «анти-похмельный» завтрак, участвуем в веселых народных гуляниях, заглядываем в гости в Альпак-ферму, не забываем погреться в хаммам. Вечером веселимся у Новогодней Ёлки с Дедом Морозом и Снегурочкой на детском представлении, ужинаем, поем в караоке и танцуем на дискотеке!"
    },
    {
      date: "2 января",
      description: "Вкусный завтрак и неспешный выезд с массой приятных воспоминаний."
    }
  ];

  const roomPrices = [
    { type: "Номер «Комфорт»", price: "135 000 руб." },
    { type: "Номер «Комфорт+»", price: "165 000 руб." },
    { type: "Номер «Люкс»", price: "185 000 руб." },
    { type: "Апартаменты однокомнатные", price: "210 000 руб." },
    { type: "Апартаменты двухкомнатные", price: "225 000 руб." }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: '#D2B6B1' }}>
      {/* Декоративные снежинки */}
      <div className="absolute inset-0 pointer-events-none">
        <Snowflake className="absolute top-10 left-10 text-white/20 w-16 h-16 animate-pulse" />
        <Snowflake className="absolute top-20 right-20 text-white/30 w-16 h-16 animate-pulse" />
        <Star className="absolute top-32 left-1/4 text-yellow-200/40 w-16 h-16 animate-pulse" />
        <Star className="absolute top-32 right-1/4 text-yellow-200/40 w-16 h-16 animate-pulse" />
        <Gift className="absolute top-[15rem] left-[15rem] text-red-200/30 w-16 h-16 animate-pulse" />
        <Gift className="absolute top-[15rem] right-[15rem] text-red-200/30 w-16 h-16 animate-pulse" />

        <Snowflake className="absolute top-[43rem] left-[17rem] text-white/30 w-16 h-16 animate-pulse" />
        <Star className="absolute top-[38rem] right-[17rem] text-yellow-200/40 w-16 h-16 animate-pulse" />
        <Gift className="absolute top-[50rem] right-[10rem] text-red-200/30 w-16 h-16 animate-pulse" />
        <Snowflake className="absolute top-[70rem] left-[9rem] text-white/30 w-16 h-16 animate-pulse" />
        <Gift className="absolute top-[85rem] left-[13rem] text-red-200/30 w-16 h-16 animate-pulse" />



        <Snowflake className="absolute bottom-20 left-16 text-white/25 w-16 h-16 animate-pulse" />

        <Star className="absolute bottom-[30rem] left-[10rem] text-yellow-200/30 w-16 h-16 animate-pulse" />
        <Star className="absolute bottom-40 right-20 text-yellow-200/30 w-16 h-16 animate-pulse" />

        <Star className="absolute bottom-[40rem] right-[15rem] text-yellow-200/30 w-16 h-16 animate-pulse" />
        <Snowflake className="absolute top-1/2 right-10 text-white/20 w-16 h-16 animate-pulse" />
        <Gift className="absolute bottom-[15rem] left-[15rem] text-red-200/30 w-16 h-16 animate-pulse" />
        <Gift className="absolute bottom-[15rem] right-[15rem] text-red-200/30 w-16 h-16 animate-pulse" />

      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-bold text-white mb-6 relative">
            Встречаем Новый 2026 Год
          </h2>
          <h3 className="text-xl md:text-4xl font-semibold text-white mb-4">
            в Загородном Комплексе «Звёздный»
          </h3>
          <div className="max-w-4xl mx-auto space-y-3 text-white/90 text-lg md:text-2xl">
            <p className="font-medium ">Подарите себе и близким незабываемый праздник! Не думайте о Новогодних хлопотах!</p>
            <p className="font-bold text-white">Мы всё продумали за Вас!</p>
            <p>Развлечения для детей, спокойный отдых для взрослых и моменты радости, которые вы разделите вместе!</p>
            <p className="font-semibold text-white">Целых три дня волшебства, веселья, сюрпризов, подарков и никаких забот!</p>
          </div>
        </div>

        {/* Программа праздника */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-white flex items-center justify-center gap-3 mb-3">
            <Calendar className="w-8 h-8" />
            Программа праздника
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <Card key={index} className="bg-black/2 backdrop-blur-sm border-white/20 transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{program.date}</h4>
                  <p className="text-white/90 leading-relaxed text-sm md:text-lg">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Цены */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Праздничный заезд */}
          <Card className="bg-black/2 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Праздничный заезд «Все включено»
              </h3>
              <p className="text-center text-white/80 mb-6 font-medium">
                (проживание с 30.12 по 02.01 с поздним выездом)
              </p>
              <div className="space-y-3">
                {roomPrices.map((room, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-black/5 rounded-lg border border-white/10">
                    <span className="font-medium text-white">{room.type}</span>
                    <span className="font-medium text-white">{room.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg border-l-4 border-yellow-300/50">
                <p className="text-sm text-white/90">
                  <strong>Доп. место:</strong><br />
                  Дети 6-12 лет – 24 000 руб.<br />
                  12 лет и старше – 45 000 руб.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Новогодняя ночь */}
          <Card className="bg-black/2 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                НОВОГОДНЯЯ НОЧЬ! 
              </h3>
              <p className="text-center text-white/80 mb-6 font-medium">
                31.12.2025/01.01.2026
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-black/5 rounded-lg border border-white/10">
                  <span className="font-medium text-white">Взрослый</span>
                  <span className="font-medium text-white text-xl">19 200 руб.</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/5 rounded-lg border border-white/10">
                  <span className="font-medium text-white">Ребенок (5-12 лет)</span>
                  <span className="font-medium text-white text-xl">12 200 руб.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Специальное предложение и контакты */}
        <div className="text-center space-y-6">
          <Card className="bg-black/2 backdrop-blur-sm border-red-300/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-red-200 mb-3">Специальное предложение!</h4>
              <p className="text-white/90">
                До 15.10.2025 при прямом бронировании со 100% оплатой <br />
                <span className="text-2xl font-bold text-red-200">скидка 15%</span>
              </p>
            </CardContent>
          </Card>

          <div className="text-center space-y-12 ">
          <CardSupport className="bg-black/2 backdrop-blur-sm border-white/20 text-white pb-4 pt-4 max-w-7xl mx-auto">
            <CardContentSupport className="p-8 container mx-auto text-center">
              <h3 className="text-4xl font-bold mt-[20px]"  style={{fontFamily: "ZenAntoquie"}}>Бронирование по телефону</h3>
              <p className="text-xl opacity-90 mt-[10px]"  style={{fontFamily: "RobotoL"}}>+7 985 016 80 08</p>
              <a href="tel:+79850168008" className="footer-link" style={{ display: 'inline-block', borderRadius: "15px" }}>
                <button
                    className="bg-gray-200 text-gray-900 px-[5rem] py-3 font-semibold text-[16px] md:text-[22px] shadow-md transition hover:bg-[#ffffff83] border-white border-1"
                    style={{fontFamily: "RobotoL", borderRadius: "0.5rem" }}
                >
                Забронировать
                </button>
            </a>
            </CardContentSupport>
          </CardSupport>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewYear;