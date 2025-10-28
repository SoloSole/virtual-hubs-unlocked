import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const locations = [
    {
      city: "Прага 9",
      district: "Praha 9",
      basic: {
        monthly: 302,
        yearly: 3630,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — 100 Kč/письмо",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Праге 9"
        ],
        vat: "с НДС"
      },
      premium: {
        monthly: 350,
        yearly: 4200,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — бесплатно",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Праге 9",
          "Отправка почты 1 раз в месяц — бесплатно"
        ],
        vat: "с НДС"
      }
    },
    {
      city: "Прага 5",
      district: "Praha 5",
      basic: {
        monthly: 302,
        yearly: 3630,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — 100 Kč/письмо",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Праге 5"
        ],
        vat: "с НДС"
      },
      premium: {
        monthly: 350,
        yearly: 4200,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — бесплатно",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Праге 5",
          "Отправка почты 1 раз в месяц — бесплатно"
        ],
        vat: "с НДС"
      }
    },
    {
      city: "Мост",
      district: "Most",
      basic: {
        monthly: 190,
        yearly: 2280,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — 100 Kč/письмо",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Мост"
        ],
        vat: "не плательщик НДС"
      },
      premium: {
        monthly: 230,
        yearly: 2760,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — бесплатно",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Мост",
          "Отправка почты 1 раз в месяц — бесплатно"
        ],
        vat: "не плательщик НДС"
      }
    },
    {
      city: "Карловы Вары",
      district: "Karlovy Vary",
      basic: {
        monthly: 190,
        yearly: 2280,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — 100 Kč/письмо",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Карловых Варах"
        ],
        vat: "не плательщик НДС"
      },
      premium: {
        monthly: 240,
        yearly: 2880,
        features: [
          "Согласие собственника недвижимости",
          "Приём и сканирование почты — бесплатно",
          "Табличка с названием компании на здании и почтовом ящике",
          "Подходит для s.r.o., OSVČ, a.s.",
          "Доступный и престижный адрес в Карловых Варах",
          "Отправка почты 1 раз в месяц — бесплатно"
        ],
        vat: "не плательщик НДС"
      }
    }
  ];

  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Прозрачные цены на виртуальные сідла
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую локацию и тариф. Все цены фиксированы, без скрытых платежей
          </p>
        </div>

        <div className="space-y-16">
          {locations.map((location, locationIndex) => (
            <div key={locationIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold font-playfair">{location.city}</h3>
                <p className="text-muted-foreground">{location.district}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* BASIC Plan */}
                <Card className="p-8 border-2 hover:border-primary transition-all hover:shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2">BASIC</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">от</span>
                        <span className="text-4xl font-bold font-playfair">{location.basic.monthly} Kč</span>
                        <span className="text-muted-foreground">/ месяц</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {location.basic.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 space-y-4">
                      <Button onClick={scrollToQuiz} className="w-full bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        {location.basic.yearly} Kč в год ({location.basic.vat})
                      </p>
                    </div>
                  </div>
                </Card>

                {/* PREMIUM Plan */}
                <Card className="p-8 border-2 border-accent hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    ПОПУЛЯРНЫЙ
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2">PREMIUM</h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-muted-foreground">от</span>
                        <span className="text-4xl font-bold font-playfair">{location.premium.monthly} Kč</span>
                        <span className="text-muted-foreground">/ месяц</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {location.premium.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 space-y-4">
                      <Button onClick={scrollToQuiz} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Заказать
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        {location.premium.yearly} Kč в год ({location.premium.vat})
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
            <h4 className="font-bold mb-2">🎁 Дополнительные услуги</h4>
            <p className="text-sm text-muted-foreground">
              Ведение бухгалтерии от 2 000 Kč/месяц • Создание сайта от 15 000 Kč • Регистрация плательщика НДС от 5 000 Kč
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
