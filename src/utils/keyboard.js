import { keyMap } from 'constants/keyboard'

export const handleKeyEvents = e => {
  const pressedKey = e.which
  console.log(e.which, keyMap[pressedKey])
  return keyMap[pressedKey]
}
