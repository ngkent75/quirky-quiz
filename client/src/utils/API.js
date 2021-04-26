import axios from "axios";

const API = {

  getQuiz: (id) => axios.get('/api/quiz/' + id ),
  saveQuiz: function(quizData) {
    return axios.post('/api/quiz', quizData);
  },
  saveUser: function(quizData) {
    return axios.post('/api/user', quizData);
  },
  getUser: id => axios.get('/api/user/' + id)
}


export default API;
