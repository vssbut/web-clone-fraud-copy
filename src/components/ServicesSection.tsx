
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Помощь жертвам мошенников",
    description: "Комплексная помощь в возврате денежных средств, защите прав и интересов пострадавших от действий мошенников.",
    icon: "💼"
  },
  {
    title: "Корпоративное расследование",
    description: "Проведение внутренних расследований фактов хищений и мошенничества в компаниях любого масштаба.",
    icon: "🔍"
  },
  {
    title: "Проверка контрагентов",
    description: "Проверка благонадежности и правовой чистоты потенциальных партнеров и контрагентов вашего бизнеса.",
    icon: "📊"
  },
  {
    title: "Судебное представительство",
    description: "Представление интересов клиента в судах всех инстанций по делам, связанным с мошенничеством и экономическими преступлениями.",
    icon: "⚖️"
  },
  {
    title: "Информационная безопасность",
    description: "Защита от кибермошенничества, фишинга, взломов и других видов цифровых угроз.",
    icon: "🔐"
  },
  {
    title: "Возврат средств",
    description: "Возврат денежных средств, похищенных при помощи банковских и финансовых мошеннических схем.",
    icon: "💰"
  }
];

const ServicesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <p className="text-center text-gray opacity-80 max-w-3xl mx-auto mb-12">
          Мы предлагаем комплексные решения по борьбе с мошенничеством и защите от экономических преступлений. Наши эксперты помогут в самых сложных ситуациях.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue hover:bg-blue-light">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
