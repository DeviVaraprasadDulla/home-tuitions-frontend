import axios from "./axios";

export const fetchFeaturedTutors = async () => {
  const response = await axios.get("/featured-tutors/");
  return response.data;
};
