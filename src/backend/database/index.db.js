const { Sequelize } = require('sequelize')
// const CONFIG = require('../configs/db.config')
const dbConfig = require('../database.json')

// const {HOST,USER,DB,PASSWORD,DIALECT} = CONFIG
// const db = new Sequelize(DB,USER,PASSWORD,{
//     host:HOST,
//     dialect:DIALECT
// })
const  {username,password,database,host,dialect} = dbConfig.development
const db = new Sequelize(database,username,password,{
    host:host,
    dialect:dialect
})

module.exports = db
