import { Target, Users, Award, TrendingUp } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import officeBuilding from "@/assets/office-building.jpg";

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
        {/* Team Photo Header */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={teamPhoto} 
              alt="Команда Bezproblem - профессионалы в области регистрации бизнеса" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Команда Bezproblem
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Профессионалы с опытом работы более 10 лет
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair">
              О компании
            </h3>
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
              <h4 className="font-bold text-xl font-playfair">Наши ценности:</h4>
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
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={officeBuilding} 
              alt="Офис Bezproblem в Праге" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
            <div className="relative p-8 text-center">
              <h4 className="text-2xl font-bold font-playfair mb-4">
                Наши достижения
              </h4>
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
      </div>
    </section>
  );
};
