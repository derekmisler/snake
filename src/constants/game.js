const width = 800
const height = 600
const snakeSize = 5

export const SETTINGS = {
  fps: 50,
  food: {
    color: '#F38181',
    size: snakeSize
  },
  snake: {
    color: '#756C83',
    size: snakeSize,
    direction: 'right'
  },
  board: {
    id: 'game',
    color: '#FBFBFB',
    width: width,
    height: height,
    numSquares: (width / snakeSize) * (height / snakeSize)
  }
}
