
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would submit the form data to a server here
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Связаться с нами</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите ваш email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Введите ваш телефон"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Введите ваше сообщение"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue hover:bg-blue-light">
                  Отправить сообщение
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-light p-3 rounded-full text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Телефон</h4>
                  <p>+7 (495) 123-45-67</p>
                  <p>+7 (800) 123-45-67 (бесплатно по России)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-light p-3 rounded-full text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>info@fraudexpert.ru</p>
                  <p>support@fraudexpert.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-light p-3 rounded-full text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Адрес</h4>
                  <p>Москва, ул. Ленина, д. 10, офис 505</p>
                  <p>Время работы: Пн-Пт 9:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-light p-3 rounded-full text-white">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Представительства</h4>
                  <p>Санкт-Петербург, ул. Невская, д. 1</p>
                  <p>Екатеринбург, ул. Уральская, д. 5</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-light rounded-lg border border-blue-light">
              <p className="font-bold">Экстренная связь 24/7:</p>
              <p className="text-red text-lg font-medium">+7 (999) 111-22-33</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
