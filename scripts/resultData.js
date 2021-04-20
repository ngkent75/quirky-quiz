const { Result } = require('../models')

const resultData = [
    {
        "result": "Shrek",
        "value": 0,
        "quiz_id": 1
    },
    {
        "result": "Donkey",
        "value": 0,
        "quiz_id": 1
    },
    {
        "result": "Fiona",
        "value": 0,
        "quiz_id": 1
    },
    {
        "result": "Dragon",
        "value": 0,
        "quiz_id": 1
    }
]

const seedResult = () => Result.bulkCreate(resultData);

module.exports = seedResult;