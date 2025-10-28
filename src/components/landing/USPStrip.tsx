import { Shield, Clock, FileCheck, MessageCircle, Coins } from "lucide-react";

export const USPStrip = () => {
  const usps = [
    {
      icon: MessageCircle,
      title: "Русскоязычная поддержка",
      description: "Общение на вашем языке"
    },
    {
      icon: Coins,
      title: "Фиксированная цена",
      description: "Никаких скрытых платежей"
    },
    {
      icon: Clock,
      title: "Регистрация за 24 часа",
      description: "Быстрое оформление"
    },
    {
      icon: FileCheck,
      title: "Согласие собственника",
      description: "Все документы включены"
    },
    {
      icon: Shield,
      title: "Полная легальность",
      description: "100% законная регистрация"
    }
  ];

  return (
    <section className="py-8 bg-accent/10 border-y border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {usps.map((usp, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <usp.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-sm">{usp.title}</h3>
              <p className="text-xs text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
