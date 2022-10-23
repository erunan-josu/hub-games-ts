import './style.css'
import { Colors } from '../../../utils/pokedex/types'
import { PokemonObj } from '../../../utils/pokedex/types'

const typeColors: Colors = {
  electric: '#FFEA70',
  normal: '#A3ACAF',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#33B95C',
  psychic: '#F366B9',
  ghost: '#4F2455',
  bug: '#A2FAA3',
  poison: '#B97FC9',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#C94545',
  default: '#2A1A1F',
  fairy: '#FDB9E8',
}

export const PkmnCard = (pokemon: PokemonObj) => {
  const { types, id, sprites, name } = pokemon
  const firstType = types[0].type.name

  const pokemonCard = `
    <figure data-num='${id}' class='pkmn-card' style="background: ${typeColors[firstType]}">
        <div class='pkmn-num-container'>
            <p class='pkmn-card-num'># ${id}</p>
        </div>
        <div class='pkmn-img-container'>
            <img class='pkmn-card-img' src='${sprites.common}' alt='${name}'>
        </div>
        <figcaption class='pkmn-card-name'>${name}</figcaption>
    </figure>
    `
  const cardsBox = document.querySelector('.pkdx-cards-container')
  if (cardsBox !== null) {
    cardsBox.innerHTML += pokemonCard
  }
}
