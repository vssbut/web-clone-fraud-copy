
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Контакты</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Свяжитесь с нами для получения консультации или оставьте заявку, и мы вам перезвоним
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-16 bg-gray-light">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Наш офис на карте</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-video w-full bg-blue-light/20 rounded-lg flex items-center justify-center">
                <p className="text-lg text-blue">
                  [Здесь будет карта с местоположением офиса]
                </p>
                <p className="text-sm text-gray">Москва, ул. Ленина, д. 10, офис 505</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Частые вопросы</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Как начать сотрудничество с вами?</h3>
                <p className="text-gray">
                  Для начала сотрудничества достаточно связаться с нами по телефону, электронной почте или через форму обратной связи на сайте. Мы проведем первичную консультацию и обсудим дальнейшие шаги.
                </p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Какова стоимость ваших услуг?</h3>
                <p className="text-gray">
                  Стоимость услуг определяется индивидуально в зависимости от сложности дела, объема работы и сроков. После первичной консультации мы предоставим вам детальное коммерческое предложение.
                </p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Работаете ли вы в других регионах России?</h3>
                <p className="text-gray">
                  Да, мы работаем по всей России. У нас есть представительства в крупных городах, а также возможность дистанционного оказания услуг для клиентов из любого региона.
                </p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Гарантируете ли вы возврат похищенных средств?</h3>
                <p className="text-gray">
                  Мы не можем дать 100% гарантии возврата средств, так как результат зависит от множества факторов. Однако мы используем все законные методы и наш обширный опыт для максимизации ваших шансов на успех.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
