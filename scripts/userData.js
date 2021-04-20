const { User } = require('../models');

const userData = [
    {
        "username": "bobbybob",
        "email": "bobbybob@gmail.com",
        "password": "thisisapassword123"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;