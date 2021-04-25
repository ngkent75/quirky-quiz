const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model { }

Question.init(
    {
        questionText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quizzes',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'question'
    }
);

module.exports = Question;