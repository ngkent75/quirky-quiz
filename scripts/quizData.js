const { Quiz } = require('../models');

const quizData = [
    {

    }
]

const seedQuiz = () => Quiz.bulkCreate(quizData);

module.exports = seedQuiz;