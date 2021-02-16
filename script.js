

let body = document.getElementsByTagName("body");
let main = document.getElementById('container')
let container = document.createElement('div')
let grid = document.createElement('div')
let slot = '<div class="grid-item"></div>'
let gridBox = "" // to create the HTML of Divs by chaining slot//
container.setAttribute('class','container')
grid.setAttribute('class','grid-item')


function createGrid(x) {
  for (i=0 ; i <x ; i++ ) {
  gridBox += slot}
  return gridBox
}

function gridwidth(x) {
  let gridwidth = (x/4)*50
  return gridwidth
}

let gridNumber = 16;
let changeWidth = main.style.width = gridwidth(gridNumber) +"px"

createGrid(gridNumber)
main.innerHTML = gridBox
