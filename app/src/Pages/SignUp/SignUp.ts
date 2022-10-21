import './style.css'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { inputText } from '../../components/inputText'
import { inputPwd } from '../../components/inputPwd'
import { ButtonSubmit } from '../../components/ButtonSubmit'
import { Fieldset } from '../../components/SignUp/Fieldset'
import { Footer } from '../../components/Footer'
export const SignUp = () => {
  const template = `
  <form id='signUp-form'>
    ${Title(1, 'Get Started')}
    ${Fieldset('User name', inputText('newUserName'))}
    ${Fieldset('Password', inputPwd('newUserPwd'))}
    ${ButtonSubmit('Submit', 'signUp-submit')}
  </form>
  `
  const printSignUp = () => {
    const app = document.querySelector('#app') as HTMLElement | null
    if (app != null) {
      app.innerHTML += template
    }
  }
  Header('signUp')
  printSignUp()
  Footer()
}
