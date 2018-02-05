import { SETTINGS } from 'constants/game'
import { randomNumber, drawCircle } from 'utils/helpers'
import { getStore, updateStore } from 'utils/store'
import { clearBoard } from 'utils/game'

export const renderFood = (ctx, x = null, y = null) => {
  const { food } = getStore()
  drawCircle(ctx, x, y, food.size * 2, food.color)
}

export const renderNewFood = ctx => {
  const { food } = getStore()
  food.x = randomNumber(food.size, SETTINGS.board.width - food.size),
  food.y = randomNumber(food.size, SETTINGS.board.height - food.size)
  updateStore({ food })
  drawCircle(ctx, food.x, food.y, food.size * 2, food.color)
}

export const renderSnake = ctx => {
  // Clear previous snake
  clearBoard(ctx)
  // Draw the new snake
  const { snake } = getStore()
  snake.array.forEach(a => {
    const { x, y } = a
    drawCircle(ctx, x, y, snake.size, snake.color)
  })
  updateStore({ snake })
  return ctx
}
