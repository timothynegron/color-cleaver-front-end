// Import these functions

const getInput = require("./get-input.js");

const {
  didNotEnterFirstColorMessage,
  oneColorEntered,
  twoColorsEntered,
} = require("./color-cleaver-functions.js");

//************************************************************************//
//
// MAIN PROGRAM
// ------------
//  Purpose: To tell the user about the colors entered.
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

if (getInput(1) === undefined) { // Are there 0 colors?
  didNotEnterFirstColorMessage();
} else if (getInput(2) === undefined) { // Is there no second color?
  oneColorEntered(getInput(1).toLowerCase());
} else {
  twoColorsEntered(getInput(1).toLowerCase(), getInput(2).toLowerCase(), getInput(3));
}
