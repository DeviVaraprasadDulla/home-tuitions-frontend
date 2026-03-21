import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import CustomSelect from "./CustomSelect";
import TimeSelect from "./TimeSelect";
import { submitStudentInquiry } from "../../api/studentApi";

const grades = [
  "PP1",
  "PP2",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

const syllabuses = ["CBSE", "ICSE", "State Syllabus", "IB", "IGCSE"];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
];

const cities = [
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Jaipur",
  "Kochi",
  "Kolkata",
  "Lucknow",
  "Mumbai",
  "Nagpur",
  "Pune",
];

const StudentFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    student_name: "",
    phone: "",
    email: "",
    location: "",
    grade: "",
    syllabus: "",
    subject: "",
    time_from: "",
    time_to: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const convertTo24Hour = (time) => {
    if (!time) return null;
    const [hourMin, period] = time.split(" ");
    let [hour, minute] = hourMin.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return `${hour.toString().padStart(2, "0")}:${minute}:00`;
  };

  const convertToMinutes = (time) => {
    if (!time) return 0;
    const [hourMin, period] = time.split(" ");
    let [hour, minute] = hourMin.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return hour * 60 + minute;
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.student_name.trim())
      newErrors.student_name = "Student name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.grade) newErrors.grade = "Select grade";
    if (!formData.syllabus) newErrors.syllabus = "Select syllabus";
    if (!formData.subject) newErrors.subject = "Select subject";
    if (!formData.time_from) newErrors.time_from = "Select start time";
    if (!formData.time_to) newErrors.time_to = "Select end time";

    if (
      formData.time_from &&
      formData.time_to &&
      convertToMinutes(formData.time_to) <= convertToMinutes(formData.time_from)
    ) {
      newErrors.time_to = "End time must be after start time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      student_name: formData.student_name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      grade: formData.grade,
      syllabus: formData.syllabus,
      subject: formData.subject,
      preferred_from: convertTo24Hour(formData.time_from),
      preferred_to: convertTo24Hour(formData.time_to),
    };

    try {
      setLoading(true);
      await submitStudentInquiry(payload);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
          >
            <div className="relative bg-white w-full max-w-2xl rounded-t-3xl md:rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center 
                           rounded-full bg-amber-50 hover:bg-amber-100 
                           text-amber-600 shadow-sm"
              >
                <X size={18} />
              </motion.button>

              {!success ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    Find a Tutor
                  </h2>

                  <input
                    placeholder="Student Name"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.student_name}
                    onChange={(e) =>
                      setFormData({ ...formData, student_name: e.target.value })
                    }
                  />
                  {errors.student_name && (
                    <p className="text-red-500 text-sm">
                      {errors.student_name}
                    </p>
                  )}

                  <input
                    placeholder="Phone"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}

                  <input
                    placeholder="Email (optional)"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <CustomSelect
                    label="Location"
                    value={formData.location}
                    options={cities}
                    isOpen={openDropdown === "location"}
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown === "location" ? null : "location",
                      )
                    }
                    onClose={() => setOpenDropdown(null)}
                    onChange={(val) => {
                      setFormData({ ...formData, location: val });
                      setOpenDropdown(null);
                    }}
                  />

                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}

                  <CustomSelect
                    label="Grade"
                    value={formData.grade}
                    options={grades}
                    isOpen={openDropdown === "grade"}
                    onOpen={() =>
                      setOpenDropdown(openDropdown === "grade" ? null : "grade")
                    }
                    onClose={() => setOpenDropdown(null)}
                    onChange={(val) => {
                      setFormData({ ...formData, grade: val });
                      setOpenDropdown(null);
                    }}
                  />
                  {errors.grade && (
                    <p className="text-red-500 text-sm">{errors.grade}</p>
                  )}

                  <CustomSelect
                    label="Syllabus"
                    value={formData.syllabus}
                    options={syllabuses}
                    isOpen={openDropdown === "syllabus"}
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown === "syllabus" ? null : "syllabus",
                      )
                    }
                    onClose={() => setOpenDropdown(null)}
                    onChange={(val) => {
                      setFormData({ ...formData, syllabus: val });
                      setOpenDropdown(null);
                    }}
                  />
                  {errors.syllabus && (
                    <p className="text-red-500 text-sm">{errors.syllabus}</p>
                  )}

                  <CustomSelect
                    label="Subject"
                    value={formData.subject}
                    options={subjects}
                    isOpen={openDropdown === "subject"}
                    onOpen={() =>
                      setOpenDropdown(
                        openDropdown === "subject" ? null : "subject",
                      )
                    }
                    onClose={() => setOpenDropdown(null)}
                    onChange={(val) => {
                      setFormData({ ...formData, subject: val });
                      setOpenDropdown(null);
                    }}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <TimeSelect
                      label="From"
                      value={formData.time_from}
                      isOpen={openDropdown === "from"}
                      onOpen={() =>
                        setOpenDropdown(openDropdown === "from" ? null : "from")
                      }
                      onClose={() => setOpenDropdown(null)}
                      onChange={(val) => {
                        setFormData({ ...formData, time_from: val });
                        setOpenDropdown(null);
                      }}
                    />
                    <TimeSelect
                      label="To"
                      value={formData.time_to}
                      isOpen={openDropdown === "to"}
                      onOpen={() =>
                        setOpenDropdown(openDropdown === "to" ? null : "to")
                      }
                      onClose={() => setOpenDropdown(null)}
                      onChange={(val) => {
                        setFormData({ ...formData, time_to: val });
                        setOpenDropdown(null);
                      }}
                    />
                  </div>

                  {errors.time_to && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.time_to}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-8 w-full bg-secondary text-white py-3 rounded-xl font-semibold flex justify-center items-center"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl text-green-600">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Request Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our team will contact you shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StudentFormModal;
