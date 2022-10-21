import { cleanContainer } from './utils'
import { Login } from '../Pages/Login/Login'
import { headerListeners } from './headerListeners'
import { loginListeners } from './loginListeners'
import { SignUp } from '../Pages/SignUp/SignUp'
import { signUpListeners } from './signUpListeners'
export const runPage = (pageName: string) => {
  switch (pageName) {
    case 'login':
      localStorage.setItem('page', 'login')
      cleanContainer('#app')
      Login()
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
  }
}
