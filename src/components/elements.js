import { SETTINGS } from 'constants/game'
import { randomNumber, drawCircle } from 'utils/helpers'
import { getStore, updateStore } from 'utils/store'
import { clearBoard } from 'components/game'

// The header is also used to display the score
export const renderHeader = (score = 0) => {
  const a = 'a'.repeat(score + 1)
  const scoreClass = score > 0 ? 'score' : ''
  const element = document.createElement('header')
  element.innerHTML = `<h1 id='headline'>Sn<span class='${scoreClass}'>${a}</span>ke!</h1>`
  return element
}

// This will either redraw the circle at it's current location,
// or draw a new circle at a random location
export const renderFood = (ctx, x, y) => {
  const { food } = getStore()
  const { size, color } = SETTINGS.food
  const { width, height } = SETTINGS.board
  if (!x || !y) {
    food.x = randomNumber(size, width - size),
    food.y = randomNumber(size, height - size)
    updateStore({ food })
  }
  drawCircle(ctx, x, y, size * 2, color)
}

// Clear previous snake, then redraw the current snake based on the size of the snake's body
export const renderSnake = ctx => {
  clearBoard(ctx)
  const { snake } = getStore()
  snake.body.forEach(a => {
    const { x, y } = a
    drawCircle(ctx, x, y, snake.size, snake.color)
  })
  return ctx
}
