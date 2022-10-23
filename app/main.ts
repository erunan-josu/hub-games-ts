import './style.css'
import { runPage } from './src/utils/runPage'

const user = localStorage.getItem('user')
user === null ? runPage('login') : runPage('hub-games')
