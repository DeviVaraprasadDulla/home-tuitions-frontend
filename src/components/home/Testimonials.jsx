import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { fetchTestimonials } from "../../api/testimonialApi";

const CARD_WIDTH = 320;
const GAP = 32;

export default function Testimonials() {
  const [data, setData] = useState([]);
  const [paused, setPaused] = useState(false);

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchTestimonials();

      setData(res || []);
    };

    load();
  }, []);

  /* autoplay */

  useEffect(() => {
    if (paused || data.length === 0) return;

    const distance = (CARD_WIDTH + GAP) * data.length;

    const controls = animate(x, [0, -distance], {
      duration: 45,
      ease: "linear",
      repeat: Infinity,
    });

    return controls.stop;
  }, [data, paused]);

  const items = [...data, ...data];

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      {/* PARALLAX BACKGROUND */}

      <motion.div
        className="absolute -top-20 left-0 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full"
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What Parents Say
          </h2>

          <p className="text-gray-500 mt-3">Real feedback from families</p>
        </div>

        {/* CAROUSEL */}

        <div className="relative overflow-hidden">
          {/* edge gradients */}

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />

          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <motion.div
            ref={containerRef}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ left: -2000, right: 0 }}
            style={{ x }}
            className="flex gap-8 cursor-grab active:cursor-grabbing perspective-1000"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((item, index) => (
              <Card key={index} item={item} index={index} motionX={x} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

const Card = ({ item, index, motionX }) => {
  const ref = useRef(null);

  /* depth effect */

  const scale = useTransform(motionX, [-1000, 0, 1000], [0.8, 1.1, 0.8]);

  const rotateY = useTransform(motionX, [-1000, 0, 1000], [40, 0, -40]);

  /* avatar color generator */

  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-orange-600",
  ];

  const avatarColor =
    colors[item?.name?.charCodeAt(0) % colors.length] || colors[0];

  /* magnetic hover */

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px)
       rotateY(${x / 25}deg)
       rotateX(${-y / 25}deg)
       scale(1.05)`;
  };

  const reset = () => {
    const card = ref.current;

    if (card)
      card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        scale,
        rotateY,
      }}
      className="
      min-w-[260px]
      md:min-w-[320px]
      backdrop-blur-xl
      bg-white/70
      border border-white/40
      rounded-2xl
      p-7
      shadow-xl
      transition duration-300
      "
    >
      {/* CENTER SPOTLIGHT */}

      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-40 rounded-2xl pointer-events-none" />

      {/* avatar */}

      <div className="flex items-center gap-4 mb-4">
        {item?.image ? (
          <img
            src={`http://localhost:8000${item.image}`}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColor}
            text-white flex items-center justify-center font-semibold`}
          >
            {item?.name?.charAt(0) || "U"}
          </div>
        )}

        <div>
          <p className="font-semibold text-primary">
            {item?.name || "Anonymous"}
          </p>

          <p className="text-sm text-gray-500">{item?.role || "Parent"}</p>
        </div>
      </div>

      {/* message */}

      <p className="text-gray-600 text-sm leading-relaxed">
        {item?.message || "Excellent tutor experience."}
      </p>

      {/* rating */}

      <div className="flex mt-5 text-yellow-400 text-lg">
        {[...Array(item?.rating || 5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            ★
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
