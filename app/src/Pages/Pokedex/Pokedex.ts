import './style.css'
import { PokemonObj } from '../../utils/pokedex/types'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'
import { PkmnSearchbar } from '../../components/Pokedex/PkmnSearchbar/PkmnSearchbar'
import { PkmnHero } from '../../components/Pokedex/PkmnHero/PkmnHero'
import { showPokemons } from '../../utils/pokedex/utils'

export const Pokedex = async (pokemonsData: PokemonObj[]) => {
  const template = `
  <main>
    <section class='pkdx-container'>
      <div class='pkdx-searchbar-container'></div>
      <div class='pkdx-hero-container'></div>
      <div class='pkdx-cards-container'></div>
    </section>
  </main>
  `

  const printPokedex = () => {
    const app = document.querySelector('#app') as HTMLElement | null
    if (app != null) {
      app.innerHTML += template
      PkmnSearchbar(pokemonsData)
      PkmnHero(pokemonsData[10])
      showPokemons(pokemonsData)
    }
  }

  Header('pokedex')
  printPokedex()
  Footer()
}
