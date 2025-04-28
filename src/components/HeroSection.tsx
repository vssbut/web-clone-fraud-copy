
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue text-white py-20 md:py-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Защита от мошенничества и экономических преступлений
          </h1>
          <p className="text-xl mb-8 text-white opacity-90">
            Профессиональная помощь в борьбе с мошенничеством любой сложности. Мы поможем вернуть ваши деньги и защитить интересы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red hover:bg-opacity-90">
              <Link to="/contact">Бесплатная консультация</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue">
              <Link to="/services">Наши услуги</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
