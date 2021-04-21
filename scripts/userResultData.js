const { UserResult } = require('../models');

const userResultData = [
    {
        "result_id": 1,
        "user_id": 2
    },
    {
        "result_id": 4,
        "user_id": 2
    },
]

const seedUserResult = () => UserResult.bulkCreate(userResultData);

module.exports = seedUserResult;