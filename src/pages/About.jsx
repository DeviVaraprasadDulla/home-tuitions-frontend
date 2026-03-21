import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import {
  BookOpen,
  GraduationCap,
  BrainCircuit,
  User,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Students Helped", value: 5000 },
  { label: "Expert Tutors", value: 350 },
  { label: "Subjects Covered", value: 25 },
  { label: "Cities Served", value: 12 },
];

const team = [
  { name: "Rahul Sharma", role: "Founder", icon: User },
  { name: "Ananya Gupta", role: "Academic Lead", icon: GraduationCap },
  { name: "Vikram Patel", role: "Operations Head", icon: BrainCircuit },
  { name: "Neha Reddy", role: "Tutor Manager", icon: Star },
];

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;

      const interval = setInterval(() => {
        start += Math.ceil(stat.value / 40);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= stat.value) {
          clearInterval(interval);

          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = stat.value;
            return updated;
          });
        }
      }, 40);
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MainLayout>
      {/* HERO */}

      <section className="relative py-28 md:py-32 px-6 overflow-hidden">
        {/* AI Glow */}

        <motion.div
          className="absolute inset-0 flex justify-center -z-10"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <div
            className="w-[900px] h-[500px] blur-[140px] rounded-full"
            style={{
              background: "linear-gradient(135deg,#60a5fa,#6366f1,#a855f7)",
              opacity: 0.22,
            }}
          />
        </motion.div>

        {/* Floating Icons (reduced movement for stability) */}

        <motion.div
          className="absolute left-10 top-24 text-blue-400 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <BookOpen size={30} />
        </motion.div>

        <motion.div
          className="absolute right-16 top-32 text-indigo-400 hidden md:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <GraduationCap size={30} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/4 text-purple-400 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <BrainCircuit size={28} />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Empowering Students Through
            <span className="text-blue-600"> Personal Learning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto"
          >
            We connect students with trusted tutors to create personalized
            education experiences that improve learning outcomes.
          </motion.p>

          {/* Trusted Row */}

          <div className="flex justify-center items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              {[User, GraduationCap, BookOpen, Star].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity }}
                >
                  <Icon size={16} />
                </motion.div>
              ))}
            </div>

            <span className="text-gray-600 text-sm">
              Trusted by thousands of families
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-sm text-center border border-gray-100"
            >
              <div className="text-3xl font-bold text-blue-600">
                {counts[i]}+
              </div>

              <div className="text-gray-500 mt-2 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION */}

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>

            <p className="text-gray-600">
              To make quality education accessible by connecting students with
              experienced tutors who provide personalized academic guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>

            <p className="text-gray-600">
              A future where every student can access the right mentor and
              unlock their full academic potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => {
              const Icon = member.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto rounded-full mb-4 bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <Icon size={24} />
                  </div>

                  <h4 className="font-semibold">{member.name}</h4>

                  <p className="text-sm text-gray-500">{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-4 opacity-80">
          Find the perfect tutor and improve your academic performance.
        </p>

        <Link to="/" onClick={handleScrollTop}>
          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md">
            Find a Tutor
          </button>
        </Link>
      </section>
    </MainLayout>
  );
};

export default About;
