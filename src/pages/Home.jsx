import { useState } from "react";
import MainLayout from "../layout/MainLayout";

import HeroBanner from "../components/home/HeroBanner";
import HeroActions from "../components/home/HeroActions";

import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import AboutPreview from "../components/home/AboutPreview";

import StudentFormModal from "../components/forms/StudentFormModal";
import TutorFormModal from "../components/forms/TutorFormModal";

const Home = () => {
  const [studentOpen, setStudentOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);

  return (
    <MainLayout>
      {/* 🔥 HERO */}
      <HeroBanner />

      <HeroActions
        onStudentClick={() => setStudentOpen(true)}
        onTutorClick={() => setTutorOpen(true)}
      />

      {/* 🔥 PREMIUM SEO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>

        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl">
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Trusted by Students Across India
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Best Home Tuition in{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hyderabad & India
            </span>
          </h1>

          {/* H2 */}
          <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-6">
            Find Verified Home Tutors Near You
          </h2>

          {/* Content */}
          <p className="text-gray-600 leading-relaxed mb-4 text-[15px] md:text-base">
            StudySadhana connects students with experienced and verified home
            tutors in Hyderabad, Bangalore, Delhi, Mumbai, and across India. Get
            personalized one-to-one learning for school subjects and competitive
            exams like IIT-JEE and NEET.
          </p>

          <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
            Whether you need a maths tutor, science tutor, or private home
            tuition near you, we help you achieve better results with
            personalized guidance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Students Helped", value: "10K+" },
              { label: "Verified Tutors", value: "2K+" },
              { label: "Cities Covered", value: "20+" },
              { label: "Success Rate", value: "95%" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/80 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-indigo-600">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 TRUST */}
      <WhyChooseUs />

      {/* 🔥 TESTIMONIALS */}
      <Testimonials />

      {/* 🔥 ABOUT */}
      <AboutPreview />

      {/* 🔥 PREMIUM FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need to know about home tuition
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "How to find home tutors near me?",
              a: "You can easily find verified home tutors through StudySadhana by submitting your learning requirements.",
            },
            {
              q: "Do you provide home tuition in Hyderabad?",
              a: "Yes, we provide experienced home tutors across Hyderabad and major cities in India.",
            },
            {
              q: "What subjects are covered?",
              a: "We offer tutors for Maths, Science, English, and competitive exams like IIT-JEE and NEET.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-6 bg-white hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {item.q}
              </h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 MODALS */}
      <StudentFormModal
        isOpen={studentOpen}
        onClose={() => setStudentOpen(false)}
      />

      <TutorFormModal isOpen={tutorOpen} onClose={() => setTutorOpen(false)} />
    </MainLayout>
  );
};

export default Home;
