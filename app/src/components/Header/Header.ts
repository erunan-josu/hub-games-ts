import './style.css'
import { Title } from '../Title'
import { Button } from '../Button'

export const Header = () => {
  const template = `
        <header id='header'>
            ${Title(2, 'Hub Games')}
            ${Button('Color Mode', 'color-mode-btn')}
        </header>
    `

  const printHeader = () => {
    console.log('uno')
    const app = document.querySelector('#app') as HTMLDivElement | null
    if (app != null) {
      app.innerHTML += template
    }
  }

  printHeader()
}
