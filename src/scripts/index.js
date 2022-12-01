import '../scripts/views/auth/AuthPage'

export function load(){
    const mainContent = document.querySelector('#content')
    const authLoginElement = document.createElement('auth-page')
    mainContent.append(authLoginElement)
}