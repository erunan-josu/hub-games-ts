import './style.css'
import { runPage } from './utils/runPage'

const user = localStorage.getItem('user')
user === null ? runPage('login') : runPage('hub-games')
