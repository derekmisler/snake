// elements for the app's structure
export const header = (score = 0) => {
  const a = 'a'.repeat(score + 1)
  const scoreClass = score > 0 ? 'score' : ''
  const element = document.createElement('header')
  element.innerHTML = `<h1>Sn<span class='${scoreClass}'>${a}</span>ke!</h1>`
  return element
}

export const gameBoard = (config = {}) => {
  const { width, height } = config
  const element = document.createElement('canvas')
  element.setAttribute('id', 'game')
  element.setAttribute('tabindex', 0)
  element.setAttribute('height', height || 600)
  element.setAttribute('width', width || 800)
  return element
}

export const footer = (score = 0) => {
  const element = document.createElement('footer')
  element.innerHTML = `<h2>Score: <span id="score">${score}</span></h2>`
  return element
}
