const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model { }

Result.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quiz',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'result'
    }
);

module.exports = Result;