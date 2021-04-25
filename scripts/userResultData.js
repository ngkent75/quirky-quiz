const { UserResult } = require('../models');

const userResultData = [
    {
        "user_id": 2,
        "result": "Shrek",
        "quiz_title": "What Shrek character are you?"
    },
    {
        "user_id": 2,
        "result": "Dragon" ,
        "quiz_title": "What Shrek character are you?"
    },
]

const seedUserResult = () => UserResult.bulkCreate(userResultData);

module.exports = seedUserResult;