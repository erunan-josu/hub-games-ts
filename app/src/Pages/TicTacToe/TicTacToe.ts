import './style.css'
import { Button } from '../../components/Button'
import { playersTemplate } from '../../components/TicTacToe/Players/Players'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'

export const TicTacToe = () => {
  const template = `
    <main class='game-container'>
      ${playersTemplate()}
      <div class='cells-container'></div>
      <div class='msg-container'>
        <p class='win-msg'></p>
        ${Button('Reload', 'reload-btn', '')}
      </div>
    </main>
    `
  const printTicTacToe = () => {
    const app = document.querySelector('#app') as HTMLElement | null
    if (app != null) {
      app.innerHTML += template
    }
    const cellsBox = document.querySelector('.cells-container')
    const cell = `<div class='cell'></div>`

    for (let i = 0; i < 9; i++) {
      if (cellsBox != null) {
        cellsBox.innerHTML += cell
      }
    }
  }

  Header('tictactoe')
  printTicTacToe()
  Footer()
}
