import './style.css'
import { Title } from '../Title'
import { Button } from '../Button'

export const Header = (page: string) => {
  const template = `
        <header id='header'>
            ${page != 'login' ? Button('🔙', 'go-back-btn') : ''}
            ${Title(2, 'Hub Games')}
            ${Button('🎨 Color Mode', 'color-mode-btn')}
        </header>
    `

  const printHeader = () => {
    const app = document.querySelector('#app') as HTMLDivElement | null
    if (app != null) {
      app.innerHTML += template
    }
  }

  printHeader()
}
