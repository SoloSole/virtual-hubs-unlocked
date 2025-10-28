import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ChevronRight, Gift } from "lucide-react";

type QuizStep = 1 | 2 | 3 | 4 | 5 | 6;

export const Quiz = () => {
  const [step, setStep] = useState<QuizStep>(1);
  const [formData, setFormData] = useState({
    businessType: "",
    location: "",
    package: "",
    additionalServices: [] as string[],
    name: "",
    phone: ""
  });

  const progress = (step / 6) * 100;

  const handleNext = () => {
    if (step < 6) {
      setStep((step + 1) as QuizStep);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Quiz completed:", formData);
    setStep(6);
  };

  const selectOption = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setTimeout(handleNext, 300);
  };

  const toggleService = (service: string) => {
    const services = formData.additionalServices.includes(service)
      ? formData.additionalServices.filter(s => s !== service)
      : [...formData.additionalServices, service];
    setFormData({ ...formData, additionalServices: services });
  };

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-4">
              <Gift className="h-5 w-5" />
              <span className="font-bold">Получите персональный расчет + скидку 10%</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Ответьте на 5 простых вопросов
            </h2>
            <p className="text-muted-foreground">
              Мы подберем оптимальный тариф и отправим персональное предложение
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Шаг {step} из 6
            </p>
          </div>

          {/* Quiz Card */}
          <Card className="p-8 shadow-xl">
            {/* Step 1: Business Type */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-playfair">Какой тип бизнеса вы планируете?</h3>
                <div className="grid gap-4">
                  {["S.r.o. (ООО)", "OSVČ (ИП)", "A.s. (АО)"].map((type) => (
                    <button
                      key={type}
                      onClick={() => selectOption("businessType", type)}
                      className="p-4 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{type}</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-playfair">В каком городе нужно сідло?</h3>
                <div className="grid gap-4">
                  {[
                    { name: "Прага 9", price: "от 302 Kč/мес" },
                    { name: "Прага 5", price: "от 302 Kč/мес" },
                    { name: "Мост", price: "от 190 Kč/мес" },
                    { name: "Карловы Вары", price: "от 190 Kč/мес" }
                  ].map((location) => (
                    <button
                      key={location.name}
                      onClick={() => selectOption("location", location.name)}
                      className="p-4 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{location.name}</div>
                          <div className="text-sm text-muted-foreground">{location.price}</div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Package */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-playfair">Какой пакет вам подходит?</h3>
                <div className="grid gap-4">
                  {[
                    { name: "BASIC", desc: "Базовые услуги, приём почты за доплату" },
                    { name: "PREMIUM", desc: "Всё включено + бесплатная обработка почты", highlight: true }
                  ].map((pkg) => (
                    <button
                      key={pkg.name}
                      onClick={() => selectOption("package", pkg.name)}
                      className={`p-4 border-2 rounded-lg hover:bg-accent/5 transition-all text-left group ${
                        pkg.highlight ? "border-accent bg-accent/5" : "border-border"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold flex items-center gap-2">
                            {pkg.name}
                            {pkg.highlight && (
                              <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                                ПОПУЛЯРНЫЙ
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{pkg.desc}</div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Additional Services */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-playfair">Нужны дополнительные услуги?</h3>
                <div className="space-y-3">
                  {[
                    "Ведение бухгалтерии",
                    "Создание веб-сайта",
                    "Регистрация плательщика НДС",
                    "Ничего дополнительного"
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 p-4 border-2 border-border rounded-lg hover:border-accent cursor-pointer transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="h-5 w-5 rounded border-border text-accent focus:ring-accent"
                      />
                      <span className="font-semibold">{service}</span>
                    </label>
                  ))}
                </div>
                <Button onClick={handleNext} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Продолжить <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-playfair mb-2">Куда отправить расчет?</h3>
                  <p className="text-muted-foreground">
                    Скидка 10% будет закреплена за вашим номером телефона
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+420 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleSubmit} 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={!formData.name || !formData.phone}
                >
                  Получить расчет и скидку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            )}

            {/* Step 6: Thank You */}
            {step === 6 && (
              <div className="text-center space-y-6 py-8">
                <div className="h-20 w-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Gift className="h-10 w-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-playfair mb-2">Отлично! Ваш промокод готов</h3>
                  <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg text-2xl font-bold font-playfair my-4">
                    SIDLO10
                  </div>
                  <p className="text-muted-foreground">
                    Скидка 10% закреплена за номером телефона {formData.phone}
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg">
                  <p className="font-semibold mb-2">Что дальше?</p>
                  <p className="text-sm text-muted-foreground">
                    Наш менеджер свяжется с вами в течение 30 минут для уточнения деталей 
                    и отправит персональное предложение на вашу электронную почту.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
