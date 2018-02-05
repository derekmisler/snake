const width = 800
const height = 600
const snakeSize = 5

// Just some game settings. A lot of this will go into the inital store
export const SETTINGS = {
  fps: 30,
  food: {
    color: '#F38181',
    size: snakeSize,
    x: 0,
    y: 0
  },
  snake: {
    color: '#756C83',
    size: snakeSize,
    length: snakeSize * 2,
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
