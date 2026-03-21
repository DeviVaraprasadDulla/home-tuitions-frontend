import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getHeroSlides } from "../../api/heroApi";
import { User, GraduationCap, BookOpen, Star } from "lucide-react";

const AUTO_SLIDE = 5000;

const avatarIcons = [
  { icon: User, color: "#3b82f6" },
  { icon: GraduationCap, color: "#22c55e" },
  { icon: BookOpen, color: "#f59e0b" },
  { icon: Star, color: "#8b5cf6" },
];

const HeroBanner = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    getHeroSlides()
      .then((res) => setSlides(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (slides.length === 0 || paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE);

    return () => clearInterval(interval);
  }, [slides, paused]);

  if (slides.length === 0) return null;

  const slide = slides[current];

  return (
    <section className="px-4 pt-6 relative overflow-hidden">
      {/* AI Gradient Glow */}

      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <motion.div
          className="w-[900px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: "linear-gradient(135deg,#60a5fa,#6366f1,#8b5cf6)",
            opacity: 0.25,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div
        className="max-w-[1400px] mx-auto relative 
        h-[300px] sm:h-[380px] md:h-[480px] lg:h-[500px] 
        rounded-3xl overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background Image */}

        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt="Hero"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover brightness-95"
          />
        </AnimatePresence>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-amber-800/30 to-transparent" />

        {/* Hero Content */}

        <div className="absolute inset-0 flex items-center px-6 md:px-16 z-10">
          <div className="max-w-xl md:max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.h2
                key={slide.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
                style={{ textShadow: "0 3px 15px rgba(0,0,0,0.35)" }}
              >
                {slide.title}
              </motion.h2>
            </AnimatePresence>

            {/* Animated Tutor Avatars */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-6"
            >
              <div className="flex -space-x-3">
                {avatarIcons.map(({ icon: Icon, color }, i) => (
                  <motion.div
                    key={i}
                    className="
                    w-9 h-9 rounded-full border-2 border-white
                    flex items-center justify-center
                    text-white shadow-md
                    "
                    style={{ background: color }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity }}
                  >
                    <Icon size={16} />
                  </motion.div>
                ))}
              </div>

              <span className="text-white text-sm">
                5000+ students learning
              </span>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "bg-white w-6" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>

        {/* Progress */}

        <motion.div
          key={current}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: AUTO_SLIDE / 1000,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 h-1 bg-amber-400"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
