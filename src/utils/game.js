import { SETTINGS } from 'constants/game'
import { getStore } from 'utils/store'

const snakeBoardCollision = (x, y) => {
  const { snake } = getStore()
  return x < 0 ||
         y < 0 ||
         x >= SETTINGS.board.width - (snake.size / 2) ||
         y >= SETTINGS.board.height - (snake.size / 2)
}

const snakeSelfCollision = (x, y) => {
  const { snake } = getStore()
  for (let i = 0; i < snake.size; i++) {
    if (snake.array[i].x == x && snake.array[i].y == y) return true
  }
  return false
}

export const collision = (x, y) => {
  return snakeBoardCollision(x, y) || snakeSelfCollision(x, y)
}
