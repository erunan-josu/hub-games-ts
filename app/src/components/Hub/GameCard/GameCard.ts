import './style.css'
type Game = {
  name: string
  url: string
}

export const GameCard = (game: Game) => `
<div class='game-preview'>
    <img src='${game.url}' alt='${game.name}' data-name='${game.name}' class='game-card'>
</div>
`
