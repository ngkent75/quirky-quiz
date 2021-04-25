import axios from 'axios';

const API = {
  getQuiz: (id) => axios.get('/api/quiz/' + id ),
  saveQuiz: function(quizData) {
    return axios.post('/api/quiz', quizData);
  },
  saveUser: function(quizData) {
    return axios.post('/api/user', quizData);
  },
  saveResult: function(resultData) {
    return axios.post('api/userResult', resultData)
  }
}

export default API;