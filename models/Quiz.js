const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model { };

Quiz.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'quiz',
    },
);

module.exports = Quiz;