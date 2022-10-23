import { PokemonObj } from './types'
import { PkmnCard } from '../../components/Pokedex/PkmnCard/PkmnCard'

export const showPokemons = (arr: PokemonObj[]) => {
  arr.forEach((item) => PkmnCard(item))
}

export const getTypes = (arr: PokemonObj[]) => {
  const typesArray = ['all']
  arr.forEach((pkmn: PokemonObj) => {
    const { types } = pkmn
    if (typesArray.includes(types[0].type.name)) return
    typesArray.push(types[0].type.name)
  })
  return typesArray
}
