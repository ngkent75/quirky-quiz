const { UserResult } = require('../models');

const userResultData = [
    {
        "user_id": 2,
        "result": "Shrek"
    },
    {
        "user_id": 2,
        "result": "Dragon" 
    },
]

const seedUserResult = () => UserResult.bulkCreate(userResultData);

module.exports = seedUserResult;