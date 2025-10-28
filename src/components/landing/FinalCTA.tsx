import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FinalCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent/20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
              Готовы начать свой бизнес в Чехии?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Оставьте заявку, и мы свяжемся с вами в течение 30 минут
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-playfair mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="final-name" className="text-primary-foreground">Ваше имя *</Label>
                  <Input
                    id="final-name"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 bg-background text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="final-phone" className="text-primary-foreground">Телефон *</Label>
                  <Input
                    id="final-phone"
                    type="tel"
                    required
                    placeholder="+420 123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 bg-background text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="final-email" className="text-primary-foreground">Email</Label>
                  <Input
                    id="final-email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 bg-background text-foreground"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Отправить заявку
                </Button>

                <p className="text-xs text-primary-foreground/70 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="space-y-6">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Или свяжитесь с нами напрямую:</h4>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+420123456789"
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Позвонить сейчас</div>
                      <div className="text-sm text-primary-foreground/80">+420 123 456 789</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/420123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Написать в WhatsApp</div>
                      <div className="text-sm text-primary-foreground/80">Ответим за 15 минут</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@bezproblem.cz"
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Написать на Email</div>
                      <div className="text-sm text-primary-foreground/80">info@bezproblem.cz</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-accent/20 backdrop-blur rounded-2xl p-6 text-center">
                <p className="font-bold text-lg mb-2">🎁 Специальное предложение</p>
                <p className="text-sm text-primary-foreground/90">
                  При заказе в течение 24 часов — скидка 10% на первый год обслуживания!
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Без скрытых платежей</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>100% легально</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Работаем с 2015 года</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>500+ довольных клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
