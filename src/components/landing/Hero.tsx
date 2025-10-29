import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

export const Hero = () => {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold font-playfair">Bezproblem</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+420123456789" className="hidden sm:flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+420 123 456 789</span>
            </a>
            <Button onClick={scrollToQuiz} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Получить расчет
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              Виртуальное сідло для вашего бизнеса в Чехии
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Юридический адрес для регистрации s.r.o., OSVČ или a.s. от 190 Kč/месяц. 
              Фиксированная цена без скрытых платежей, полный пакет документов.
            </p>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Русскоязычная поддержка</h3>
                  <p className="text-sm text-muted-foreground">Понимаем ваши потребности</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Согласие собственника</h3>
                  <p className="text-sm text-muted-foreground">Все документы включены</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Регистрация за 24 часа</h3>
                  <p className="text-sm text-muted-foreground">Быстро и без проблем</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold">Фиксированная цена</h3>
                  <p className="text-sm text-muted-foreground">Без скрытых платежей</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToQuiz} className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                Получить расчет стоимости
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPricing}>
                Смотреть цены
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>500+ довольных клиентов</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Работаем с 2015 года</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Профессиональная консультация по открытию бизнеса в Чехии" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <div className="bg-background/90 backdrop-blur rounded-xl p-6 space-y-2">
                  <div className="text-5xl font-bold font-playfair text-accent">190 Kč</div>
                  <div className="text-xl text-muted-foreground">/ месяц</div>
                  <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
                  <p className="text-lg font-semibold">Самые доступные цены в Чехии</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </section>
    </header>
  );
};
