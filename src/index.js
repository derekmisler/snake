// Import our top-level sass file.
import 'scss/app.scss'
// Import components
import { header, gameBoard } from 'components/structure'
import { stage } from 'components/game'

// Import helper functions
import { handleKeyEvents } from 'utils/keyboard'

const run = () => {
  // Globally-scoped variables
  let score = 0
  // Append elements
  const element = document.getElementById('app')
  element.appendChild(header(score))
  element.appendChild(gameBoard(score))
  element.focus()
  // Set up listeners
  window.addEventListener('keydown', handleKeyEvents, true)
}

run()