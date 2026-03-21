import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaComments } from "react-icons/fa";

const FloatingContactUltimate = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const phoneNumber = "7995297687";
  const whatsappNumber = "917995297687";

  // Auto open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-2 z-[999] flex flex-col items-end gap-3"
    >
      {/* Contact Buttons */}
      <AnimatePresence>
        {open && (
          <>
            {/* Call */}
            <motion.a
              href={`tel:${phoneNumber}`}
              initial={{ opacity: 0, y: 20, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.05 }}
              className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg"
            >
              <FaPhoneAlt className="text-white text-sm" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
            >
              <FaWhatsapp className="text-white text-lg" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-xl"
      >
        <FaComments className="text-white text-lg" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingContactUltimate;
