const { Result } = require('../models');

const resultData = [
    {
        "name": "Shrek",
        "quiz_id": 1
    },
    {
        "name": "Donkey",
        "quiz_id": 1
    },
    {
        "name": "Fiona",
        "quiz_id": 1
    },
    {
        "name": "Dragon",
        "quiz_id": 1
    }
]

const seedResult = () => Result.bulkCreate(resultData);

module.exports = seedResult;