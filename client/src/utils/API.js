import {get} from 'axios';

const API = {
  getQuiz: (id) => get('/api/quiz/' + id )
}

export default API;