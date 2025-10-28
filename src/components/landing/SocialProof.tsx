import { MessageCircle, Users } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-playfair mb-2">
              Присоединяйтесь к нашему сообществу
            </h3>
            <p className="text-muted-foreground">
              Общайтесь с другими предпринимателями и получайте полезные советы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Telegram */}
            <a
              href="https://t.me/bezproblem_cz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-colors">
                  <MessageCircle className="h-8 w-8 text-[#0088cc]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">Telegram канал</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Новости, советы и акции для предпринимателей
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">1,200+ подписчиков</span>
                  </div>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/420123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="h-8 w-8 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Быстрая консультация и поддержка
                  </p>
                  <div className="text-sm font-semibold text-[#25D366]">
                    Ответим в течение 15 минут
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              📱 Подпишитесь на наши соцсети, чтобы первыми узнавать об акциях и специальных предложениях
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
