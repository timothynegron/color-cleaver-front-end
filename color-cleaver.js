const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

let color1 = getInput(1);
let color2 = getInput(2);

/* Main Program */

if (color1 === undefined) {
  didNotEnterFirstColorMessage();
} else if (color2 === undefined) {
  onlyOneColorEntered(color1);
} else if (color1 === color2) {
  colorsAreTheSameMessage();
} else {
  twoColorsEntered(color1, color2);
}

/* Main Program End */

/* Functions */

function firstColorInvalidMessage() {
  console.log("\nYour first color is not valid.");
}

function secondColorInvalidMessage() {
  console.log("\nYour second color is not valid.");
}

function bothColorsInvalidMessage() {
  console.log("\nBoth colors are not valid.");
}

function colorsAreTheSameMessage() {
  console.log("\nYour colors must be different.");
  helpUser();
}

function didNotEnterFirstColorMessage() {
  console.log(
    "\nPlease enter at least one color." +
      "\nA maximum of two colors can be taken."
  );
  helpUser();
}

function helpUser() {
  console.log(
    "\nFor one argument only, please enter one of these" +
      "secondary colors: orange, green, purple." +
      "\nFor two arguments, the two colors must be different" +
      "and must be any of these primary colors: red, blue, yellow.\n"
  );
}

function onlyOneColorEntered(firstColor) {
  if (isValidSecondary(firstColor)) {
    // The color is valid
    console.log(
      "\nThese colors make the color you entered: " +
        colorDeconstructor(firstColor) +
        "\n"
    );
  } else {
    firstColorInvalidMessage();
    helpUser();
  }
}

function twoColorsEntered(firstColor, secondColor) {
  if (isValidPrimary(firstColor) && isValidPrimary(secondColor)) {
    // Both colors are valid
    console.log(
      "\nMixing those colors will make: " +
        colorCombinator(firstColor, secondColor) +
        "\n"
    );
  } else if (!isValidPrimary(firstColor) && !isValidPrimary(secondColor)) {
    bothColorsInvalidMessage();
    helpUser();
  } else if (!isValidPrimary(firstColor)) {
    firstColorInvalidMessage();
    if (!isValidPrimary(secondColor)) {
      secondColorInvalidMessage();
    }
    helpUser();
  } else {
    secondColorInvalidMessage();
    helpUser();
  }
}

/* Functions End */
