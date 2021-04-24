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
    },
    {
        "questionText": "What is your favorite exercise?",
        "quiz_id": 2
    },
    {
        "questionText": "What does IPA stand for?",
        "quiz_id": 2
    },
    {
        "questionText": "If you had to make a dating profile, what site would you use?",
        "quiz_id": 2
    },
    {
        "questionText": "Choose a food you eat the most:",
        "quiz_id": 2
    },
    {
        "questionText": "Which part of your body could you live without?",
        "quiz_id": 2
    },
    {
        "questionText": "Choose your breakfast:",
        "quiz_id": 3
    },
    {
        "questionText": "Choose your lunch:",
        "quiz_id": 3
    },
    {
        "questionText": "Choose a snack:",
        "quiz_id": 3
    },
    {
        "questionText": "Choose your dinner:",
        "quiz_id": 3
    },
    {
        "questionText": "Finally, Choose your dessert:",
        "quiz_id": 3
    },
    {
        "questionText": "What would you rather have?",
        "quiz_id": 4
    },
    {
        "questionText": "Favorite Genre of Music?",
        "quiz_id": 4
    },
    {
        "questionText": "How many children would you like?",
        "quiz_id": 4
    },
    {
        "questionText": "What is your favorite animal?",
        "quiz_id": 4
    },
    {
        "questionText": "Which fruit should be illegal?",
        "quiz_id": 4
    },
    {
        "questionText": "What is your ideal vacation?",
        "quiz_id": 5
    },
    {
        "questionText": "How do you prefer to dress?",
        "quiz_id": 5
    },
    {
        "questionText": "Who is you ideal partner?",
        "quiz_id": 5
    },
    {
        "questionText": "What is your favorite color?",
        "quiz_id": 5
    },
    {
        "questionText": "Who is your favorite superhero?",
        "quiz_id": 6
    },
    {
        "questionText": "Pick a color:",
        "quiz_id": 6
    },
    {
        "questionText": "If you were a Kardashian, who would you be?",
        "quiz_id": 6
    },
    {
        "questionText": "What is the strongest muscle in the human body?",
        "quiz_id": 6
    },
    {
        "questionText": "What is your favorite way to eat a potato?",
        "quiz_id": 6
    },
    {
        "questionText": "What is your ideal vacation?",
        "quiz_id": 7
    },
    {
        "questionText": "What is your favorite shape?",
        "quiz_id": 7
    },
    {
        "questionText": "What is the total distance of a marathon?",
        "quiz_id": 7
    },
    {
        "questionText": "What city hosts the Little League World series?",
        "quiz_id": 7
    },
    {
        "questionText": "Which sport is dubbed the 'king of sports'?",
        "quiz_id": 7
    },
]

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;