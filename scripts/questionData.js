const { Question } = require('../models');

const questionData = [
    {
        "questionText": "Which best describes your personality?",
        "quiz_id": 1
    },
    {
        "questionText": "Which of these quotes do you vibe with the most?",
        "quiz_id": 1
    },
    {
        "questionText": "What would you do if you were attacked by a bandit?",
        "quiz_id": 1
    },
    {
        "questionText": "What traits would your ideal partner have?",
        "quiz_id": 1
    }
]

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;