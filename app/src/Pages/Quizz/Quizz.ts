import './style.css'
import { Question } from '../../utils/Quizz/types'
import { getData } from '../../services/JSON'
import { Header } from '../../components/Header/Header'
import { Title } from '../../components/Title'
import { List } from '../../components/Quizz/List/List'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

export const Quizz = async () => {
  Header('quizz')
  const app = document.querySelector('#app')
  const template = `
  <main id='quizz-main'>
    <section id='quizz-box'></section>
  </main>
  `
  if (app != null) {
    app.innerHTML += template
  }
  await printQuizz(0)
  Footer()
}

export const printQuizz = async (index: number) => {
  await printQuest(index)
  printButton('Next', 'next-btn')
}

export const printQuest = async (index: number) => {
  const quizzData: Question[] = await getData('quizz')
  const section = document.querySelector('#quizz-box')

  if (section != null) {
    const { question, answers } = quizzData[index]
    section.innerHTML += Title(2, question)

    List(section, answers)
  }
}

export const printButton = (text: string, idName: string) => {
  const main = document.querySelector('#quizz-main')
  if (main != null) {
    main.innerHTML += Button(text, idName, '')
  }
}
