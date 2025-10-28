import { Check, X } from "lucide-react";

export const Comparison = () => {
  const features = [
    { feature: "Согласие собственника недвижимости", us: true, others: false },
    { feature: "Фиксированная цена без сюрпризов", us: true, others: false },
    { feature: "Русскоязычная поддержка 24/7", us: true, others: false },
    { feature: "Регистрация за 24 часа", us: true, others: false },
    { feature: "Табличка на здании включена", us: true, others: "За доплату" },
    { feature: "Приём и обработка почты", us: true, others: "За доплату" },
    { feature: "Помощь в открытии банковского счета", us: true, others: false },
    { feature: "Консультация по ведению бизнеса", us: true, others: false },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Почему клиенты выбирают Bezproblem?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексное решение, в отличие от других провайдеров виртуальных сідел
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold">Что важно при выборе сідла</th>
                  <th className="px-6 py-4 text-center font-semibold bg-accent/10">
                    <div className="font-playfair text-lg">Bezproblem</div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">Другие компании</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">{item.feature}</td>
                    <td className="px-6 py-4 bg-accent/5">
                      <div className="flex justify-center">
                        {item.us === true ? (
                          <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                            <Check className="h-5 w-5 text-accent-foreground" />
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">{item.us}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {item.others === true ? (
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                            <Check className="h-5 w-5 text-muted-foreground" />
                          </div>
                        ) : item.others === false ? (
                          <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">{item.others}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Данные основаны на анализе предложений топ-5 конкурентов на рынке Чехии
          </p>
        </div>
      </div>
    </section>
  );
};
