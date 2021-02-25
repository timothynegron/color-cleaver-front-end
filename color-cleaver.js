const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

let color1 = getInput(1);
let color2 = getInput(2);

if (color1 === undefined) {
  console.log(
    "\nPlease enter at least one color.\n" +
      "A maximum of two colors can be taken as an argument.\n" +
      "\nFor one argument only, please enter one of these colors: orange, green, purple." +
      "\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
  );
} else if (color2 === undefined) {
  if (isValidSecondary(color1)) {
    console.log(
      "\nThese colors make the color you entered: " +
        colorDeconstructor(color1) +
        "\n"
    );
  } else {
    console.log(
      "\nFor one argument only, please enter one of these colors: orange, green, purple.\n"
    );
  }
} else if (color1 === color2) {
  console.log(
    "\nYour colors must be different." +
      "\n\nFor one argument only, please enter one of these colors: orange, green, purple." +
      "\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
  );
} else {
  if (isValidPrimary(color1) && isValidPrimary(color2)) {
    console.log(
      "\nMixing those colors will make: " +
        colorCombinator(color1, color2) +
        "\n"
    );
  } else {
    console.log(
      "\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
    );
  }
}
