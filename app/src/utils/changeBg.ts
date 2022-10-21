export const changeBg = () => {
  const app = document.querySelector('#app') as HTMLElement | null
  if (app != null) {
    app.style.backgroundColor = getRandomColor()
  }
}

const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomColor = () => `
  rgb(${getRandomNum(0, 240)}, ${getRandomNum(0, 240)}, ${getRandomNum(0, 240)})
  `
