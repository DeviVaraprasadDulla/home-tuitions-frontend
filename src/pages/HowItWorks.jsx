import { motion } from "framer-motion";
import { Search, UserCheck, BookOpen } from "lucide-react";
import MainLayout from "../layout/MainLayout";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Submit Your Requirement",
      desc: "Tell us your child's grade, subject and preferred timing.",
    },
    {
      icon: UserCheck,
      title: "Get Matched with a Tutor",
      desc: "We connect you with verified and experienced tutors.",
    },
    {
      icon: BookOpen,
      title: "Start Learning",
      desc: "Begin personalized one-to-one home tuition sessions.",
    },
  ];

  return (
    <MainLayout>
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          How It Works
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Simple, transparent and designed to provide the best learning
          experience for your child.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
            >
              <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
