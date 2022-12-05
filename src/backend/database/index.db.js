const { Sequelize } = require('sequelize')
const CONFIG = require('../configs/db.config')

const {HOST,USER,DB,PASSWORD,DIALECT} = CONFIG
const database = new Sequelize(DB,USER,PASSWORD,{
    host:HOST,
    dialect:DIALECT
})

module.exports = database
