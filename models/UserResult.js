const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserResult extends Model { };

UserResult.init(
    {
        result_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'result',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_result'
    }
);

module.exports = UserResult;