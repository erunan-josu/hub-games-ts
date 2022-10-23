import { PokemonObj } from './types'
import { cleanContainer } from '../utils'
import { PkmnHero } from '../../components/Pokedex/PkmnHero/PkmnHero'
import { showPokemons } from './utils'

export const pokedexEvents = (arr: PokemonObj[]) => {
  cardListeners(arr)
  searchListeners(arr)
}

const searchListeners = (pokemonList: PokemonObj[]) => {
  const searchInpt = document.querySelector(
    '.pkmn-search-input'
  ) as HTMLInputElement | null
  const selectType = document.querySelector(
    '.type-select'
  ) as HTMLSelectElement | null

  let fArrPokemon: PokemonObj[] = []

  if (searchInpt !== null && selectType !== null) {
    searchInpt.addEventListener('input', () =>
      search(searchInpt, selectType, fArrPokemon, pokemonList)
    )
    selectType.addEventListener('change', () =>
      search(searchInpt, selectType, fArrPokemon, pokemonList)
    )
  }
}

const cardListeners = (arr: PokemonObj[]) => {
  const cardsNode = document.querySelectorAll(
    '.pkmn-card'
  ) as NodeListOf<HTMLElement>

  cardsNode.forEach((card) => {
    card.addEventListener('click', () => {
      const cardId = Number(card.dataset.num)
      cleanContainer('.pkdx-hero-container')
      PkmnHero(arr[cardId - 1])
    })
  })
}

const search = (
  searchInpt: HTMLInputElement,
  selInpt: HTMLSelectElement,
  filtr: PokemonObj[],
  originl: PokemonObj[]
) => {
  if (selInpt.value === 'all') {
    filtr = originl.filter((pokemon) => {
      const { name } = pokemon
      return name.includes(searchInpt.value)
    })

    cleanContainer('.pkdx-cards-container')
    const cardsContainer = document.querySelector('.pkdx-cards-container')
    if (cardsContainer !== null) {
      renderResult(filtr, 'Upps! Pokemon not found', cardsContainer)
    }
    cardListeners(originl)
  } else {
    filtr = filterByName(originl, searchInpt.value)
    filtr = filterByType(filtr, selInpt.value)
    cleanContainer('.pkdx-cards-container')
    const cardsContainer = document.querySelector('.pkdx-cards-container')
    if (cardsContainer !== null) {
      renderResult(filtr, 'Upps! Pokemon not found', cardsContainer)
    }
    cardListeners(originl)
  }
}

const filterByName = (arr: PokemonObj[], value: string) => {
  return arr.filter((pokemon) => {
    const { name } = pokemon
    return name.includes(value)
  })
}

const filterByType = (arr: PokemonObj[], value: string) => {
  return arr.filter((pokemon) => {
    const { types } = pokemon
    const pkmnTypes = types.map((type) => type.type.name)
    return pkmnTypes.includes(value)
  })
}

const show404 = (elem: Element, text: string) => {
  elem.innerHTML += `<p>${text}</p>`
}

const renderResult = (arr: PokemonObj[], text: string, elem: Element) => {
  arr.length > 0 ? showPokemons(arr) : show404(elem, text)
}
