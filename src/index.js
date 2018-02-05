// Import our top-level sass file
import 'scss/app.scss'
// Import components
import { playGame, gameBoard } from 'components/game'
import { renderHeader, renderSnake, renderFood } from 'components/elements'
// Import settings
import { SETTINGS } from 'constants/game'
// Import helpers
import { handleKeyEvents } from 'utils/keyboard'
import { getStore, updateStore, initialState } from 'utils/store'

// Build initial structure/state
updateStore()
const element = document.getElementById('app')
element.appendChild(renderHeader(0))
element.appendChild(gameBoard(SETTINGS.board.id))
element.focus()
const canvas = document.getElementById(SETTINGS.board.id)
const ctx = canvas.getContext('2d')
// Set up keyboard listener
window.addEventListener('keydown', handleKeyEvents)
// Game starts here
const run = state => {
  updateStore(state)
  renderSnake(ctx)
  renderFood(ctx)
  const hereWeGo = setInterval(() => {
    playGame(ctx)
    const { gameOver } = getStore()
    if (gameOver) {
      clearInterval(hereWeGo)
      run(initialState())
    }
  }, SETTINGS.fps)
}

run(initialState())