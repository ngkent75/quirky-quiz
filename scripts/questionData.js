const { Question } = require('../models');

const questionData = [
    {

    }
]

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;