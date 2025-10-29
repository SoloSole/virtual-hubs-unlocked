import { CheckCircle2 } from "lucide-react";
import successImage from "@/assets/success-handshake.jpg";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Оформление заказа",
      description: "Вы заполняете заявку на сайте или звоните нам. Выбираете подходящую локацию и тариф.",
      duration: "5 минут"
    },
    {
      number: "02",
      title: "Подготовка документов",
      description: "Мы готовим договор аренды сідла и согласие собственника недвижимости с нотариальным заверением.",
      duration: "24 часа"
    },
    {
      number: "03",
      title: "Подписание договора",
      description: "Отправляем вам документы на подпись (можно удаленно). После подписания вы получаете все необходимое для регистрации.",
      duration: "1-2 дня"
    },
    {
      number: "04",
      title: "Регистрация компании",
      description: "С нашими документами вы подаете заявление в торговый реестр или нотариусу для регистрации вашей компании.",
      duration: "5-7 дней"
    },
    {
      number: "05",
      title: "Открытие банковского счета",
      description: "После регистрации компании помогаем открыть банковский счет. Наш адрес принимается всеми чешскими банками.",
      duration: "3-5 дней"
    },
    {
      number: "06",
      title: "Ведение бизнеса",
      description: "Начинаете работать! Мы принимаем вашу почту, сканируем и отправляем вам. При необходимости помогаем с бухгалтерией.",
      duration: "постоянно"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Как это работает?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой процесс от заказа до начала работы вашей компании
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-accent/30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 group">
                  {/* Step number circle */}
                  <div className="relative flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl font-playfair group-hover:scale-110 transition-transform z-10 relative">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <CheckCircle2 className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-6 text-accent/50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 group-hover:border-accent group-hover:shadow-lg transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold font-playfair">{step.title}</h3>
                      <span className="text-sm font-semibold text-accent">{step.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={successImage} 
              alt="Успешное партнерство с Bezproblem" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <div className="inline-flex items-center gap-4 bg-background/90 backdrop-blur border border-accent/20 rounded-full px-8 py-4">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <p className="font-semibold">Средний срок от заказа до регистрации: 10-14 дней</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
