import { runPage } from './runPage'

export const hubListeners = () => {
  const gameCards = document.querySelectorAll(
    '.game-card'
  ) as NodeListOf<HTMLElement>

  gameCards.forEach((card) => {
    card.addEventListener('click', () => {
      const gameName = card.dataset.name

      if (gameName !== undefined) {
        runPage(gameName)
      } else {
        alert('Game not found')
      }
    })
  })
}
