import { DataTypes } from 'sequelize'
import database from '../database/index.db'

const userModel = database.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
},{timestamps: true})
export default userModel