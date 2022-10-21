import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer'
import { inputText } from '../components/inputText'
export const Login = () => {
  const template = `
    <main>
        ${inputText('login-input')}
    </main>
  `
  const printLogin = () => {
    const app = document.querySelector('#app')
    app.innerHTML += template
  }

  Header()
  printLogin()
  Footer()
}
