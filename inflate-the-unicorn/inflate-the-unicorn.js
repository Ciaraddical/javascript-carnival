// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Inflate The Unicorn!')

let unicornImages = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

let leftUnicornElement = document.getElementById('left')
let centreUnicornElement = document.getElementById('centre')
let rightUnicornElement = document.getElementById('right')

let unicornElements = document.getElementsByClassName('inflate-an-image')
for (let i = 0; i < unicornElements.length; i++) {
  unicornElements[i].onclick = unicornClicked
}
// Click handler for each unicorn.

let unicorns = [
  {
    name: 'left',
    element: leftUnicornElement,
    count: 0,
    clickHandler: unicornClicked,
  },
  {
    name: 'centre',
    element: centreUnicornElement,
    count: 0,
    clickHandler: unicornClicked,
  },
  {
    name: 'right',
    element: rightUnicornElement,
    count: 0,
    clickHandler: unicornClicked,
  },
]

const Left = 0
const Centre = 1
const Right = 2

function unicornClicked(e) {
  // which one is it
  let clickedUnicorn = e.target
  switch (clickedUnicorn) {
    case leftUnicornElement:
      console.log('Left unicorn clicked')
      processClick(Left)
      break
    case centreUnicornElement:
      console.log('Centre unicorn clicked')
      processClick(Centre)
      break
    case rightUnicornElement:
      console.log('Right unicorn clicked')
      processClick(Right)
      break
    default:
      console.log('WTH clicked')
      break
  }
}
function processClick(index) {
  if (unicorns[index].count < 3) {
    unicorns[index].count += 1
    unicorns[index].element.src = unicornImages[unicorns[index].count]
  } else {
    alert(`${unicorns[index].name} unicorn says Thanks`)
  }
}
