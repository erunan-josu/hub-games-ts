import { runPage } from './runPage'
import { getData } from '../services/JSON'
import { getInputValue } from './utils'

export const loginListeners = () => {
  signUpBtn()
  loginBtn()
}
const signUpBtn = () => {
  const btn = document.querySelector('#signUp-btn') as HTMLElement | null
  if (btn != null) {
    btn.addEventListener('click', () => {
      runPage('signUp')
    })
  }
}

type User = {
  name: string
  pw: string
  id: string
}

const loginBtn = () => {
  const btn = document.querySelector('#login-btn') as HTMLElement | null
  if (btn != null) {
    btn.addEventListener('click', async () => {
      const usersList: User[] = await getData('users')
      const userName = getInputValue('#login-input-user')
      const filter = usersList.filter((user: User) => user.name === userName)
      if (filter.length > 0) {
        const password = getInputValue('#login-input-pw')
        if (password === filter[0].pw) {
          localStorage.setItem('user', userName)
          runPage('hub-games')
        }
      } else {
        alert("❗️User don't exist")
      }
    })
  }
}
