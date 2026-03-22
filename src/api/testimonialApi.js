import axiosInstance from "./axios";

export const fetchTestimonials = async () => {
  const res = await axiosInstance.get("testimonials/");
  return res.data;
};
