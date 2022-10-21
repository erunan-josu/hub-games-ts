import { changeBg } from './changeBg'

const changeBgBtn = () => {
  const colorModeBtn = document.querySelector(
    '#color-mode-btn'
  ) as HTMLElement | null
  if (colorModeBtn != null) {
    console.log(colorModeBtn)
    colorModeBtn.addEventListener('click', changeBg)
  }
}

export const headerListeners = () => {
  changeBgBtn()
}
