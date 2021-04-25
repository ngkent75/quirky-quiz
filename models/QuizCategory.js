const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class QuizCategory extends Model { };

QuizCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quizzes',
                key: 'id',
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'quiz_category',
    },
);

module.exports = QuizCategory;