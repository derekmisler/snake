import { SETTINGS } from 'constants/game'
import { getStore, updateStore } from 'utils/store'
import { renderHeader, renderFood } from 'components/elements'

const snakeBoardCollision = (x, y) => {
  const hitRadius = SETTINGS.snake.size / 2
  return x < hitRadius ||
         y < hitRadius ||
         x >= SETTINGS.board.width - hitRadius ||
         y >= SETTINGS.board.height - hitRadius
}

const snakeSelfCollision = (x, y) => {
  const { snake } = getStore()
  const hitRadius = snake.size / 2
  for (let i = 0; i < snake.size; i++) {
    const xHit = x < snake.body[i].x + hitRadius &&
                 x > snake.body[i].x - hitRadius
    const yHit = y < snake.body[i].y + hitRadius &&
                 y > snake.body[i].y - hitRadius
    if (xHit && yHit) return true
  }
  return false
}

export const collision = (x, y) => snakeBoardCollision(x, y) ||
                                   snakeSelfCollision(x, y)

export const ateFood = (x, y, size) => {
  let { food } = getStore()
  const hitRadius = (size + SETTINGS.snake.size / 2)
  return x > food.x - hitRadius &&
         x < food.x + hitRadius &&
         y > food.y - hitRadius &&
         y < food.y + hitRadius
}

export const pointScored = (x, y, ctx) => {
  let { score, snake, food } = getStore()
  food.x = null
  food.y = null
  const newScore = score + 1
  snake.body.push({ x: x * snake.size, y })
  const el = document.getElementById('headline')
  el.parentNode.replaceChild(renderHeader(newScore), el)
  updateStore({ score: newScore, snake, food })
  renderFood(ctx)
}

export const clearBoard = ctx => {
  const { color, width, height } = SETTINGS.board
  ctx.fillStyle = color
  ctx.clearRect(0, 0, width, height)
}

export const gameOver = ctx => {
  clearBoard(ctx)
  const el = document.getElementById('headline')
  el.parentNode.replaceChild(renderHeader(0), el)
  updateStore({ gameOver: true, score: 0 })
}

