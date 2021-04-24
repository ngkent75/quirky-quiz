const { User } = require('../models');

const userData = [
    {
        "username": "bobbybob",
        "email": "bobbybob@gmail.com",
        "password": "thisisapassword123"
    },
    {
        "username": "ClarkKent",
        "email": "notSuperman@gmail.com",
        "password": "manOsteel5678"
    },
    {
        "username": "link",
        "email": "ahhhhhhh@gmail.com",
        "password": "ahhhhhh9876"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;