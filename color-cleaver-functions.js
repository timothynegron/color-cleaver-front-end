// Import these functions

const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");

// Export these functions

module.exports = {
  helpUser,
  invalidAmountOfColorsMessage,
  colorsAreTheSameMessage,
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
//          - Tells the user how to use the application.
//
//************************************************************************//

function invalidAmountOfColorsMessage() {
  console.log(
    "\nThree or more inputs were entered. This program only accepts a" +
    "\nmaximum of two colors. Enter --help for help.\n"
  );
}

//************************************************************************//
// Function: colorsAreTheSameMessage()
//
// Purpose: - Tells the user the colors must be different.
//          - Tells the user how to use the application.
//
//************************************************************************//

function colorsAreTheSameMessage() {
  console.log(
    "\nInvalid inputs or your colors are the same. If entering two colors" +
      "\nthe colors must be different. Enter -h or --help for help.\n"
  );
}

//************************************************************************//
// Function: didNotEnterFirstColorMessage()
//
// Purpose: - Tells the user the enter at least one color.
//          - Tells the user how to use the application.
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

function helpUser() {
  console.log(
    "\n   Help:" +
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
  if (isValidSecondary(color)) {
    // The color is valid
    console.log(
      "\nMixing " + colorDeconstructor(color) + " make " + color + ".\n"
    );
  } else {
    firstColorInvalidMessage();
  }
}

//************************************************************************//
// Function: twoColorsEntered(firstColor, secondColor)
//
// Purpose: - Checks if colors are valid.
//          - If colors are valid returns a message about the colors.
//          - If colors are not valid tells the user which one is invalid.
//
//************************************************************************//

function twoColorsEntered(firstColor, secondColor) {
  if (isValidPrimary(firstColor) && isValidPrimary(secondColor)) {
    // Both colors are valid
    console.log(
      "\nMixing " +
        firstColor +
        " and " +
        secondColor +
        " will make " +
        colorCombinator(firstColor, secondColor) +
        ".\n"
    );
  } else if (!isValidPrimary(firstColor) && !isValidPrimary(secondColor)) {
    bothColorsInvalidMessage();
  } else if (!isValidPrimary(firstColor)) {
    firstColorInvalidMessage();
    if (!isValidPrimary(secondColor)) {
      secondColorInvalidMessage();
    }
  } else {
    secondColorInvalidMessage();
  }
}
