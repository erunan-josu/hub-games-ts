import { cleanContainer } from './utils'
import { Login } from '../Pages/Login/Login'
import { headerListeners } from './headerListeners'
import { loginListeners } from './loginListeners'
import { SignUp } from '../Pages/SignUp/SignUp'
import { signUpListeners } from './signUpListeners'
import { activateElement } from './utils'
import { Hub } from '../Pages/Hub/Hub'
export const runPage = (pageName: string) => {
  switch (pageName) {
    case 'login':
      localStorage.setItem('page', 'login')
      cleanContainer('#app')
      Login()
      activateElement('#login-input-pw', false)
      headerListeners()
      loginListeners()
      break
    case 'signUp':
      localStorage.setItem('page', 'signUp')
      cleanContainer('#app')
      SignUp()
      headerListeners()
      signUpListeners()
      break
    case 'hub-games':
      localStorage.setItem('page', 'hub-games')
      cleanContainer('#app')
      Hub()
      headerListeners()
      break
    default:
      console.log('game not found')
  }
}
