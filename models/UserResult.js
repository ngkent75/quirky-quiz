const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserResult extends Model { };

UserResult.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        result: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quiz_title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'user_result'
    }
);

module.exports = UserResult;