import { renderSnake, renderFood } from 'components/gameElements'
import { getStore, updateStore } from 'utils/store'
import { collision, ateFood, pointScored, gameOver } from 'utils/game'
import { SETTINGS } from 'constants/game'

export const renderGame = ctx => {
  const increment = SETTINGS.snake.size
  const { snake, food } = getStore()

  let headX = snake.array[0].x
  let headY = snake.array[0].y

  if (snake.direction === 'right') headX += increment
  else if (snake.direction === 'left') headX -= increment
  else if (snake.direction === 'up') headY -= increment
  else if (snake.direction === 'down') headY += increment

  const snakeCrashed = collision(headX, headY)
  const snakeAteFood = ateFood(headX, headY, increment * 2)

  if (snakeCrashed) gameOver(ctx)
  if (snakeAteFood) pointScored(headX, headY, ctx)
  else snake.array.pop()

  snake.array.unshift({ x: headX, y: headY })
  updateStore({ snake })
  renderSnake(ctx)
  renderFood(ctx, food.x, food.y)
}
