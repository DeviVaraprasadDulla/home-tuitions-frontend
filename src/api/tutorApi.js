import axiosInstance from "./axios";

export const submitTutorApplication = (data) => {
  return axiosInstance.post("tutor-application/", data);
};
