import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent" />
              <span className="text-xl font-bold font-playfair">Bezproblem</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Виртуальные сідла для бизнеса в Чехии с 2015 года. Надежно, легально, выгодно.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/bezproblem_cz" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Telegram"
              >
                <span className="text-sm">TG</span>
              </a>
              <a 
                href="https://wa.me/420123456789" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-sm">WA</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#pricing" className="hover:text-accent transition-colors">Цены</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a></li>
              <li><a href="#contacts" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Виртуальное сідло</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Регистрация s.r.o.</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Регистрация OSVČ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Ведение бухгалтерии</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Создание сайтов</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Dlouhá 7, Praha 1, 110 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+420123456789" className="hover:text-accent transition-colors">
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@bezproblem.cz" className="hover:text-accent transition-colors">
                  info@bezproblem.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © {currentYear} Bezproblem s.r.o. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
              <a href="#" className="hover:text-accent transition-colors">IČO: 12345678</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
