import { Target, Users, Award, TrendingUp } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Довольных клиентов" },
    { icon: Award, value: "10 лет", label: "На рынке Чехии" },
    { icon: TrendingUp, value: "98%", label: "Клиенты остаются с нами" },
    { icon: Target, value: "24 часа", label: "Среднее время оформления" }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">
              О компании Bezproblem
            </h2>
            <div className="space-y-4 text-primary-foreground/90">
              <p className="text-lg">
                Мы специализируемся на предоставлении услуг виртуальных сідел для русскоязычных предпринимателей в Чехии с 2015 года.
              </p>
              <p>
                Наша миссия — сделать процесс открытия и ведения бизнеса в Чехии максимально простым и прозрачным. Мы понимаем все сложности, с которыми сталкиваются иностранные предприниматели, и предлагаем комплексные решения.
              </p>
              <p>
                За 10 лет работы мы помогли более чем 500 компаниям начать свой бизнес в Чехии. Наши клиенты ценят нас за честность, прозрачность цен, профессионализм и поддержку на русском языке.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-xl font-playfair">Наши ценности:</h3>
              <ul className="space-y-2">
                {[
                  "Честность и прозрачность во всём",
                  "Индивидуальный подход к каждому клиенту",
                  "Соблюдение всех законов и норм",
                  "Быстрота и качество услуг"
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold font-playfair mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-accent/10 backdrop-blur rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Наши достижения
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold text-lg mb-1">2015</div>
                <div className="text-primary-foreground/80">Год основания компании</div>
              </div>
              <div>
                <div className="font-bold text-lg mb-1">4 города</div>
                <div className="text-primary-foreground/80">Локации в Чехии</div>
              </div>
              <div>
                <div className="font-bold text-lg mb-1">100%</div>
                <div className="text-primary-foreground/80">Легальность всех услуг</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
