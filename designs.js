$(document).ready(submitGridSize);

// Select color input
const colorInput = $('input[type=color]');

// Select size input
const height = $('input[type=number][name=height]');
const width = $('input[type=number][name=width]');

// When size is submitted by the user, call makeGrid()
function submitGridSize() {
  $('#button').click(function (event) {
    event.preventDefault();
    let rows = Number ($(height).val());
    let columns = Number($(width).val());
    let color = colorInput.val();
    makeGrid(rows, columns);
  });
}

function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = $('<tr></tr>').appendTo('table');
    for (let j = 0; j < columns; j++) {
      $('<td></td>').appendTo(row);
    };
  };
}