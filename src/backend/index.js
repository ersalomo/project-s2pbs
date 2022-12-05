import '../scripts/views/auth/AuthPage.js'
import '../styles/style.css'

export function load(){
const mainContent = document.querySelector('#content')
const authLoginElement = document.createElement('auth-page')
    mainContent.append(authLoginElement)    
}