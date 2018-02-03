// Import our top-level sass file.
import 'scss/app.scss'

const app = () => {
  const element = document.getElementById('app')

  element.innerHTML = '<p>Test</p>'

  return element
}

document.body.appendChild(app())
