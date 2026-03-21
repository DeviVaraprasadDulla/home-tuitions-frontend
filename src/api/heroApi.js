import axiosInstance from "./axios";

export const getHeroSlides = () => {
  return axiosInstance.get("hero-slides/");
};
