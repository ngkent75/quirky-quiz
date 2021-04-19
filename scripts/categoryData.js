const { Category } = require('../models');

const categoryData = [
    {

    }
]

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;