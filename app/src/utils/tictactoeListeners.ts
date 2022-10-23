import pikachu from '/images/pika.png'
import pokeball from '/images/pokeball.png'
import { getRandomNum } from './getRandomNum'

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
let player1 = true

export const tictactoeListeners = () => {
  cellsListeners()
  reloadListener()
}

const reloadListener = () => {
  const reloadBtn = document.querySelector('#reload-btn')
  reloadBtn?.addEventListener('click', reloadGame)
}

const cellsListeners = () => {
  const cellsNode = document.querySelectorAll(
    '.cell'
  ) as NodeListOf<HTMLElement> | null
  cellsNode?.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (
        cell.classList.contains('x-cell') ||
        cell.classList.contains('o-cell')
      )
        return

      cell.innerHTML += `<img class='x-img x-cell' src='${pikachu}'>`
      cell.classList.add('x-cell')

      if (checkWin(cellsNode, 'x-cell')) {
        alert('Player 1 wins!!')
        showWinnerMsg()
        return
      }
      player1 = !player1
      iaTurn()
    })
  })
}

const iaTurn = () => {
  const cells = document.querySelectorAll('.cell') as NodeListOf<Element> | null

  if (cells != null) {
    if (checkFinish(cells)) return
    const randomCell = getRandomCell(cells)
    if (randomCell) {
      randomCell.innerHTML += `<img class='x-img x-cell' src='${pokeball}'>`
      randomCell.classList.add('o-cell')
    }
    if (checkWin(cells, 'o-cell')) {
      showWinnerMsg()
      alert('IA 👾 Wins!!!')
      return
    }
    player1 = !player1
  }
}

const checkFinish = (array: NodeListOf<Element>) => {
  return Array.from(array).every((item) => {
    item.classList.contains('x-cell') || item.classList.contains('o-cell')
  })
}

const checkWin = (cells: NodeListOf<Element>, currentClass: string) => {
  return winCondition.some((array) => {
    return array.every((i) => cells[i].classList.contains(currentClass))
  })
}

const showWinnerMsg = () => {
  const name = player1
    ? document.querySelector('.p1Name')?.textContent
    : document.querySelector('.p2Name')?.textContent

  const winMsg = document.querySelector('.win-msg')
  if (winMsg !== null) {
    winMsg.innerHTML = `${name} WINS!!! 🥳`
  }
}

const getRandomCell = (cells: NodeListOf<Element>) => {
  let index = getRandomNum(8)
  while (
    cells[index].classList.contains('x-cell') ||
    cells[index].classList.contains('o-cell')
  ) {
    index = getRandomNum(8)
  }
  return cells[index]
}

const reloadGame = () => {
  const cells = document.querySelectorAll('.cell')

  cells.forEach((cell) => {
    cell.classList.remove('x-cell')
    cell.classList.remove('o-cell')
    cell.innerHTML = ''
  })
}
