const storeName = 'snakeStore'
import { SETTINGS } from 'constants/game'

export const initialState = () => {
  const { snake, food } = SETTINGS
  // Create the snake's initial size
  snake.array = []
  for (let i = snake.length; i > 0; i--) {
    snake.array.push({ x: i, y: snake.size })
  }
  // Store any data that'll eventually change
  const store = {
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
  const newStore = Object.assign(store, newState)
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