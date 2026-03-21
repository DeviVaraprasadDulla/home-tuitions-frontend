import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { fetchFeaturedTutors } from "../../api/featuredTutorApi";

const AUTO_SLIDE = 5000;

export default function MeetOurTutors({ showHeading = true }) {
  const [tutors, setTutors] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadTutors = async () => {
      try {
        const data = await fetchFeaturedTutors();
        setTutors(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTutors();
  }, []);

  useEffect(() => {
    if (!tutors.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tutors.length);
    }, AUTO_SLIDE);

    return () => clearInterval(interval);
  }, [tutors]);

  if (!tutors.length) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % tutors.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? tutors.length - 1 : prev - 1));

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Optional Heading */}
        {showHeading && (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              Meet Our Tutors
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Experienced educators dedicated to your child's success.
            </p>
          </>
        )}

        {/* Slider */}
        <div className="relative mt-12 flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm md:max-w-md"
            >
              <TutorCard tutor={tutors[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {tutors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-6 bg-amber-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tutor Card ---------- */

function TutorCard({ tutor }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="h-56 md:h-60 bg-amber-50 flex items-center justify-center overflow-hidden">
        {tutor.profile_image ? (
          <img
            src={tutor.profile_image}
            alt={tutor.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center">
            <User className="text-amber-500" size={32} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl py-5 px-6 shadow-lg text-center">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full mb-2">
          {tutor.experience_years}+ Years Experience
        </span>

        <h3 className="text-lg font-semibold text-gray-800">{tutor.name}</h3>

        <p className="text-sm text-gray-600 mt-1">{tutor.designation}</p>

        <p className="text-sm font-medium mt-2 text-gray-700">
          {tutor.qualification}
        </p>
      </div>

      <div className="h-14" />
    </div>
  );
}
