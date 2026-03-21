import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Pencil, Atom } from "lucide-react";

const HeroActions = ({ onStudentClick, onTutorClick }) => {
  return (
    <section className="relative px-6 pt-10 md:pt-16 pb-24 md:pb-28 overflow-hidden">
      {/* ================= Cinematic Glow Layers ================= */}

      <div className="absolute inset-0 -z-20 flex justify-center items-center">
        <div className="w-[700px] h-[350px] bg-blue-400/25 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 -z-30 flex justify-center items-center">
        <motion.div
          className="w-[900px] h-[500px] bg-blue-200/15 blur-[150px] rounded-full"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* ================= Floating Geometric Shapes ================= */}

      <motion.div
        className="absolute top-14 left-14 w-8 h-8 border border-blue-300 rotate-45"
        animate={{ y: [0, -25, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-24 right-16 w-5 h-5 bg-blue-300/60 rounded-full"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-6 h-6 border border-blue-200 rounded-full"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-24 w-10 h-10 border border-blue-200 rotate-12"
        animate={{ rotate: [12, 60, 12] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 left-1/4 w-7 h-7 border border-blue-200 rotate-45"
        animate={{ y: [0, -20, 0], rotate: [45, 80, 45] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-20 right-1/3 w-4 h-4 bg-blue-200 rounded-full"
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* ================= Orbital Academic Icons ================= */}

      <motion.div
        className="absolute left-20 top-1/3 text-blue-400/80"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "120px 0px" }}
      >
        <BookOpen size={28} />
      </motion.div>

      <motion.div
        className="absolute right-28 top-1/4 text-blue-300/80"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "-140px 0px" }}
      >
        <GraduationCap size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-1/3 text-blue-300/80"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 0px" }}
      >
        <Pencil size={26} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 text-blue-300/80"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "-110px 0px" }}
      >
        <Atom size={26} />
      </motion.div>

      {/* ================= Soft Floating Particles ================= */}

      <motion.div
        className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-300 rounded-full blur-sm"
        animate={{ opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-200 rounded-full blur-sm"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-200 rounded-full blur-sm"
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-1/4 w-2 h-2 bg-blue-300 rounded-full blur-sm"
        animate={{ opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* ================= Hero Intro (Merged) ================= */}

      <section className="relative py-6 overflow-hidden ">
        {/* Heavy Blur Background Shapes */}
        <div className="absolute -top-10 left-1/4 w-48 h-48 bg-blue-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-8 right-1/4 w-48 h-48 bg-indigo-300/30 rounded-full blur-[120px]"></div>

        <div className="relative text-center">
          <h2 className="text-3xl font-bold text-gray-900 shadow-sm">
            HOME TUITION
          </h2>

          <p className="text-gray-600 mt-1">Get personal tutor instantly</p>
        </div>
      </section>
      {/* ================= Main Luxury Glass Card ================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col gap-4 max-w-md mx-auto 
                   bg-white/85 backdrop-blur-xl 
                   border border-white/50 
                   rounded-3xl p-8 md:p-10 
                   shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
      >
        <div className="w-16 h-1 bg-blue-600/80 rounded-full mx-auto mb-2" />

        {/* Find Tutor */}

        <button
          onClick={onStudentClick}
          className="w-full bg-blue-600 hover:bg-blue-700 
                     text-white py-3.5 rounded-xl 
                     font-semibold tracking-wide
                     transition-all duration-300 
                     shadow-md hover:shadow-xl hover:scale-[1.04]"
        >
          Find a Tutor
        </button>

        {/* Become Tutor */}

        <button
          onClick={onTutorClick}
          className="w-full border border-blue-600 
                     text-blue-600 py-3.5 rounded-xl 
                     font-semibold tracking-wide
                     hover:bg-blue-50 
                     transition-all duration-300"
        >
          I am a Tutor
        </button>
      </motion.div>
    </section>
  );
};

export default HeroActions;
