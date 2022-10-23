import { PokemonObj, Stats } from '../../../utils/pokedex/types'
import './style.css'

export const PkmnHero = (pokemon: PokemonObj) => {
  const { name, id, sprites, stats, weight, height } = pokemon
  const hero = `
  <div class='pkmn-container'>
    <img class='pkmn-img' src='${sprites.common}' alt='${name}'>
    <fieldset class='pkmn-details-container'>
        <legend class='legend'>#${id} ${name}</legend>
        <p>weight: ${weight} kg</p>
        <p>height: ${height} m</p>
        <ul class='stats-container'></ul>
    </fieldset>
  </div>
  `
  const heroContainer = document.querySelector('.pkdx-hero-container')
  if (heroContainer !== null) {
    heroContainer.innerHTML += hero
  }

  stats.forEach((stat: Stats) => {
    const li = `
    <li class='stat-container'>
        <span>${stat.stat.name}: </span>
        <input type='range' value='${stat.base_stat}' max='100'>
    </li>`
    const statsContainer = document.querySelector('.stats-container')
    if (statsContainer !== null) {
      statsContainer.innerHTML += li
    }
  })
}
