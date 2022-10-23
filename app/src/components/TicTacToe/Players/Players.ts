import './style.css'
export const playersTemplate = () => `
<div class='players-container'>
  <p class='p1Name'>${localStorage.getItem('user')}</p>
  VS
  <p class='p2Name'>IA</p>
</div>
`
