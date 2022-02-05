
/*-------------------------------- Constants --------------------------------*/
//winning states


/*---------------------------- Variables (state) ----------------------------*/
let theBoard = [], trackTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
const gameStatus = document.querySelector('#message')
const squaresEl = document.querySelectorAll('.square')
const boardEl = document.querySelector('.board')
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
boardEl.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/
//first create an initial state array 
function init() {
  // theBoard = new Array(9).fill(null)
  theBoard = [null, null, null, null, null, null, null, null, null]
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
      squaresEl[idx].textContent = "X"
    }
    else if (sqEl === -1) {
      //put how it will change the square if the square is player O
      squaresEl[idx].textContent = "O"
    }
    else if (sqEl === null) {
      //reset to default style
      squaresEl[idx].textContent = ""
    }
  })
  // 3.3.2) Render a message reflecting the current game state:
  if (!isWinner) {
    //display message who's turn it is based on switching the turns
    gameStatus.textContent = `It is ${trackTurn === 1 ? 'Player X' : 'Player O'}s Turn!`
  } else if (isWinner === 'T'){
      gameStatus.textContent = "It is a tie!"
  } else {
    gameStatus.textContent = `Congratulations to ${isWinner === 1 ? 'Player X' : 'Player O'}`
  }
  console.log(gameStatus)
}

const winningCombos = [
  [theBoard[0], theBoard[1], theBoard[2]],
  [theBoard[0], theBoard[4], theBoard[8]],
  [theBoard[0], theBoard[3], theBoard[6]],
  [theBoard[2], theBoard[4], theBoard[6]],
  [theBoard[2], theBoard[5], theBoard[8]],
  [theBoard[6], theBoard[7], theBoard[8]],
  [theBoard[1], theBoard[4], theBoard[7]],
  [theBoard[3], theBoard[4], theBoard[5]]
]
// console.log(winningCombos)

function handleClick(evt) {
  //on click, we want it to obtain the index value of the id, return it as an integer, change theBoard to match the index where it was clicked
  const clickedSq = evt.target.id
  console.log(parseInt(clickedSq.split('').slice(-1)))
  let clickedSqId = parseInt(clickedSq.split('').slice(-1))
  
  if (theBoard[clickedSqId] !== null){
    return
  }
  if (isWinner !== null){
    return
  }
  if (theBoard[clickedSqId] === null){
    theBoard[clickedSqId] = trackTurn
    console.log(theBoard)
    trackTurn = (trackTurn * -1)
  }
  render()

  
}
handleClick()


