import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  BrainCircuit,
  User,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "5000+", label: "Students Helped" },
  { value: "500+", label: "Expert Tutors" },
  { value: "25+", label: "Subjects Covered" },
];

const avatarIcons = [User, GraduationCap, BookOpen, Star];

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-white">
      {/* AI Gradient Glow */}

      <motion.div
        className="absolute inset-0 -z-10 flex justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div
          className="w-[900px] h-[500px] blur-[140px] rounded-full"
          style={{
            background: "linear-gradient(135deg,#60a5fa,#6366f1,#a855f7)",
            opacity: 0.25,
          }}
        />
      </motion.div>

      {/* Floating Education Icons */}

      <motion.div
        className="absolute left-10 top-20 text-blue-400"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <BookOpen size={30} />
      </motion.div>

      <motion.div
        className="absolute right-16 top-32 text-indigo-400"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <GraduationCap size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-purple-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <BrainCircuit size={28} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* ABOUT US LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100">
            About Us
          </span>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            A Smarter Way to
            <span className="text-blue-600"> Learn at Home</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We connect students with experienced tutors who provide personalized
            academic guidance to help them achieve better results.
          </p>
        </motion.div>

        {/* Premium Glass Cards */}

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="font-semibold text-lg mb-3">
              Personalized Learning
            </h3>

            <p className="text-gray-600 text-sm">
              Every student learns differently. Our tutors create personalized
              learning plans to match individual academic needs.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="font-semibold text-lg mb-3">Trusted Tutors</h3>

            <p className="text-gray-600 text-sm">
              Our platform connects students with verified tutors who have
              strong subject expertise and proven teaching experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="font-semibold text-lg mb-3">Flexible Scheduling</h3>

            <p className="text-gray-600 text-sm">
              Learn at your convenience with flexible tutoring sessions designed
              around the student's schedule.
            </p>
          </motion.div>
        </div>

        {/* Animated Stats */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center mb-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600">
                {item.value}
              </div>

              <div className="text-gray-500 mt-2 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Families Row */}

        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="flex -space-x-3">
            {avatarIcons.map((Icon, i) => (
              <motion.div
                key={i}
                className="
                w-10 h-10 rounded-full border-2 border-white
                bg-gradient-to-br from-blue-500 to-indigo-500
                flex items-center justify-center text-white
                shadow-md
                "
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity }}
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>

          <span className="text-gray-600 text-sm">
            Trusted by thousands of families
          </span>
        </div>

        {/* CTA */}

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/about")}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700"
          >
            Learn More About Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
