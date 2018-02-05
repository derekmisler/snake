# Snaaaaaake!
The game of [snake](https://www.wikiwand.com/en/Snake_(video_game_genre), 'Wikipedia'), written in vanilla JS.

## [Play it here!](https://github.com/derekmisler/snake.git)

_To run locally:_
```bash
git clone https://github.com/derekmisler/snake.git
cd snake
npm install
npm start
```

_App structure:_
```html
  dist/ <!-- This is what gets deployed after building -->
  src/
    components/ <!-- These update the view -->
    constants/ <!-- This contains settings -->
    styles/ <!-- SCSS -->
      components/ <!-- These represent the view -->
      constants/ <!-- This contains variables and settings -->
      utils/ <!-- This contains functions and mixins -->
    utils/ <!-- This is the primary location of the logic -->
```