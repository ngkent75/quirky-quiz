const { QuizCategory } = require('../models');

const quizCategoryData = [
    {
        "quiz_id": 1,
        "category_id": 4
    }
]

const seedQuizCategory = () => QuizCategory.bulkCreate(quizCategoryData);

module.exports = seedQuizCategory;