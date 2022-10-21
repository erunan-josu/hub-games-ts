import './style.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'
import { inputText } from '../../components/inputText'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { Paragraph } from '../../components/Paragraph'
export const Login = () => {
  const template = `
    <main class='login-main'>
        ${Title(1, 'Hub Games')}
        ${Title(3, 'Introduce user name')}
        ${inputText('login-input')}
        ${Paragraph('login-error-p', '❗️hola')}
        <div class='login-btns'>
          ${Button('Sign in', 'signIn-btn')}
          ${Button('Login', 'login-btn')}
        </div>
    </main>
  `
  const printLogin = () => {
    const app = document.querySelector('#app') as HTMLElement | null
    if (app != null) {
      app.innerHTML += template
    }
  }

  Header()
  printLogin()
  Footer()
}
