const { QuizCategory } = require('../models');

const quizCategoryData = [
    {
        "quiz_id": 1,
        "category_id": 4
    },
    {
        "quiz_id": 2,
        "category_id": 1
    },
    {
        "quiz_id": 3,
        "category_id": 5
    },
    {
        "quiz_id": 4,
        "category_id": 6
    },
    {
        "quiz_id": 5,
        "category_id": 4
    },
    {
        "quiz_id": 6,
        "category_id": 2
    },
    {
        "quiz_id": 7,
        "category_id": 3
    },
]

const seedQuizCategory = () => QuizCategory.bulkCreate(quizCategoryData);

module.exports = seedQuizCategory;