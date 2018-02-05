export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const drawCircle = (ctx, x, y, size, color) => {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fill()

}
