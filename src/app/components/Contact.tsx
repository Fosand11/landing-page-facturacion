import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50370590940', '_blank');
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-6 bg-gradient-to-br from-[#0063F9] via-[#0063F9] to-[#00A3FF] flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-2xl md:text-3xl mb-16 text-white/90 font-light">
            Únete a Swift DataWorks.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="font-semibold text-white mb-2 text-lg">Email</div>
            <a href="mailto:contacto@swiftdataworks.com" className="text-white/90 hover:text-white transition-colors">
              contacto@swiftdataworks.net
            </a>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <div className="font-semibold text-white mb-2 text-lg">Teléfono</div>
            <a href="tel:+50370590940" className="text-white/90 hover:text-white transition-colors">
              +503 7059-0940
            </a>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="font-semibold text-white mb-2 text-lg">Ubicación</div>
            <div className="text-white/90">
              San Salvador, El Salvador
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={handleWhatsAppClick}
            className="group bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl inline-flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            Escríbenos por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}