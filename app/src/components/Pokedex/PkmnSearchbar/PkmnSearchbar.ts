import { PokemonObj } from '../../../utils/pokedex/types'
import { getTypes } from '../../../utils/pokedex/utils'
import './style.css'

export const PkmnSearchbar = (pokemons: PokemonObj[]) => {
  const template = `
      <input class='pkmn-search-input' placeholder='Search Pokemon'>
      <select name='pokemon-type' class='type-select'></select>
    `
  const searchbarBox = document.querySelector('.pkdx-searchbar-container')
  if (searchbarBox !== null) {
    searchbarBox.innerHTML += template
  }

  const types = getTypes(pokemons)
  types.forEach((type) => {
    const option = `<option value='${type}'>${type}</option>`
    const select = document.querySelector('.type-select')
    if (select !== null) {
      select.innerHTML += option
    }
  })
}
