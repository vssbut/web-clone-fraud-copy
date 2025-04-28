
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section bg-gray-light">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-blue-light p-1 rounded-lg">
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-light p-6 rounded-lg text-center">
                    <h3 className="text-5xl font-bold text-blue mb-2">10+</h3>
                    <p className="text-gray">лет опыта</p>
                  </div>
                  <div className="bg-gray-light p-6 rounded-lg text-center">
                    <h3 className="text-5xl font-bold text-blue mb-2">750+</h3>
                    <p className="text-gray">клиентов</p>
                  </div>
                  <div className="bg-gray-light p-6 rounded-lg text-center">
                    <h3 className="text-5xl font-bold text-blue mb-2">92%</h3>
                    <p className="text-gray">успешных дел</p>
                  </div>
                  <div className="bg-gray-light p-6 rounded-lg text-center">
                    <h3 className="text-5xl font-bold text-blue mb-2">24/7</h3>
                    <p className="text-gray">поддержка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании ФрауДЭксперт</h2>
            <p className="text-lg mb-4">
              Мы — команда профессионалов с опытом работы в сфере противодействия мошенничеству и экономическим преступлениям более 10 лет.
            </p>
            <p className="text-lg mb-6">
              Наши эксперты — бывшие сотрудники правоохранительных органов, специалисты по экономической безопасности, юристы и IT-специалисты. Мы объединили наши знания и опыт для эффективной борьбы с мошенниками и защиты интересов наших клиентов.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue hover:bg-blue-light">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
              <Button asChild variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
                <Link to="/services">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
