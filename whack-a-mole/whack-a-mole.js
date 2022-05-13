// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//- The ability to store or get references to the cells in the HTML table.

// hmm. store cells in array? then use document. html to access
let tableCells = document.getElementsByTagName('td')
let prevMoleNode = null
let prevParentNode = null
// - A function to randomly select which cell should show the mole.
function holeyMoley() {
  var audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()

  if (prevParentNode != null) {
    prevParentNode.removeChild(prevMoleNode)
  }
  let randomIndex = Math.floor(Math.random() * 25)
  let randomCell = tableCells[randomIndex]

  let moleNode = document.createElement('img')
  moleNode.src = './mole.png'
  moleNode.classList.add('mole')
  randomCell.appendChild(moleNode)
  prevParentNode = randomCell
  prevMoleNode = moleNode
}

function clickMole() {}
// console.log(getRandomInt(25))
// assign cells numbers 0-24
// function will randomly generate number, which will associate will cell

// - A way to show a mole in the chosen cell.
// add img to cell number
// use document.html.etc to add an id of mole to the chosen cell

// in css file, add img src to mole id
// onclick, next number will generate, and mole will move.
// onclick across table,
// generate number
// populate cell with mole image
// mole image needs to disapear when next clicked.

// function molePop() {
//   table.onclick = holeyMoley()
// }
