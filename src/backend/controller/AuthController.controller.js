const path = require('path')
const db = require('../database/index.db')

const AuthController = {
    index: (req,res) => {
        res.status(404).send({
            status:true,
            statusCode: res.statusCode,
            message: '404 Not Found'
        })
    },
    // login
    login: (req,res) => {
        const email = req.body.email
        const password = req.body.password
        if(email && password) {
            const query = `select * from s2pbs where = ${email} limit 1` 
            db.query(query,(error,data)=>{
                if(data.length > 0 && data.password == password){
                    res.status(200).send({
                        status: true,
                        statusCode: res.statusCode,
                        message: 'Login success',
                        redirect : res.redirect('home/dashboard')
                    })
                }else{
                     res.status(422).send({
                    status: false,
                    statusCode: res.statusCode,
                    message: 'error'
            })
                }
            })
        }else{
            res.status(422).send({
                status: false,
                statusCode: res.statusCode,
                message: 'error'
            })
        }
        res.end()
    },

    register: () => {
    },

    logout: () => {

    },
}

module.exports =  AuthController