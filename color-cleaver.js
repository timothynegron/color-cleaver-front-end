// Import these functions

const getInput = require("./get-input.js");

const {
  helpUserMessage,
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
//  - If only entering one argument, input must be a secondary color.
//  - If entering two arguments, inputs must be primary colors.
//  - Invalid message will appear if the user enters more than three args.
//  - Invalid message will appear if the user enters invalid colors.
//
//************************************************************************//

if (getInput(1) === "--help" || getInput(1) === "-h") {
  helpUserMessage();
} else if (getInput(3) !== undefined) {
  invalidAmountOfColorsMessage();
} else if (color1 === undefined) {
  didNotEnterFirstColorMessage();
} else if (color2 === undefined) {
  oneColorEntered(color1.toLowerCase());
} else if (color1.toLowerCase() === color2.toLowerCase()) {
  colorsAreTheSameMessage();
} else {
  twoColorsEntered(color1.toLowerCase(), color2.toLowerCase());
}
