/*-------------------------------- Constants --------------------------------*/
//winning states


/*---------------------------- Variables (state) ----------------------------*/
let theBoard = [], trackTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
const gameStatus = document.querySelector('#message')
const squaresEl = document.querySelectorAll('.square')
const sq0El = document.getElementById('sq0')
const sq1El = document.getElementById('sq1')
const sq2El = document.getElementById('sq2')
const sq3El = document.getElementById('sq3')
const sq4El = document.getElementById('sq4')
const sq5El = document.getElementById('sq5')
const sq6El = document.getElementById('sq6')
const sq7El = document.getElementById('sq7')
const sq8El = document.getElementById('sq8')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
//first create an initial state array 
function init () {
  // theBoard = new Array(9).fill(null)
  theBoard = [-1, null, null, 1, null, null, null, -1, null]
  trackTurn = 1
  isWinner = null
  // console.log(sq3El)
  render()
}
init()

function render() {
  theBoard.forEach((sqEl, idx) => {
    if (sqEl === 1) {
      //put how it will change the square if the square is player X 
      console.log("hi")
    }
    else if (sqEl === -1) {
      //put how it will change the square if the square is player O
      console.log("bye")
    }
    else if (sqEl === null) {
      //reset to default style
    }
  })
  if (isWinner !== null) {
    console.log("`It is player ${trackTurn}s turn`")
  }
}


