// Import these functions

const getInput = require("./get-input.js");

const {
  helpUser,
  invalidAmountOfColorsMessage,
  colorsAreTheSameMessage,
  didNotEnterFirstColorMessage,
  oneColorEntered,
  twoColorsEntered,
} = require("./color-cleaver-functions.js");

// Global Variables

let color1 = getInput(1);
let color2 = getInput(2);

//************************************************************************//
//
// MAIN PROGRAM
// ------------
//  - Accepts user's input with a maximum of two arguments.
//  - Input must be a secondary color if only entering one argument.
//  - Input must be two primary colors if entering two arguments.
//  - Invalid message will appear if the user enters more than three args.
//
//************************************************************************//
if (getInput(1) === "--help" || getInput(1) === "-h") {
  helpUser();
} else if (getInput(3) !== undefined) {
  invalidAmountOfColorsMessage();
} else if (color1 === undefined) {
  didNotEnterFirstColorMessage();
} else if (color2 === undefined) {
  oneColorEntered(color1);
} else if (color1 === color2) {
  colorsAreTheSameMessage();
} else {
  twoColorsEntered(color1, color2);
}
