import { Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Header() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-horizontal.png" alt="Swift DataWorks" className="h-10" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={(e) => handleScrollTo(e, '#features')}
            className="text-gray-700 hover:text-[#0063F9] transition-colors cursor-pointer"
          >
            Características
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => handleScrollTo(e, '#benefits')}
            className="text-gray-700 hover:text-[#0063F9] transition-colors cursor-pointer"
          >
            Beneficios
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleScrollTo(e, '#pricing')}
            className="text-gray-700 hover:text-[#0063F9] transition-colors cursor-pointer"
          >
            Precios
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="text-gray-700 hover:text-[#0063F9] transition-colors cursor-pointer"
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}