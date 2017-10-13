$(document).ready(submitGridSize);

// DOM selectors
const $colorInput = $('input[type=color]');
const $height = $('input[type=number][name=height]');
const $width = $('input[type=number][name=width]');
const $submitButton = $('#submit-button');
const $sizePicker = $('#size-picker');

/**
 * @description Takes the input values for height and width,
 * validates them, invokes makeGrid
 * and disables submit button
 */
function submitGridSize() {
  $('#alert').hide();
  $submitButton.click(function (event) {
    let rows = $height.val();
    let columns = $width.val();

    if ((rows > 50 || rows <= 0 ) || (columns > 50 || columns <= 0)) {
      $('#alert').text('Enter values between 1 and 50').show().fadeOut(1000);
      return;
    } else {
      $sizePicker.submit(rows, columns);
    }

    event.preventDefault();

    makeGrid(rows, columns);
    toggleSubmit();
  });
}

/**
 * @description Creates grid, add a click event to each cell and calls paint function
 * @param {number} rows
 * @param {number} columns
 */
function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = $('<tr></tr>').appendTo('table');
    for (let j = 0; j < columns; j++) {
      let cell = $('<td></td>').appendTo(row);
      cell.on('click', paint);
    };
  };
}

/**
 * @description Applies color to a cell as a background property
 */
function paint() {
  let color = $colorInput.val();
  $(this).css('background-color', color);
}

/**
 * @description Clears colors on the table
 */
$('#clear').click(function (event) {
  event.preventDefault();
  $('#pixel-canvas').find('td').css('background-color', 'white');
});

/**
 * @description Removes table from DOM
 */
$('#remove-table').click(function (event) {
  event.preventDefault();
  $('#pixel-canvas').find('tbody').remove();
  toggleSubmit();
});

/**
 * @description Toggles disabled attribute on submit button
 */
function toggleSubmit() {
  let toggleState = !$submitButton.prop('disabled');
  $submitButton.prop('disabled', toggleState);
}