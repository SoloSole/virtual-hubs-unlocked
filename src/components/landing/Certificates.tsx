import { Shield, FileCheck, Award, Building } from "lucide-react";
import documentsImage from "@/assets/documents.jpg";

export const Certificates = () => {
  const certificates = [
    {
      icon: Shield,
      title: "Лицензия на ведение деятельности",
      description: "Официальная регистрация в торговом реестре Чехии"
    },
    {
      icon: FileCheck,
      title: "Согласие собственника",
      description: "Нотариально заверенное согласие на использование адреса"
    },
    {
      icon: Award,
      title: "Сертификат качества ISO",
      description: "Международный стандарт качества услуг"
    },
    {
      icon: Building,
      title: "Член торговой палаты",
      description: "Состоим в Чешской торговой палате с 2015 года"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Лицензии и сертификаты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы работаем полностью легально и имеем все необходимые разрешения
          </p>
        </div>

        {/* Documents Image */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={documentsImage} 
              alt="Официальные документы и сертификаты Bezproblem" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <cert.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Все наши услуги соответствуют законодательству Чешской Республики
          </p>
        </div>
      </div>
    </section>
  );
};
