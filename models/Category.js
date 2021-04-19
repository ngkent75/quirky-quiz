const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model { };

Category.init(
    {
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    },
);

module.exports = Category;