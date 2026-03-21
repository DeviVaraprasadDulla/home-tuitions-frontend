import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HeroIntro = () => {
  return (
    <section className="px-6 pt-14 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-primary relative inline-block"
        >
          HOME TUITIONS
          {/* Animated underline */}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 bg-accent rounded-full"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 text-gray-600 text-base md:text-lg max-w-xl mx-auto"
        >
          Get personal tutor instantly
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroIntro;
