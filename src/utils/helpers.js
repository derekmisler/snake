// Useful for getting a random number within a range, like the board width x height
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Helpful for quickly drawing a circle
export const drawCircle = (ctx, x, y, size, color) => {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fill()

}
