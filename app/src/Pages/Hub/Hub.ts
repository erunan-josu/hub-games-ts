import './style.css'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { getData } from '../../services/JSON'
import { GameCard } from '../../components/Hub/GameCard/GameCard'

export const Hub = async () => {
  type Game = {
    name: string
    url: string
  }
  const games: Game[] = await getData('games')
  const userName = localStorage.getItem('user')
  const welcomeMsg = `Welcome 👋 ${userName}`
  const template = `
    <main class='hub-main'>
        ${Title(2, welcomeMsg)}
        <div class='games-card-container'></div>
    </main>
  `

  const printHub = () => {
    const app = document.querySelector('#app') as HTMLElement | null
    if (app != null) {
      app.innerHTML += template

      games.forEach((game: Game) => {
        const cardContainer = document.querySelector(
          '.games-card-container'
        ) as HTMLElement | null

        if (cardContainer != null) {
          cardContainer.innerHTML += GameCard(game)
        }
      })
    }
  }

  Header('hub-games')
  printHub()
  Footer()
}
