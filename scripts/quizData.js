const { Quiz } = require('../models');

const quizData = [
    {
        "title": "What Shrek character are you?",
        "user_id": 1
    },
    {
        "title": "Which Famous Artist Are You?",
        "user_id": 2
    },
    {
        "title": "The foods you Choose will reveal which US State you should live in:",
        "user_id": 3
    },
    {
        "title": "Which US President are you?",
        "user_id": 1
    },
    {
        "title": "Which Golden Girl are You?",
        "user_id": 2
    },
    {
        "title": "Which Planet are You?",
        "user_id": 3
    },
    {
        "title": "Which Professional Sports Team are You?",
        "user_id": 1
    }
]

const seedQuiz = () => Quiz.bulkCreate(quizData);

module.exports = seedQuiz;