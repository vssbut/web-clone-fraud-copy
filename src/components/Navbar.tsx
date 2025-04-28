
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue">ФрауДЭксперт</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-gray hover:text-blue transition-colors">
              Главная
            </Link>
            <Link to="/services" className="font-medium text-gray hover:text-blue transition-colors">
              Услуги
            </Link>
            <Link to="/contact" className="font-medium text-gray hover:text-blue transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild className="bg-blue hover:bg-blue-light">
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Связаться с нами</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray hover:text-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-gray hover:text-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray hover:text-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button asChild className="w-full bg-blue hover:bg-blue-light">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  <span>Связаться с нами</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
