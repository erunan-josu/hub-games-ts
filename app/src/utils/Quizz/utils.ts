import { Title } from '../../components/Title'
import { printButton } from '../../Pages/Quizz/Quizz'
import { removeContainer } from '../utils'
import { restartListener } from './quizzListeners'
export const checkChecked = () => {
  const inpt = document.querySelector(
    'input[type="radio"]:checked'
  ) as HTMLInputElement | null

  return inpt != null ? inpt.value : null
}

export const cehckAnswer = (correct: string, myAnswer: string) => {
  return correct === myAnswer
}

export const printScore = (score: number) => {
  const quizzBox = document.querySelector('#quizz-box')
  const playerName = localStorage.getItem('user')
  const msg = getFinalMsg(score)
  console.log(msg)
  const template = `
      <div id='score-box'>
        ${msg}
        <p>${playerName} score: ${score}</p>
      </div>
    `
  if (quizzBox != null) {
    quizzBox.innerHTML += template
  }
  removeContainer('#next-btn')
  printButton('Restart', 'restart-btn')
  restartListener()
}

const getFinalMsg = (num: number) => {
  const perfect = 'Wow! You must be a Pokemon Master 😎'
  const pass = 'Congratulations!🥳 You worked pretty hard'
  const lose = 'You need to work harder 😑'
  if (num < 5) {
    return Title(1, lose)
  } else if (num < 10) {
    return Title(1, pass)
  } else {
    return Title(1, perfect)
  }
}
