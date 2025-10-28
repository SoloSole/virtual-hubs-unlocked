import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Reviews = () => {
  const reviews = [
    {
      name: "Андрей Петров",
      position: "Основатель интернет-магазина",
      company: "E-shop Solutions s.r.o.",
      avatar: "AP",
      rating: 5,
      text: "Открывал s.r.o. для интернет-магазина. Все оформили за 2 дня, помогли с документами для банка. Особенно порадовало, что все объяснили по-русски и без лишних вопросов. Цены честные, никаких скрытых доплат не было.",
      date: "2 недели назад"
    },
    {
      name: "Елена Соколова",
      position: "Владелица салона красоты",
      company: "Beauty Studio OSVČ",
      avatar: "ЕС",
      rating: 5,
      text: "Решила начать бизнес как OSVČ. Bezproblem помогли выбрать правильную локацию и тариф. Особенно удобно, что почту сканируют и отправляют на email — не нужно каждый раз ехать в офис. Менеджер Ольга всё подробно объяснила, очень приятное общение.",
      date: "1 месяц назад"
    },
    {
      name: "Дмитрий Козлов",
      position: "IT-предприниматель",
      company: "Tech Innovations s.r.o.",
      avatar: "ДК",
      rating: 5,
      text: "Сравнивал несколько компаний, выбрал Bezproblem из-за адекватных цен и нормальной поддержки на русском. Регистрация прошла быстро, все документы для торгового реестра подготовили идеально. Теперь ещё и бухгалтерию у них веду — очень удобно, всё в одном месте.",
      date: "3 месяца назад"
    },
    {
      name: "Мария Иванова",
      position: "Фриланс-консультант",
      company: "Consulting Services OSVČ",
      avatar: "МИ",
      rating: 5,
      text: "Нужно было срочно зарегистрировать OSVČ для работы с европейскими клиентами. Обратилась в Bezproblem, всё сделали за 3 дня! Очень профессиональный подход, помогли с открытием счёта в Fio Banka. Тариф PREMIUM полностью оправдывает свою стоимость.",
      date: "2 месяца назад"
    },
    {
      name: "Алексей Смирнов",
      position: "Владелец строительной компании",
      company: "BuildPro s.r.o.",
      avatar: "АС",
      rating: 5,
      text: "Переезжал из России, нужно было открыть строительную компанию в Чехии. Друзья посоветовали Bezproblem. Не пожалел — всё чётко, быстро, без лишних вопросов. Помогли не только с сідлом, но и с регистрацией плательщика НДС. Рекомендую всем русскоязычным предпринимателям.",
      date: "4 месяца назад"
    },
    {
      name: "Ольга Николаева",
      position: "Маркетолог",
      company: "Digital Marketing OSVČ",
      avatar: "ОН",
      rating: 5,
      text: "Открывала OSVČ для работы с чешскими клиентами. Весь процесс прошёл удалённо, даже в офис не приходилось ехать. Документы отправили курьером, всё подписала дома. Цена адекватная, поддержка отзывчивая. Через год планирую перейти на s.r.o., тоже буду делать с ними.",
      date: "6 месяцев назад"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных предпринимателей уже работают с нашими виртуальными сідлами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 hover:border-accent">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent-foreground">{review.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-accent/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.text}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{review.company}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-bold">4.9/5</span>
            <span className="text-muted-foreground">средняя оценка на основе 500+ отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
};
