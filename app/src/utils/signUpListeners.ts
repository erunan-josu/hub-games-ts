import { postUser } from '../services/JSON'
import { runPage } from './runPage'
import { getInputValue } from './utils'

const formEvent = () => {
  const btn = document.querySelector('#signUp-form') as HTMLElement | null
  if (btn != null) {
    btn.addEventListener('submit', (e) => {
      e.preventDefault()
      const userName = getInputValue('#newUserName')
      const password = getInputValue('#newUserPwd')
      postUser('users', userName, password)
      runPage('login')
    })
  }
}

export const signUpListeners = () => {
  formEvent()
  /*   submitBtn() */
}
