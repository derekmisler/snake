import { SETTINGS } from 'constants/game'
import { randomNumber, drawCircle } from 'utils/helpers'
import { getStore, updateStore } from 'utils/store'

export const renderFood = (ctx, x, y) => {
  const { food } = getStore()
  if (!x || !y) {
    food.x = randomNumber(0, SETTINGS.board.width - food.size),
    food.y = randomNumber(0, SETTINGS.board.height - food.size)
    updateStore({ food })
  }
  drawCircle(ctx, food.x, food.y, food.size, food.color)
}

export const renderSnake = ctx => {
  const { snake, board } = getStore()
  ctx.fillStyle = board.color
  ctx.fillRect(0, 0, SETTINGS.board.width, SETTINGS.board.height)
  console.log(snake.array)
  // Draw the snake
  snake.array.forEach(a => {
    const { x, y } = a
    drawCircle(ctx, x, y, snake.size, snake.color)
  })
  updateStore({ snake })
  // console.log('food location', { x: getStore().food.x, y: getStore().food.y })
  return ctx
}
