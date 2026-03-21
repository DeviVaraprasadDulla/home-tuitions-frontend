import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { submitTutorApplication } from "../../api/tutorApi";

const experienceOptions = ["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"];

const subjectOptions = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
  "Social Studies",
  "Hindi",
  "Telugu",
];

const TutorFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    age: "",
    experience: "",
    subjects: [],
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [openSubjects, setOpenSubjects] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);

  const subjectRef = useRef();
  const experienceRef = useRef();

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

  useEffect(() => {
    const handleClick = (e) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target)) {
        setOpenSubjects(false);
      }
      if (experienceRef.current && !experienceRef.current.contains(e.target)) {
        setOpenExperience(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleSubject = (subject) => {
    if (formData.subjects.includes(subject)) {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter((s) => s !== subject),
      });
    } else {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, subject],
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!formData.qualification.trim())
      newErrors.qualification = "Qualification required";
    if (!formData.age) newErrors.age = "Age required";
    if (!formData.experience) newErrors.experience = "Select experience";
    if (formData.subjects.length === 0)
      newErrors.subjects = "Select at least one subject";
    if (!formData.location.trim()) newErrors.location = "Location required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      ...formData,
      subjects: formData.subjects.join(", "),
    };

    try {
      setLoading(true);
      await submitTutorApplication(payload);
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
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Tutor Registration
                  </h2>

                  <input
                    placeholder="Full Name"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
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

                  <textarea
                    placeholder="Qualification"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        qualification: e.target.value,
                      })
                    }
                  />
                  {errors.qualification && (
                    <p className="text-red-500 text-sm">
                      {errors.qualification}
                    </p>
                  )}

                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm">{errors.age}</p>
                  )}

                  <div className="relative mb-3" ref={experienceRef}>
                    <div
                      onClick={() => setOpenExperience(!openExperience)}
                      className="w-full border rounded-xl px-4 py-3 cursor-pointer bg-white"
                    >
                      {formData.experience || "Select Experience"}
                    </div>

                    {openExperience && (
                      <div className="absolute z-50 bg-white border rounded-xl mt-2 w-full shadow-lg">
                        {experienceOptions.map((exp) => (
                          <div
                            key={exp}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                experience: exp,
                              });
                              setOpenExperience(false);
                            }}
                            className={`px-4 py-2 cursor-pointer ${
                              formData.experience === exp
                                ? "bg-secondary text-white"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {exp}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.experience && (
                    <p className="text-red-500 text-sm">{errors.experience}</p>
                  )}

                  <div className="relative mb-3" ref={subjectRef}>
                    <div
                      onClick={() => setOpenSubjects(!openSubjects)}
                      className="w-full border rounded-xl px-4 py-3 cursor-pointer bg-white"
                    >
                      {formData.subjects.length > 0
                        ? formData.subjects.join(", ")
                        : "Select Subjects"}
                    </div>

                    {openSubjects && (
                      <div className="absolute z-50 bg-white border rounded-xl mt-2 w-full max-h-48 overflow-y-auto shadow-lg">
                        {subjectOptions.map((subject) => (
                          <div
                            key={subject}
                            onClick={() => toggleSubject(subject)}
                            className={`px-4 py-2 cursor-pointer ${
                              formData.subjects.includes(subject)
                                ? "bg-secondary text-white"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {subject}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.subjects && (
                    <p className="text-red-500 text-sm">{errors.subjects}</p>
                  )}

                  <input
                    placeholder="Location"
                    className="w-full border rounded-xl px-4 py-3 mb-3"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-6 w-full bg-secondary text-white py-3 rounded-xl font-semibold flex justify-center items-center"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center py-16 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl text-green-600">✓</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Registration Submitted!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our team will contact you soon.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TutorFormModal;
