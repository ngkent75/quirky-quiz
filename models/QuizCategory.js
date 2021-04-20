const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class QuizCategory extends Model { };

QuizCategory.init(
    {
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quiz',
                key: 'id',
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quiz_category',
    },
);

module.exports = QuizCategory;