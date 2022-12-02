import path from 'path'

const AuthController = {
    index: (req,res) => {
        // const mainContent = document.querySelector('#content')
        // const authLoginElement = document.createElement('auth-page')
        // mainContent.append(authLoginElement)
        res.status(200).send({
            status: true,
            statusCode: res.statusCode,
            message: res.statusMessage
        })
    },
    login: () => {
        
    },
    register: () => {
    },
    logout: () => {

    },
}

export default AuthController