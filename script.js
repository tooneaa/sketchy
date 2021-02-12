

let body = document.getElementsByTagName("body");
let main = document.getElementById('container')
let container = document.createElement('div')
let grid = document.createElement('div')
let slot = '<div class="grid-item"></div>'
let gridBox = ""
container.setAttribute('class','container')
grid.setAttribute('class','grid-item')


function createGrid(x) {
  for (i=0 ; i <x ; i++ ) {
  gridBox += slot}

  return gridBox
}

createGrid(16)
main.innerHTML = gridBox
