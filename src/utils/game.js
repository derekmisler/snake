import { SETTINGS } from 'constants/game'
import { getStore, updateStore } from 'utils/store'
import { header } from 'components/structure'
import { renderNewFood } from 'components/gameElements'

const snakeBoardCollision = (x, y) => (
  x < SETTINGS.snake.size ||
  y < SETTINGS.snake.size ||
  x >= SETTINGS.board.width - SETTINGS.snake.size ||
  y >= SETTINGS.board.height - SETTINGS.snake.size
)

const snakeSelfCollision = (x, y) => {
  const { snake } = getStore()
  for (let i = 0; i < snake.size; i++) {
    if (snake.array[i].x == x && snake.array[i].y == y) return true
  }
  return false
}

export const collision = (x, y) => snakeBoardCollision(x, y) || snakeSelfCollision(x, y)

export const ateFood = (x, y, size) => {
  let { food, snake } = getStore()
  return x > food.x - (size + snake.size) &&
         x < food.x + (size + snake.size) &&
         y > food.y - (size + snake.size) &&
         y < food.y + (size + snake.size)
}

export const pointScored = (x, y, ctx) => {
  let { score, snake, food } = getStore()
  food.x = null
  food.y = null
  const newScore = score + 1
  snake.array.push({ x, y })
  const el = document.getElementById('headline')
  el.parentNode.replaceChild(header(newScore), el)
  updateStore({ score: newScore, snake, food })
  renderNewFood(ctx)
}

export const clearBoard = ctx => {
  const { color, width, height } = SETTINGS.board
  ctx.fillStyle = color
  ctx.clearRect(0, 0, width, height)
}

export const gameOver = ctx => {
  clearBoard(ctx)
  const el = document.getElementById('headline')
  el.parentNode.replaceChild(header(0), el)
  updateStore({ gameOver: true, score: 0 })
}

