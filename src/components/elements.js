import { SETTINGS } from 'constants/game'
import { randomNumber, drawCircle } from 'utils/helpers'
import { getStore, updateStore } from 'utils/store'
import { clearBoard } from 'utils/game'

export const renderHeader = (score = 0) => {
  const a = 'a'.repeat(score + 1)
  const scoreClass = score > 0 ? 'score' : ''
  const element = document.createElement('header')
  element.innerHTML = `<h1 id='headline'>Sn<span class='${scoreClass}'>${a}</span>ke!</h1>`
  return element
}

export const renderFood = (ctx, x, y) => {
  const { food } = getStore()
  if (!x || !y) {
    food.x = randomNumber(food.size, SETTINGS.board.width - food.size),
    food.y = randomNumber(food.size, SETTINGS.board.height - food.size)
    updateStore({ food })  
  } else {
    food.x = x
    food.y = y
  }
  drawCircle(ctx, food.x, food.y, food.size * 2, food.color)
}

export const renderSnake = ctx => {
  // Clear previous snake
  clearBoard(ctx)
  // Draw the new snake
  const { snake } = getStore()
  snake.body.forEach(a => {
    const { x, y } = a
    drawCircle(ctx, x, y, snake.size, snake.color)
  })
  updateStore({ snake })
  return ctx
}
