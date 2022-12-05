import  { Sequelize } from 'sequelize'
import CONFIG from '../configs/db.config.js'

const {HOST,USER,DB,PASSWORD,DIALECT} = CONFIG
const database = new Sequelize(DB,USER,PASSWORD,{
    host:HOST,
    dialect:DIALECT
})

export default database
