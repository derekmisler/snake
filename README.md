# Snaaaaaake!
The game of [snake](https://www.wikiwand.com/en/Snake_(video_game_genre), 'Wikipedia'), written in vanilla JS.

### To run locally:
```bash
git clone https://github.com/derekmisler/snake.git
cd snake
npm install
npm start
```

### App structure:
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

### Some notes:
* No framework!
* `sessionStorage` acts as the data store.
* SCSS for styling.
* Webpack for bundling.
