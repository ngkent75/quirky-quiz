const { Question } = require('../models');

const questionData = [
    {
        "name": "Which best describes your personality?",
        "quiz_id": 1
    },
    {
        "name": "Which of these quotes do you vibe with the most?",
        "quiz_id": 1
    },
    {
        "name": "What would you do if you were attacked by a bandit?",
        "quiz_id": 1
    },
    {
        "name": "What traits would your ideal partner have?",
        "quiz_id": 1
    }
]

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;