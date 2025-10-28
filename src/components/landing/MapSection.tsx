import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const MapSection = () => {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Где нас найти
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наш главный офис находится в самом центре Праги
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-playfair mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес офиса</h4>
                    <p className="text-muted-foreground">Dlouhá 7, Praha 1, 110 00</p>
                    <p className="text-sm text-muted-foreground mt-1">Чешская Республика</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <a href="tel:+420123456789" className="text-accent hover:underline">
                      +420 123 456 789
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Звонки и WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@bezproblem.cz" className="text-accent hover:underline">
                      info@bezproblem.cz
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение 2 часов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: по предварительной записи</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <h4 className="font-bold mb-2">💡 Полезная информация</h4>
              <p className="text-sm text-muted-foreground">
                Для личного визита рекомендуем предварительно записаться по телефону или через WhatsApp. 
                Так мы сможем уделить вам максимум внимания и подготовить все необходимые документы.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="aspect-video bg-secondary relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.6894344556614!2d14.423772776929175!3d50.08804671423654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ea3db06a1d%3A0x8e1f1e4e1e1e1e1e!2zRGxvdWjDoSA3LCAxMTAgMDAgU3Rhcsup!5e0!3m2!1sen!2scz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bezproblem office location"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold mb-2">Как добраться</h4>
              <p className="text-sm text-muted-foreground">
                🚇 Метро: станция Náměstí Republiky (линия B) — 3 минуты пешком<br />
                🚊 Трамвай: остановка Dlouhá třída (5, 8, 14) — 1 минута пешком<br />
                🚗 Парковка: платная парковка в радиусе 200 метров
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
