// Import these functions

const getInput = require("./get-input.js");

const {
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
//  Purpose: To tell user about the colors entered.
//
//  Algorithm:
//  1. Checks if user entered any colors.
//  2. Checks if user entered two colors. Send message if only one color.
//  3. If two colors entered. Send message about colors.
//
//  More Info:
//  - Has help message when user enters -h or --help.
//  - Invalid message will appear if the user enters more than three args.
//  - Invalid message will appear if the user enters invalid colors.
//  - Invalid message if both colors are invalid.
//  - Case insensitive.
//
//************************************************************************//

if (color1 === undefined) { // Are there 0 colors?
  didNotEnterFirstColorMessage();
} else if (color2 === undefined) { // Is there no second color?
  oneColorEntered(color1.toLowerCase());
} else {
  twoColorsEntered(color1.toLowerCase(), color2.toLowerCase(), getInput(3));
}
