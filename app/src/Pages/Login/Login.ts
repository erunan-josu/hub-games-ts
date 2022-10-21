import './style.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'
import { inputText } from '../../components/inputText'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { Paragraph } from '../../components/Paragraph'
import { inputPwd } from '../../components/inputPwd'

export const Login = () => {
  const template = `
    <main class='login-main'>
        ${Title(1, 'Hub - Games')}
        ${Title(3, 'Introduce user name')}
        ${inputText('login-input-user')}
        ${Paragraph('login-error-p', '')}
        ${inputPwd('login-input-pwd')}
        ${Paragraph('login-error-p', '')}
        <div class='login-btns'>
          ${Button('Sign in', 'signUp-btn')}
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

  Header('login')
  printLogin()
  Footer()
}
