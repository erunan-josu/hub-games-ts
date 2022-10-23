import { InputRadio } from '../../InputRadio'
import { Label } from '../../Label'
import './style.css'
export const Answer = (value: string, name: string, className: string) => {
  return `
    <li class='${className}'>
      ${InputRadio(value, name)}
      ${Label(value)}
    </li>
    `
}
