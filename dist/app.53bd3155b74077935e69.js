/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
var width = 800;
var height = 600;
var snakeSize = 5;

// Just some game settings. A lot of this will go into the inital store
var SETTINGS = {
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
    numSquares: width / snakeSize * (height / snakeSize)
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants_game__ = __webpack_require__(0);
var storeName = 'snakeStore';


var initialState = function initialState() {
  var snake = __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].snake,
      food = __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].food;
  // Create the snake's initial size

  snake.body = [];
  for (var i = snake.length; i > 0; i--) {
    snake.body.push({ x: i, y: snake.size });
  }
  // Store any data that'll eventually change
  var store = {
    food: food,
    snake: snake,
    score: 0,
    gameOver: false
  };
  return store;
};

var updateStore = function updateStore() {
  var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // First, get the full store
  var store = getStore();
  // Next, merge the two
  var newStore = Object.assign(store, newState);
  // Last, replace store with the updated store
  window.sessionStorage.setItem(storeName, JSON.stringify(newStore));
};

var getStore = function getStore() {
  // Get the store
  var store = window.sessionStorage.getItem(storeName);
  // Parse the store
  if (store) return JSON.parse(store);
  // Unless it's empty, then just return the inital state
  return initialState();
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gameBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return playGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_elements__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_game__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_constants_game__ = __webpack_require__(0);





// This will draw the <canvas> with the right supplied settings.
var gameBoard = function gameBoard() {
  var _SETTINGS$board = __WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].board,
      id = _SETTINGS$board.id,
      height = _SETTINGS$board.height,
      width = _SETTINGS$board.width;

  var element = document.createElement('canvas');
  element.setAttribute('id', id);
  element.setAttribute('tabindex', 0);
  element.setAttribute('height', height);
  element.setAttribute('width', width);
  return element;
};

// This clears the board
var clearBoard = function clearBoard(ctx) {
  var _SETTINGS$board2 = __WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].board,
      color = _SETTINGS$board2.color,
      width = _SETTINGS$board2.width,
      height = _SETTINGS$board2.height;

  ctx.fillStyle = color;
  ctx.clearRect(0, 0, width, height);
};

// This redraws the game board as the user moves the snake
var playGame = function playGame(ctx) {
  var increment = __WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].snake.size * 2;

  var _getStore = Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["a" /* getStore */])(),
      snake = _getStore.snake,
      food = _getStore.food;

  // The head of the snake is the first item in the `snake.body` array


  var headX = snake.body[0].x;
  var headY = snake.body[0].y;

  // The direction of the snake is determined by the `handleKeyEvents` function
  if (snake.direction === 'right') headX += increment;else if (snake.direction === 'left') headX -= increment;else if (snake.direction === 'up') headY -= increment;else if (snake.direction === 'down') headY += increment;

  // Check if the head of the snake has either crashed or landed on food
  var snakeCrashed = Object(__WEBPACK_IMPORTED_MODULE_2_utils_game__["b" /* collision */])(headX, headY);
  var snakeAteFood = Object(__WEBPACK_IMPORTED_MODULE_2_utils_game__["a" /* ateFood */])(headX, headY, increment);

  // If either of those are true, end the game or add a point
  if (snakeCrashed) Object(__WEBPACK_IMPORTED_MODULE_2_utils_game__["c" /* gameOver */])(ctx);
  if (snakeAteFood) Object(__WEBPACK_IMPORTED_MODULE_2_utils_game__["d" /* pointScored */])(headX, headY, ctx);

  // Otherwise, move the snake!
  snake.body.pop();
  snake.body.unshift({ x: headX, y: headY });

  // Update the store with the new snake info, then redraw the snake and the food
  Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["c" /* updateStore */])({ snake: snake });
  Object(__WEBPACK_IMPORTED_MODULE_0_components_elements__["c" /* renderSnake */])(ctx);
  Object(__WEBPACK_IMPORTED_MODULE_0_components_elements__["a" /* renderFood */])(ctx, food.x, food.y);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderSnake; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants_game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_helpers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_game__ = __webpack_require__(2);





// The header is also used to display the score
var renderHeader = function renderHeader() {
  var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var a = 'a'.repeat(score + 1);
  var scoreClass = score > 0 ? 'score' : '';
  var element = document.createElement('header');
  element.innerHTML = '<h1 id=\'headline\'>Sn<span class=\'' + scoreClass + '\'>' + a + '</span>ke!</h1>';
  return element;
};

// This will either redraw the circle at it's current location,
// or draw a new circle at a random location
var renderFood = function renderFood(ctx, x, y) {
  var _getStore = Object(__WEBPACK_IMPORTED_MODULE_2_utils_store__["a" /* getStore */])(),
      food = _getStore.food;

  var _SETTINGS$food = __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].food,
      size = _SETTINGS$food.size,
      color = _SETTINGS$food.color;
  var _SETTINGS$board = __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].board,
      width = _SETTINGS$board.width,
      height = _SETTINGS$board.height;

  if (!x || !y) {
    food.x = Object(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["b" /* randomNumber */])(size, width - size), food.y = Object(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["b" /* randomNumber */])(size, height - size);
    Object(__WEBPACK_IMPORTED_MODULE_2_utils_store__["c" /* updateStore */])({ food: food });
  }
  Object(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* drawCircle */])(ctx, x, y, size * 2, color);
};

// Clear previous snake, then redraw the current snake based on the size of the snake's body
var renderSnake = function renderSnake(ctx) {
  Object(__WEBPACK_IMPORTED_MODULE_3_components_game__["a" /* clearBoard */])(ctx);

  var _getStore2 = Object(__WEBPACK_IMPORTED_MODULE_2_utils_store__["a" /* getStore */])(),
      snake = _getStore2.snake;

  snake.body.forEach(function (a) {
    var x = a.x,
        y = a.y;

    Object(__WEBPACK_IMPORTED_MODULE_1_utils_helpers__["a" /* drawCircle */])(ctx, x, y, snake.size, snake.color);
  });
  return ctx;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scss_app_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_scss_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_game__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_elements__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_constants_game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_utils_keyboard__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_utils_store__ = __webpack_require__(1);
// Import our top-level sass file

// Import components


// Import settings

// Import helpers



// Build initial structure/state
Object(__WEBPACK_IMPORTED_MODULE_5_utils_store__["c" /* updateStore */])();
var element = document.getElementById('app');
element.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["b" /* renderHeader */])(0));
element.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1_components_game__["b" /* gameBoard */])(__WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].board.id));
element.focus();
var canvas = document.getElementById(__WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].board.id);
var ctx = canvas.getContext('2d');
// Set up keyboard listener
window.addEventListener('keydown', __WEBPACK_IMPORTED_MODULE_4_utils_keyboard__["a" /* handleKeyEvents */]);
// Game starts here
var run = function run(state) {
  Object(__WEBPACK_IMPORTED_MODULE_5_utils_store__["c" /* updateStore */])(state);
  Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["c" /* renderSnake */])(ctx);
  Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["a" /* renderFood */])(ctx);
  var hereWeGo = setInterval(function () {
    Object(__WEBPACK_IMPORTED_MODULE_1_components_game__["c" /* playGame */])(ctx);

    var _getStore = Object(__WEBPACK_IMPORTED_MODULE_5_utils_store__["a" /* getStore */])(),
        gameOver = _getStore.gameOver;

    if (gameOver) {
      clearInterval(hereWeGo);
      run(Object(__WEBPACK_IMPORTED_MODULE_5_utils_store__["b" /* initialState */])());
    }
  }, __WEBPACK_IMPORTED_MODULE_3_constants_game__["a" /* SETTINGS */].fps);
};

run(Object(__WEBPACK_IMPORTED_MODULE_5_utils_store__["b" /* initialState */])());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return randomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawCircle; });
// Useful for getting a random number within a range, like the board width x height
var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Helpful for quickly drawing a circle
var drawCircle = function drawCircle(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return collision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ateFood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pointScored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return gameOver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_constants_game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_elements__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_game__ = __webpack_require__(2);





// Check if the head of the snake is outside of the bounds of the board
var snakeBoardCollision = function snakeBoardCollision(x, y) {
  var hitRadius = __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].snake.size / 2;
  return x < hitRadius || y < hitRadius || x >= __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].board.width - hitRadius || y >= __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].board.height - hitRadius;
};

// Check if the head of the snake is outside of the bounds of the board
var snakeSelfCollision = function snakeSelfCollision(x, y) {
  var _getStore = Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["a" /* getStore */])(),
      snake = _getStore.snake;

  var hitRadius = snake.size / 2;
  for (var i = 0; i < snake.size; i++) {
    var xHit = x < snake.body[i].x + hitRadius && x > snake.body[i].x - hitRadius;
    var yHit = y < snake.body[i].y + hitRadius && y > snake.body[i].y - hitRadius;
    if (xHit && yHit) return true;
  }
  return false;
};

// If either of these are true, the snake has crashed!
var collision = function collision(x, y) {
  return snakeBoardCollision(x, y) || snakeSelfCollision(x, y);
};

// Check if the head of the snake is within the area of the food
var ateFood = function ateFood(x, y, size) {
  var _getStore2 = Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["a" /* getStore */])(),
      food = _getStore2.food;

  var hitRadius = size + __WEBPACK_IMPORTED_MODULE_0_constants_game__["a" /* SETTINGS */].snake.size / 2;
  return x > food.x - hitRadius && x < food.x + hitRadius && y > food.y - hitRadius && y < food.y + hitRadius;
};

// If a point is scored, reset some things and update other things
var pointScored = function pointScored(x, y, ctx) {
  var _getStore3 = Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["a" /* getStore */])(),
      score = _getStore3.score,
      snake = _getStore3.snake,
      food = _getStore3.food;

  food.x = null;
  food.y = null;
  var newScore = score + 1;
  snake.body.push({ x: x * snake.size, y: y });
  var el = document.getElementById('headline');
  el.parentNode.replaceChild(Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["b" /* renderHeader */])(newScore), el);
  Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["c" /* updateStore */])({ score: newScore, snake: snake, food: food });
  Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["a" /* renderFood */])(ctx);
};

// If the snake crashes, clear the board, reset the score, and end the game
var gameOver = function gameOver(ctx) {
  Object(__WEBPACK_IMPORTED_MODULE_3_components_game__["a" /* clearBoard */])(ctx);
  var el = document.getElementById('headline');
  el.parentNode.replaceChild(Object(__WEBPACK_IMPORTED_MODULE_2_components_elements__["b" /* renderHeader */])(0), el);
  Object(__WEBPACK_IMPORTED_MODULE_1_utils_store__["c" /* updateStore */])({ gameOver: true, score: 0 });
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleKeyEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_store__ = __webpack_require__(1);


// Maps the key pressed with the direction of the snake
var handleKeyEvents = function handleKeyEvents(e) {
  var pressedKey = e.which;

  var _getStore = Object(__WEBPACK_IMPORTED_MODULE_0_utils_store__["a" /* getStore */])(),
      snake = _getStore.snake;

  switch (pressedKey) {
    case 37:
      snake.direction = 'left';
      break;
    case 39:
      snake.direction = 'right';
      break;
    case 38:
      snake.direction = 'up';
      break;
    case 40:
      snake.direction = 'down';
      break;
    default:
      break;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_utils_store__["c" /* updateStore */])({ snake: snake });
};

/***/ })
/******/ ]);
//# sourceMappingURL=app.53bd3155b74077935e69.js.map