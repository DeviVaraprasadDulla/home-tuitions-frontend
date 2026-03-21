import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Home } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Tutors",
    desc: "Background-checked and experienced educators you can trust.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Morning or evening slots based on your child's comfort.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "One-to-one focus to improve academic performance.",
  },
  {
    icon: Home,
    title: "Safe Home Learning",
    desc: "Comfortable learning environment at your doorstep.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/70 to-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Why Parents Trust Us
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Safe. Reliable. Personalized home learning designed for every child.
        </p>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-2xl py-6 shadow-sm"
          >
            <h3 className="text-3xl font-bold text-amber-600">5+</h3>
            <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-2xl py-6 shadow-sm"
          >
            <h3 className="text-3xl font-bold text-amber-600">5000+</h3>
            <p className="text-sm text-gray-600 mt-1">Students Enrolled</p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8 text-amber-500" />
              </div>

              <h3 className="text-lg font-medium text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
