const uuidv4 = require('uuid').v4
const bcrypt = require('bcrypt')
const db = require('../database/index.db')

const AuthController = {
  index: (req, res) => {
    res.status(404).send({
      status: true,
      statusCode: res.statusCode,
      message: '404 Not Found'
    })
  },
  // login
  login: (req, res) => {
    const { email, password } = req.body
    if (email && password) {
      const query = `select * from s2pbs where = ${email} limit 1`
      db.query(query, (error, data) => {
        if (error) {
          return res.status(500).send({
            error
          })
        }
        if (data.length > 0 && data.password === password) {
        // bcrypt.compare()
          return res.status(200).send({
            status: true,
            statusCode: res.statusCode,
            message: 'Login success',
            redirect: res.redirect('home/dashboard')
          })
        }
        return res.status(422).send({
          status: false,
          statusCode: res.statusCode,
          message: 'error'
        })
      })
    } else {
      return res.status(422).send({
        status: false,
        statusCode: res.statusCode,
        message: 'error'
      })
    }
    res.end()
  },

  register: async (req, res) => {
    const { name, email, password, gender } = req.body
    const id = uuidv4()
    const nameUser = name
    const emailUser = email
    const passwordUser = await bcrypt.hash(password, 10)
    const genderUser = gender
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    return res.status(201).send({
      status: false,
      statusCode: res.statusCode,
      data: [{
        id, nameUser, emailUser, passwordUser, genderUser, createdAt, updatedAt
      }]
    })
    // make some validation
    db.query()

    // if ('') {
    //   return res.status(201).send({
    //     status: false,
    //     statusCode: res.statusCode,
    //     message: 'error'
    //   })
    // }else{
    //         return res.status(422).send({
    //             status: false,
    //             statusCode: 'error'
    //          })
    //     }
  },

  logout: (req, res, next) => {},
}

module.exports = AuthController
