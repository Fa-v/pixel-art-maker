$(document).ready(submitGridSize);

// Select color input
const $colorInput = $('input[type=color]');

// Select size input
const $height = $('input[type=number][name=height]');
const $width = $('input[type=number][name=width]');
const $submitButton = $('#submit-button');

// When size is submitted by the user, call makeGrid()
function submitGridSize() {
  $submitButton.click(function (event) {
    let rows = Number ($height.val());
    let columns = Number($width.val());

    event.preventDefault();

    makeGrid(rows, columns);
    toggleSubmit();
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
$('#pixel-canvas').on('click', 'td', paint);

//apply color to a cell as background property
function paint() {
  let color = $colorInput.val();
  $(this).css('background-color', color);
}

//Clear colors on the table
$('#clear').click(function (event) {
  event.preventDefault();
  $('#pixel-canvas').find('td').css('background-color', 'white');
});

//Remove table
$('#remove-table').click(function (event) {
  event.preventDefault();
  $('#pixel-canvas').find('tbody').remove();
  toggleSubmit();
});

function toggleSubmit() {
  let toggleState = !$submitButton.prop('disabled');
  $submitButton.prop('disabled', toggleState);
}