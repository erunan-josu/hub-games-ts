import { postUser } from '../services/JSON'
import { runPage } from './runPage'
import { getData } from '../services/JSON'
import { getInputValue } from './utils'
import { activateElement } from './utils'
import { printErrorMsg } from './utils'
import { checkUser } from './utils'

const formEvent = () => {
  const btn = document.querySelector('#signUp-form') as HTMLElement | null

  if (btn != null) {
    btn.addEventListener('submit', async (e) => {
      e.preventDefault()
      const userName = getInputValue('#sUp-u-name')
      const password = getInputValue('#sUp-u-pw')
      postUser('users', userName, password)
      runPage('login')
    })
  }
}

const nameInpt = () => {
  const input = document.querySelector('#sUp-u-name') as HTMLInputElement | null
  if (input !== null) {
    input.addEventListener('input', async () => {
      const usersList = await getData('users')
      const existUser = checkUser('name', usersList, input.value)

      if (existUser >= 0 || input.value.length === 0) {
        printErrorMsg('#sUp-name-err', '❗️No valid name')
        activateElement('#sUp-u-pw', true)
        activateElement('#sUp-submit', true)
      } else {
        printErrorMsg('#sUp-name-err', '✅ Available name')
        activateElement('#sUp-u-pw', false)
        activateElement('#sUp-submit', false)
      }
    })
  }
}

export const signUpListeners = () => {
  formEvent()
  nameInpt()
}
