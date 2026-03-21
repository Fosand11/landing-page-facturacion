import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
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
    <section className="min-h-screen flex items-center px-4 sm:px-6 py-20 md:py-0 bg-gradient-to-br from-[#0063F9] via-[#0063F9] to-[#00A3FF] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A3FF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#4D9FFF]" />
              <span className="text-xs sm:text-sm font-medium">Tu aliado en transformación digital</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <motion.span 
                className="inline-block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                SwiftDataWorks
              </motion.span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Facturación electrónica y automatización de procesos
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transformamos tus procesos manuales en procesos automatizados. 
              Desde organizar tus datos hasta facturar sin complicaciones.
            </motion.p>

            {/* Modern Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={() => handleScrollTo('#contact')}
                className="group relative bg-white text-[#0063F9] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-white/20 transition-all overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Demo
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => handleScrollTo('#features')}
                className="group relative backdrop-blur-sm bg-white/10 text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Ver servicios
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div 
            className="relative order-1 md:order-2 max-w-sm mx-auto md:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img 
                src="/logo-symbol.png" 
                alt="Swift DataWorks" 
                className="w-full h-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              
              {/* Floating cards */}
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-[#0063F9] font-bold text-2xl sm:text-3xl">99.9%</div>
                <div className="text-gray-600 text-xs sm:text-sm">Uptime</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-[#00A3FF] to-[#4D9FFF] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="font-bold text-2xl sm:text-3xl">24/7</div>
                <div className="text-white/90 text-xs sm:text-sm">Soporte</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}