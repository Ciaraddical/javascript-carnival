// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothingIndex = 0

// need clothingItem to work as head if value is zero, etc
let clothingItem = 0
const head = 0
const body = 1
const shoes = 2

// clothing item increments and decrements with updown arrows,
// if clothing index = 0, changeClownHead

let partName = ''
let partNameIndex = 0
function changeClownClothing() {
  switch (clothingItem) {
    case head:
      partName = 'head'
      break
    case body:
      partName = 'body'
      break
    case shoes:
      partName = 'shoes'
      break
  }

  let part = document.getElementById(partName)
  part.src = './images/' + partName + partNameIndex + '.png'

  console.log(partNameIndex)
}

window.addEventListener(
  'keydown',
  function (event) {
    if (event.defaultPrevented) {
      return // Do nothing if event already handled
    }

    switch (event.code) {
      case 'ArrowUp':
        if (clothingItem > 0) {
          clothingItem--
        } else {
          clothingItem = 2
        }
        console.log(clothingItem)
        break
      case 'ArrowDown':
        if (clothingItem < 2) {
          clothingItem++
        } else {
          clothingItem = 0
        }
        console.log(clothingItem)
        break

      case 'ArrowRight':
        switch (clothingItem) {
          case head:
            // set headIndex
            if (headIndex < 5) {
              headIndex++
            } else {
              headIndex = 0
            }
            partNameIndex = headIndex
            break
          case body:
            if (bodyIndex < 5) {
              bodyIndex++
            } else {
              bodyIndex = 0
            }
            partNameIndex = bodyIndex
            break
          case shoes:
            if (shoesIndex < 5) {
              shoesIndex++
            } else {
              shoesIndex = 0
            }
            partNameIndex = shoesIndex
            break
        }
        changeClownClothing()
        break
      case 'ArrowLeft':
        switch (clothingItem) {
          case head:
            // set headIndex
            headIndex > 0 ? headIndex-- : (headIndex = 5)
            // if (headIndex > 0) {
            //   headIndex--
            // } else {
            //   headIndex = 5
            // }
            partNameIndex = headIndex
            break
          case body:
            if (bodyIndex > 0) {
              bodyIndex--
            } else {
              bodyIndex = 5
            }
            partNameIndex = bodyIndex
            break
          case shoes:
            if (shoesIndex > 0) {
              shoesIndex--
            } else {
              shoesIndex = 5
            }
            partNameIndex = shoesIndex
            break
        }
        changeClownClothing()
        break
    }

    // Consume the event so it doesn't get handled twice
    event.preventDefault()
  },
  true
)
