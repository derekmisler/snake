const storeName = 'snakeStore'
import { SETTINGS } from 'constants/game'

export const initialState = () => {
  const { fps, snake, food, board } = SETTINGS
  snake.array = []
  for (let i = snake.size; i > 0; i--) {
    snake.array.push({ x: i, y: snake.size })
  }
  const store = {
    fps,
    board,
    food,
    snake,
    score: 0,
    gameOver: false
  }
  return store
}

export const updateStore = (newState = {}) => {
  // First, get the full store
  const store = getStore()
  // Next, merge the two
  const newStore = { ...store, ...newState }
  // Last, replace store with the updated store
  window.sessionStorage.setItem(storeName, JSON.stringify(newStore))
}

export const getStore = () => {
  // Get the store
  const store = window.sessionStorage.getItem(storeName)
  // Parse the store
  if (store) return JSON.parse(store)
  // Unless it's empty, then just return the inital state
  return initialState()
}