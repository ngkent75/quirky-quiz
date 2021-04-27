import axios from "axios";

const API = {

  getQuiz: (id) => axios.get('/api/quiz/' + id ),
  getCategory: (id) => axios.get('/api/category/' + id ),
  getUser: (id) => axios.get('/api/user/' + id ),
  getResults: (id) => axios.get('/api/user/' + id ),

  saveQuiz: function(quizData) {
    return axios.post('/api/quiz', quizData);
  },
  saveUser: function(quizData) {
    return axios.post('/api/user', quizData);
  },
}


export default API;
