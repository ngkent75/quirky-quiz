const { QuizCategory } = require('../models');

const quizCategoryData = [
    {

    }
]

const seedQuizCategory = () => QuizCategory.bulkCreate(quizCategoryData);

module.exports = seedQuizCategory;