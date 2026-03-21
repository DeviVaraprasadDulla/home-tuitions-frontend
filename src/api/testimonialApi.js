const API_URL = "http://localhost:8000/api/testimonials/";

export const fetchTestimonials = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return res.json();
};
