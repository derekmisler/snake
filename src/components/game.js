import { renderSnake, renderFood } from 'components/gameElements'
import { getStore, updateStore } from 'utils/store'
import { collision } from 'utils/game'
import { SETTINGS } from 'constants/game'

export const renderGame = ctx => {
  const increment = SETTINGS.snake.size
  const state = getStore()
  let headX = state.snake.array[0].x
  let headY = state.snake.array[0].y

  if (state.snake.direction === 'right') headX += increment
  else if (state.snake.direction === 'left') headX -= increment
  else if (state.snake.direction === 'up') headY -= increment
  else if (state.snake.direction === 'down') headY += increment

  const snakeCrashed = collision(headX, headY)
  if (snakeCrashed) {
    ctx.clearRect(0, 0, SETTINGS.board.width, SETTINGS.board.height)
    state.gameOver = true
    return updateStore(state)
  }

  const snakeAteFood = headX > state.food.x - increment / 2 &&
                       headX < state.food.x + increment / 2 &&
                       headY > state.food.y - increment / 2 &&
                       headY < state.food.y + increment / 2
  if (snakeAteFood) {
    state.score++
    renderFood(ctx)
  } else {
    state.snake.array.pop()
  }
  state.snake.array.unshift({ x: headX, y: headY })
  // console.log(state)
  updateStore(state)
  renderSnake(ctx)
  renderFood(ctx, state.food.x, state.food.y)
}
