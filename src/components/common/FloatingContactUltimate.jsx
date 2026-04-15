import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactUltimate = () => {
  const phoneNumber = "8247054254";
  const whatsappNumber = "918247054254";

  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // Auto show after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setShowBubble(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed bottom-4 right-3 sm:bottom-6 sm:right-5 z-[999] flex flex-col items-end gap-3"
        >
          {/* Chat Bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/90 backdrop-blur-md text-gray-800 text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg mr-2"
              >
                Hi 👋 Need help?
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons Container */}
          <motion.div
            animate={{ y: [0, -4, 0] }} // floating effect
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-3 p-2 rounded-2xl 
            bg-white/10 backdrop-blur-lg 
            shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-white/20"
          >
            {/* Call */}
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full 
              bg-gradient-to-br from-blue-500 to-blue-700 
              flex items-center justify-center shadow-md"
            >
              <FaPhoneAlt className="text-white text-sm sm:text-lg" />

              {/* Tooltip */}
              <span
                className="hidden sm:block absolute right-16 opacity-0 group-hover:opacity-100 
              translate-x-2 group-hover:translate-x-0 transition-all duration-300 
              bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap"
              >
                Call Us
              </span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full 
              bg-gradient-to-br from-green-400 to-green-600 
              flex items-center justify-center shadow-md"
            >
              <FaWhatsapp className="text-white text-base sm:text-xl" />

              {/* Smooth Pulse */}
              <span className="absolute w-full h-full rounded-full bg-green-400 opacity-20 animate-ping"></span>

              {/* Tooltip */}
              <span
                className="hidden sm:block absolute right-16 opacity-0 group-hover:opacity-100 
              translate-x-2 group-hover:translate-x-0 transition-all duration-300 
              bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap"
              >
                WhatsApp Chat
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactUltimate;
