import { useState } from "react";
import MainLayout from "../layout/MainLayout";

import HeroBanner from "../components/home/HeroBanner";
import HeroIntro from "../components/home/HeroIntro";
import HeroActions from "../components/home/HeroActions";

import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import MeetOurTutors from "../components/home/MeetOurTutors";
import AboutPreview from "../components/home/AboutPreview";

import StudentFormModal from "../components/forms/StudentFormModal";
import TutorFormModal from "../components/forms/TutorFormModal";

const Home = () => {
  const [studentOpen, setStudentOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);

  return (
    <MainLayout>
      {/* HERO SECTION */}

      <HeroBanner />

      {/* <HeroIntro /> */}

      <HeroActions
        onStudentClick={() => setStudentOpen(true)}
        onTutorClick={() => setTutorOpen(true)}
      />

      {/* TRUST SECTION */}

      <WhyChooseUs />

      {/* TESTIMONIALS */}

      <Testimonials />

      {/* TUTORS */}

      {/* <MeetOurTutors /> */}
      <AboutPreview />

      {/* MODALS */}

      <StudentFormModal
        isOpen={studentOpen}
        onClose={() => setStudentOpen(false)}
      />

      <TutorFormModal isOpen={tutorOpen} onClose={() => setTutorOpen(false)} />
    </MainLayout>
  );
};

export default Home;
