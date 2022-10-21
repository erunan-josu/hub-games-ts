export const Footer = () => {
  const template = `
    <footer id='footer'></footer>
    `
  const printFooter = () => {
    const app = document.querySelector('#app')
    app.innerHTML += template
  }

  printFooter()
}
