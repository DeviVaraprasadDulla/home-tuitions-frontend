import axios from "./axios";

export const submitStudentInquiry = (data) => {
  return axios.post("/student-inquiry/", data);
};
