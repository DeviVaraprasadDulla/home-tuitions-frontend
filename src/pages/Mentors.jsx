import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import MeetOurTutors from "../components/home/MeetOurTutors";

export default function Mentors() {
  return (
    <MainLayout>
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800"
        >
          Our Mentors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Dedicated and experienced tutors committed to your child's success.
        </motion.p>
      </section>

      {/* Carousel without duplicate heading */}
      <MeetOurTutors showHeading={false} />
    </MainLayout>
  );
}
