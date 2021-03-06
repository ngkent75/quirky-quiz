const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model { };

Category.init(
    {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'category',
    },
);

module.exports = Category;