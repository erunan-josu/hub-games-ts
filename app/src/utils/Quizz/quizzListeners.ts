import { printQuest } from '../../Pages/Quizz/Quizz'
import { runPage } from '../runPage'
import { cleanContainer } from '../utils'
import { Question } from './types'
import { cehckAnswer, checkChecked, printScore } from './utils'

export const quizzListeners = (arr: Question[]) => {
  nextListener(arr)
}

let index = 0
let myCorrect = 0
const nextListener = (arr: Question[]) => {
  const btn = document.querySelector('#next-btn')
  btn?.addEventListener('click', () => {
    if (index > arr.length - 1) return
    const myAnswer = checkChecked()
    if (myAnswer != null) {
      const { correct } = arr[index]
      cleanContainer('#quizz-box')
      if (cehckAnswer(correct, myAnswer)) {
        myCorrect += 1
        console.log(myCorrect)
      }
      index++

      if (index === arr.length) {
        console.log('last')
        printScore(myCorrect)
      } else {
        printQuest(index)
      }
    }
  })
}

export const restartListener = () => {
  const restartBtn = document.querySelector('#restart-btn')
  restartBtn?.addEventListener('click', () => {
    runPage('Quizz')
  })
}
