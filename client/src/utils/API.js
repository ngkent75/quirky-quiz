import axios from "axios";

const API = {

  getQuiz: (id) => axios.get('/api/quiz/' + id ),
  getCategory: (id) => axios.get('/api/category/' + id ),
  getUser: (id) => axios.get('/api/user/' + id ),
  getResults: (id) => axios.get('/api/user/' + id ),
  getUserId: () => axios.get('/sessionid'),

  saveResult: function(resultData) {
    return axios.post('/api/userresult', resultData)
  },

  saveQuiz: function(quizData) {
    return axios.post('/api/quiz', quizData);
  },
  saveUser: function(quizData) {
    return axios.post('/api/user', quizData);
  },
}


export default API;
