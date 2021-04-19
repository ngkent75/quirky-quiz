const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model { };

Answer.init(
    {
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'question',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'answer'
    },
);

module.exports = Answer;