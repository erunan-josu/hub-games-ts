import { PokemonObj } from './pokedex/types'
import { getData } from '../services/JSON'
import { getPokemons } from '../services/pokemon/getPokemons'
import { cleanContainer } from './utils'
import { Login } from '../Pages/Login/Login'
import { headerListeners } from './headerListeners'
import { loginListeners } from './loginListeners'
import { SignUp } from '../Pages/SignUp/SignUp'
import { signUpListeners } from './signUpListeners'
import { activateElement } from './utils'
import { Hub } from '../Pages/Hub/Hub'
import { hubListeners } from './hubListeners'
import { Pokedex } from '../Pages/Pokedex/Pokedex'
import { pokedexEvents } from './pokedex/pokedexEvents'
import { TicTacToe } from '../Pages/TicTacToe/TicTacToe'
import { tictactoeListeners } from './tictactoeListeners'
import { Quizz } from '../Pages/Quizz/Quizz'
import { Question } from './Quizz/types'
import { quizzListeners } from './Quizz/quizzListeners'
export const runPage = async (pageName: string) => {
  if (pageName != undefined) {
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
        await Hub()
        headerListeners()
        hubListeners()
        break
      case 'TicTacToe':
        localStorage.setItem('page', 'tictactoe')
        cleanContainer('#app')
        TicTacToe()
        headerListeners()
        tictactoeListeners()
        break
      case 'Quizz':
        localStorage.setItem('page', 'quizz')
        cleanContainer('#app')
        let quizzData: Question[] = await getData('quizz')
        await Quizz()
        headerListeners()
        quizzListeners(quizzData)
        break
      case 'Pokedex':
        localStorage.setItem('page', 'pokedex')
        cleanContainer('#app')
        const localPokemon = localStorage.getItem('pokemon')
        let pokemonsData: PokemonObj[]
        if (localPokemon === null) {
          pokemonsData = await getPokemons()
          localStorage.setItem('pokemon', JSON.stringify(pokemonsData))
        } else {
          pokemonsData = JSON.parse(localPokemon)
        }
        await Pokedex(pokemonsData)
        headerListeners()
        pokedexEvents(pokemonsData)
        break
      default:
        alert('Game not found')
    }
  }
}
