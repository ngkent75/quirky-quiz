import axios from "axios";

const API = {
  getQuiz: (id) => axios.get("/api/quiz/" + id),
  saveQuiz: function (quizData) {
    return axios.post("/api/quiz", quizData);
  },
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
};

export default API;
