import './views/auth/AuthPage'
import '../styles/style.css'

export default function load() {
  const mainContent = document.querySelector('#content')
  const authLoginElement = document.createElement('auth-page')
  mainContent.append(authLoginElement)
}
