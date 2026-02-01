import { Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <img src="/logo-white.png" alt="Swift DataWorks" className="h-10 mb-4" />
            <p className="text-gray-400 leading-relaxed">
              La solución de facturación electrónica más confiable y fácil de usar del mercado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#features'); }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#benefits'); }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#pricing'); }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Precios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Swift DataWorks. Todos los derechos reservados.
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E4405F] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0A66C2] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}