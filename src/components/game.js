import { renderSnake, renderFood } from 'components/elements'
import { getStore, updateStore } from 'utils/store'
import { collision, ateFood, pointScored, gameOver } from 'utils/game'
import { SETTINGS } from 'constants/game'

export const gameBoard = () => {
  const element = document.createElement('canvas')
  element.setAttribute('id', SETTINGS.board.id)
  element.setAttribute('tabindex', 0)
  element.setAttribute('height', SETTINGS.board.height)
  element.setAttribute('width', SETTINGS.board.width)
  return element
}

export const playGame = ctx => {
  const increment = SETTINGS.snake.size * 2
  const { snake, food } = getStore()

  let headX = snake.body[0].x
  let headY = snake.body[0].y

  if (snake.direction === 'right') headX += increment
  else if (snake.direction === 'left') headX -= increment
  else if (snake.direction === 'up') headY -= increment
  else if (snake.direction === 'down') headY += increment

  const snakeCrashed = collision(headX, headY)
  const snakeAteFood = ateFood(headX, headY, increment)

  if (snakeCrashed) gameOver(ctx)
  if (snakeAteFood) pointScored(headX, headY, ctx)
  else snake.body.pop()

  snake.body.unshift({ x: headX, y: headY })
  updateStore({ snake })
  renderSnake(ctx)
  renderFood(ctx, food.x, food.y)
}
