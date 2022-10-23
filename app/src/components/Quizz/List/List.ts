import './style.css'
import { Answer } from '../Answer/Answer'
export const List = (elem: Element, arr: string[]) => {
  elem.innerHTML += `<ul id='answers-list'></ul>`

  const list = document.querySelector('#answers-list')
  if (list != null) {
    arr?.forEach((item) => {
      list.innerHTML += Answer(item, 'answers', 'list-item')
    })
  }
}
