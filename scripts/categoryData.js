const { Category } = require('../models');

const categoryData = [
    {
        "category": "Art"
    },
    {
        "category": "Science"
    },
    {
        "category": "Sports"
    },
    {
        "category": "Entertainment"
    },
    {
        "category": "Geography"
    },
    {
        "category": "History"
    }    
]

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;