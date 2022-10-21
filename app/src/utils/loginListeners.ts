import { runPage } from './runPage'
import { getUsers } from '../services/JSON'

export const loginListeners = () => {
  inputUser()
  signUpBtn()
  loginBtn()
}
const signUpBtn = () => {
  const btn = document.querySelector('#signUp-btn') as HTMLElement | null
  console.log(btn)
  if (btn != null) {
    btn.addEventListener('click', () => {
      runPage('signUp')
    })
  }
}

const loginBtn = () => {
  const btn = document.querySelector('#login-btn') as HTMLElement | null
  if (btn != null) {
    btn.addEventListener('click', () => {
      console.log('holaaaa')
    })
  }
}

const inputUser = () => {
  const btn = document.querySelector(
    '#login-input-user'
  ) as HTMLInputElement | null
  console.log(btn)
  if (btn != null) {
    btn.addEventListener('input', async () => {
      const usersList = await getUsers('users')
      const exist = checkExist(usersList, btn.value)
      console.log(exist)
    })
  }
}

const checkExist = (list: unknown, userName: string) => {
  return list.findIndex(({ name }) => name === userName)
}
