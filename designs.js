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

//Adding event listeners to table
$('table').on('click', 'td', paint);

//apply color to a cell as background property
function paint() {
  let color = colorInput.val();
  $(this).css('background-color', color);
}

//Clear colors on the table
$('#clear').click(function () {
  event.preventDefault();
  $('table td').css('background-color', 'white');
});

//Remove table
$('#removeTable').click(function () {
  event.preventDefault();
  $('#pixel_canvas').find('tbody').remove();
});