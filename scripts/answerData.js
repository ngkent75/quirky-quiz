const { Answer } = require('../models');

const answerData = [
    {

    }
]

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;