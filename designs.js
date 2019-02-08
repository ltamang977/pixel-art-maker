
let canvas= document.getElementById('pixelCanvas');
let colorPicker = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");

let inputHeight= document.getElementById('inputHeight').value;
let inputWidth= document.getElementById('inputWidth').value;

makeGrid(inputHeight, inputWidth);

sizePicker.addEventListener("click", (e) => {
  e.preventDefault();

  let inputHeight = document.getElementById("inputHeight").value;
  let inputWidth = document.getElementById("inputWidth").value;

  canvas.firstElementChild.remove();

  makeGrid(inputHeight, inputWidth);

});

function makeGrid(height, width) {
  for (let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", (e) => {
                            cell.style.backgroundColor = colorPicker.value;
                           })
    }
  }
}
