export type PokemonObj = {
  height: number
  id: number
  name: string
  order: number
  sprites: Sprites
  stats: Stats[]
  types: Types[]
  weight: number
}

type Sprites = {
  common: string
  shiny: string
}
type Types = {
  slot: number
  type: Type
}

type Type = {
  name: string
  url: string
}

export type Stats = {
  base_stat: number
  effort: number
  stat: Stat
}

export type Stat = {
  name: string
  url: string
}

export type TypesList = {}

export type Colors = {
  electric: string
  normal: string
  fire: string
  water: string
  ice: string
  rock: string
  flying: string
  grass: string
  psychic: string
  ghost: string
  bug: string
  poison: string
  ground: string
  dragon: string
  steel: string
  fighting: string
  default: string
  fairy: string
}
