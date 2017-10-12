$(document).ready(submitGridSize);

// DOM selectors
const $colorInput = $('input[type=color]');
const $height = $('input[type=number][name=height]');
const $width = $('input[type=number][name=width]');
const $submitButton = $('#submit-button');

/**
 * @description Takes the input values for height and width,
 * invokes makeGrid and disables submit button
 */
function submitGridSize() {
  $submitButton.click(function (event) {
    let rows = Number ($height.val());
    let columns = Number($width.val());

    event.preventDefault();

    makeGrid(rows, columns);
    toggleSubmit();
  });
}

/**
 * @description Creates grid
 * @param {number} rows
 * @param {number} columns
 */
function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let row = $('<tr></tr>').appendTo('table');
    for (let j = 0; j < columns; j++) {
      $('<td></td>').appendTo(row);
    };
  };
}

/**
 * @description Adds click event listeners to table and
 * calls paint event handler
 */
$('#pixel-canvas').on('click', 'td', paint);


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