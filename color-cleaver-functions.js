// Import these functions

const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");

// Export these functions

module.exports = {
  didNotEnterFirstColorMessage,
  oneColorEntered,
  twoColorsEntered,
};

/* Functions */

//************************************************************************//
// Function: firstColorInvalidMessage()
//
// Purpose: - Tells the user the first color is not valid.
//
//************************************************************************//

function firstColorInvalidMessage() {
  console.log("\nThe first color is invalid. Enter -h or --help for help.\n");
}

//************************************************************************//
// Function: secondColorInvalidMessage()
//
// Purpose: - Tells the user the second color is not valid.
//
//************************************************************************//

function secondColorInvalidMessage() {
  console.log(
    "\nThe second color is invalid. Enter -h or --help for help.\n"
  );
}

//************************************************************************//
// Function: bothColorsInvalidMessage()
//
// Purpose: - Tells the user both colors are invalid.
//
//************************************************************************//

function bothColorsInvalidMessage() {
  console.log("\nBoth colors are invalid. Enter -h or --help for help.\n");
}

//************************************************************************//
// Function: invalidAmountOfColorsMessage()
//
// Purpose: - Tells the user the maximum number of colors they could enter.
//          - Tells the user how to ask for help.
//
//************************************************************************//

function invalidAmountOfColorsMessage() {
  console.log(
    "\nThree or more colors were entered. This program only accepts a" +
    "\nmaximum of two colors. Enter - h or --help for help.\n"
  );
}

//************************************************************************//
// Function: colorsAreTheSameMessage()
//
// Purpose: - Tells the user the colors must be different.
//          - Tells the user how to ask for help.
//
//************************************************************************//

function colorsAreTheSameMessage() {
  console.log(
    "\nYour colors are the same. If entering two colors" +
      "\nthe colors must be different. Enter -h or --help for help.\n"
  );
}

//************************************************************************//
// Function: didNotEnterFirstColorMessage()
//
// Purpose: - Tells the user the enter at least one color.
//          - Tells the user how to ask for help.
//
//************************************************************************//

function didNotEnterFirstColorMessage() {
  console.log("\nNo colors entered. Enter -h or --help for help.\n");
}

//************************************************************************//
// Function: helpUser()
//
// Purpose: - Tells the user how to use the application.
//
//************************************************************************//

function helpUserMessage() {
  console.log(
    "\n   Help Message:" +
      "\n   --------------------------------------" +
      "\n\n   - For one argument only, enter one of" +
      "\n     these secondary colors:" +
      "\n\n      -> orange" +
      "\n      -> green" +
      "\n      -> purple" +
      "\n\n   - For two arguments, the two colors " +
      "\n     must be different and must be any of" +
      "\n     these primary colors:" +
      "\n\n      -> red" +
      "\n      -> blue" +
      "\n      -> yellow.\n" +
      "\n   --------------------------------------\n"
  );
}

//************************************************************************//
// Function: oneColorEntered(firstColor)
//
// Purpose: - Checks if the singular color is valid.
//          - If the color is valid returns a message about the color.
//          - If color is not valid tells the user it's not valid.
//
//************************************************************************//

function oneColorEntered(color) {
  if(color === '-h' || color === '--help'){
    helpUserMessage();
  } else if (isValidSecondary(color)) {
    oneValidColorMessage(color);
  } else {
    firstColorInvalidMessage();
  }
}

//************************************************************************//
// Function: twoColorsEntered(firstColor, secondColor, input3)
//
// Purpose: - Checks if colors are valid.
//          - If colors are valid returns a message about the colors.
//          - If colors are not valid tells the user which one is invalid.
//          - Checks if there is a third input.
//
//************************************************************************//

function twoColorsEntered(firstColor, secondColor, input3) {
  if(input3 !== undefined){
    invalidAmountOfColorsMessage();
  }else if(firstColor === secondColor){
    colorsAreTheSameMessage();
  }else if (isValidPrimary(firstColor) && isValidPrimary(secondColor)) {
    twoValidColorsMessage(firstColor, secondColor);
  } else if (!isValidPrimary(firstColor) && !isValidPrimary(secondColor)) {
    bothColorsInvalidMessage();
  } else if (!isValidPrimary(firstColor)) {
    firstColorInvalidMessage();
  } else {
    secondColorInvalidMessage();
  }
}

//************************************************************************//
// Function: oneValidColorMessage(color)
//
// Purpose: - Returns a message telling the user info about the color.
//
//************************************************************************//

function oneValidColorMessage(color){
  console.log(
    "\nMixing " + colorDeconstructor(color) + " make " + color + ".\n"
  );
}

//************************************************************************//
// Function: twoValidColorsMessage(firstColor, secondColor)
//
// Purpose: - Returns a message telling the user info about the colors.
//
//************************************************************************//

function twoValidColorsMessage(firstColor, secondColor){
  console.log(
    "\nMixing " +
      firstColor +
      " and " +
      secondColor +
      " will make " +
      colorCombinator(firstColor, secondColor) +
      ".\n"
  );
}
