// Import our top-level sass file
import 'scss/app.scss'
// Import components
import { header, gameBoard } from 'components/structure'
import { renderGame } from 'components/game'
import { renderSnake, renderFood } from 'components/gameElements'
// Import settings
import { SETTINGS } from 'constants/game'
// Import helpers
import { handleKeyEvents } from 'utils/keyboard'
import { getStore, updateStore, initialState } from 'utils/store'

// Build initial structure/state
const { score } = initialState()
const element = document.getElementById('app')
element.appendChild(header(score))
element.appendChild(gameBoard(SETTINGS.board.id))
element.focus()
const canvas = document.getElementById(SETTINGS.board.id)
const ctx = canvas.getContext('2d')
// Set up keyboard listener
window.addEventListener('keydown', handleKeyEvents)
// Game starts here
const run = () => {
  updateStore(initialState())
  renderSnake(ctx)
  renderFood(ctx)
  const hereWeGo = setInterval(() => {
    renderGame(ctx)
    const state = getStore()
    if (state.gameOver) {
      console.log('you lost')
      clearInterval(hereWeGo)
      run()
    }
  }, SETTINGS.fps)
}

run()