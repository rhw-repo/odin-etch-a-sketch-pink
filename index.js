let color = "white";
let click = "true";
const error = document.createElement("p");

function fillBoard(size) {

    let board = document.querySelector(".board");
    // stores all the divs in a variable 
    let squares = board.querySelectorAll("div");
    // removes each div when grid size is changed to begin again with blank grid 
    squares.forEach((div) => div.remove());
    // ${ } forces JS to read as a variable not string. Set amount columns and rows, parameter passed to fillBoard()
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`
  
    let amount = size * size;
    for (i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.style.backgroundColor = "white"; 
      //square.style.border = "1px solid gray";
      square.addEventListener("mouseover", colorSquare);
      board.insertAdjacentElement("beforeend", square);
    }
  }
  
  
  fillBoard(16); 
  
  //fires when user hits enter in input field (or clicks outside field)
  function setSize(input) {
    if (input >= 2 && input <= 100) {
      fillBoard(input);
      // removes any previous user instruction see line 38
      error.textContent= " ";
      document.body.appendChild(error);
    } else {
      // user instruction if input was inappropriate
      error.textContent= "Try again! Enter a number between 2 and 100";
      error.style.backgroundColor="antiquewhite";
      document.body.appendChild(error);
    }
  }
  
  // enables colouring the sketchpad
function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() *360}, 60%, 80%)`;
    } else { 
      this.style.backgroundColor = color;
    }
  }
}

// fires onclick from buttons
function changeColour(choice) {
color = choice;
}

function reset(size) {
  let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    // change each square to white colour 
    squares.forEach((div) => div.style.backgroundColor= "white");
}

// enables start and stop drawing or erasing
document.querySelector("body").addEventListener("click", () => {
  click = !click;
});