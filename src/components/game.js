import { handleKeyEvents } from 'utils/keyboard'

export const stage = (canvas, config = {}) => (
  {
    keyEvent: handleKeyEvents(),
    width: canvas.width,
    height: canvas.height,
    length: [],
    food: {},
    score: 0,
    direction: 'right',
    config: {
      cw: 10,
      size: 5,
      fps: 1000,
      ...config
    }
  }
)