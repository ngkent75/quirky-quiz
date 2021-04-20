const { Quiz } = require('../models');

const quizData = [
    {
        "title": "What Shrek character are you?",
        "user_id": 1
    }
]

const seedQuiz = () => Quiz.bulkCreate(quizData);

module.exports = seedQuiz;