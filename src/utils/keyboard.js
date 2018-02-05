import { getStore, updateStore } from 'utils/store'

export const handleKeyEvents = e => {
  const pressedKey = e.which
  let { snake } = getStore()
  switch (pressedKey) {
  case 37:
    snake.direction = 'left'
    break
  case 39:
    snake.direction = 'right'
    break
  case 38:
    snake.direction = 'up'
    break
  case 40:
    snake.direction = 'down'
    break
  default:
    break
  }
  updateStore({ snake })
}
