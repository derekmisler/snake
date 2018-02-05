import { renderSnake, renderFood } from 'components/elements'
import { getStore, updateStore } from 'utils/store'
import { collision, ateFood, pointScored, gameOver } from 'utils/game'
import { SETTINGS } from 'constants/game'

// This will draw the <canvas> with the right supplied settings.
export const gameBoard = () => {
  const { id, height, width } = SETTINGS.board
  const element = document.createElement('canvas')
  element.setAttribute('id', id)
  element.setAttribute('tabindex', 0)
  element.setAttribute('height', height)
  element.setAttribute('width', width)
  return element
}

// This clears the board
export const clearBoard = ctx => {
  const { color, width, height } = SETTINGS.board
  ctx.fillStyle = color
  ctx.clearRect(0, 0, width, height)
}

// This redraws the game board as the user moves the snake
export const playGame = ctx => {
  const increment = SETTINGS.snake.size * 2
  const { snake, food } = getStore()

  // The head of the snake is the first item in the `snake.body` array
  let headX = snake.body[0].x
  let headY = snake.body[0].y

  // The direction of the snake is determined by the `handleKeyEvents` function
  if (snake.direction === 'right') headX += increment
  else if (snake.direction === 'left') headX -= increment
  else if (snake.direction === 'up') headY -= increment
  else if (snake.direction === 'down') headY += increment

  // Check if the head of the snake has either crashed or landed on food
  const snakeCrashed = collision(headX, headY)
  const snakeAteFood = ateFood(headX, headY, increment)

  // If either of those are true, end the game or add a point
  if (snakeCrashed) gameOver(ctx)
  if (snakeAteFood) pointScored(headX, headY, ctx)
  
  // Otherwise, move the snake!
  snake.body.pop()
  snake.body.unshift({ x: headX, y: headY })

  // Update the store with the new snake info, then redraw the snake and the food
  updateStore({ snake })
  renderSnake(ctx)
  renderFood(ctx, food.x, food.y)
}
