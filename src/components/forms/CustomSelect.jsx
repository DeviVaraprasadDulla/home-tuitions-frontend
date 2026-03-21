import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

const CustomSelect = ({
  label,
  value,
  options,
  isOpen,
  onOpen,
  onClose,
  onChange,
}) => {
  const ref = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className="relative w-full mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        onClick={onOpen}
        className="w-full border rounded-xl px-4 py-3 cursor-pointer flex justify-between items-center bg-white"
      >
        <span className={value ? "text-black" : "text-gray-400"}>
          {value || `Select ${label}`}
        </span>
        <span className="text-gray-400">▾</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 z-[9999] mt-2 bg-white border rounded-xl shadow-xl max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => onChange(option)}
                className={`px-4 py-2 cursor-pointer text-sm transition ${
                  value === option
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
