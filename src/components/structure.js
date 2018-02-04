// elements for the app's structure
import { SETTINGS } from 'constants/game'

export const header = (score = 0) => {
  const a = 'a'.repeat(score + 1)
  const scoreClass = score > 0 ? 'score' : ''
  const element = document.createElement('header')
  element.innerHTML = `<h1>Sn<span class='${scoreClass}'>${a}</span>ke!</h1>`
  return element
}

export const gameBoard = () => {
  const element = document.createElement('canvas')
  element.setAttribute('id', SETTINGS.board.id)
  element.setAttribute('tabindex', 0)
  element.setAttribute('height', SETTINGS.board.height)
  element.setAttribute('width', SETTINGS.board.width)
  return element
}
