import  { Sequelize } from 'sequelize'
import {HOST,USER,PASSWORD,DB,DIALECT} from '../configs/db.config'

const database = new Sequelize(DB,USER,PASSWORD,{
    host:HOST,
    dialect:DIALECT
})

export default database
