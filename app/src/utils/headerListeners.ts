import { changeBg } from './changeBg'
import { getPrevPage } from './utils'
import { runPage } from './runPage'

export const headerListeners = () => {
  goBack()
  changeBgBtn()
  logOut()
}

const goBack = () => {
  const goBackBtn = document.querySelector('#go-back-btn') as HTMLElement | null

  if (goBackBtn != null) {
    goBackBtn.addEventListener('click', () => {
      const prev = getPrevPage()
      runPage(prev)
    })
  }
}

const changeBgBtn = () => {
  const colorModeBtn = document.querySelector(
    '#color-mode-btn'
  ) as HTMLElement | null

  if (colorModeBtn != null) {
    colorModeBtn.addEventListener('click', changeBg)
  }
}

const logOut = () => {
  const logoutBtn = document.querySelector('#logout-btn')
  console.log(logoutBtn)
  logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('user')
    runPage('login')
  })
}
