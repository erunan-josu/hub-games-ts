import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header/Header'
import { getData } from '../../services/JSON'

export const Hub = async () => {
  console.log('hub')

  type Game = {
    name: string
    url: string
  }
  const games: Game[] = await getData('games')
  console.log(games)

  Header('hub-games')
  Footer()
}
