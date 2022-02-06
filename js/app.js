
/*-------------------------------- Constants --------------------------------*/
//winning states
const winningCombos = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5]
]

/*---------------------------- Variables (state) ----------------------------*/
let theBoard = [], trackTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
const gameStatus = document.querySelector('#message')
const squaresEl = document.querySelectorAll('.square')
const boardEl = document.querySelector('.board')
const replayBtn = document.querySelector('#replay-button')

/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick)
replayBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
//first create an initial state array 
function init() {
  // theBoard = new Array(9).fill(null)
  theBoard = [null, null, null, null, null, null, null, null, null]
  trackTurn = 1
  isWinner = null
  replayBtn.setAttribute("hidden", true)
  render()
}
init()

function render() {
  getWinner()
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
  // Render a message reflecting the current game state:
  if (!isWinner) {
    //display message who's turn it is based on switching the turns
    gameStatus.textContent = `It is ${trackTurn === 1 ? 'Player X' : 'Player O'}s Turn!`
  } 
  if (isWinner !== null){
    if (isWinner === 'T'){
      gameStatus.textContent = "It is a tie!"
      replayBtn.removeAttribute("hidden")
  } else {
    gameStatus.textContent = `${isWinner === 1 ? 'Player X' : 'Player O'} won!`
    replayBtn.removeAttribute("hidden")
  }
  console.log(gameStatus)
}
}

console.log(winningCombos)

function handleClick(evt) {
  //on click, we want it to obtain the index value of the id, return it as an integer, change theBoard to match the index where it was clicked
  const clickedSq = evt.target.id
  console.log("clicked Sq" + parseInt(clickedSq.split('').slice(-1)))
  let clickedSqId = parseInt(clickedSq.split('').slice(-1))
  getWinner()
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
// handleClick()

function getWinner() {
  winningCombos.forEach(combo => {
    let a = combo[0]
    let b = combo[1]
    let c = combo[2]
    if (Math.abs(theBoard[a] + theBoard[b] + theBoard[c]) === 3){
      isWinner = (trackTurn * -1)
      confetti.start(2000)
    }
  })
  if (isWinner === null && theBoard.every(square => square !== null)) {
    isWinner = 'T'
  }
  console.log(isWinner)
}

