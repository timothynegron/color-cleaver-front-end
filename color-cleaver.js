const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

let color1 = getInput(1);
let color2 = getInput(2);

// check if there is a first arguement
if (color1 === undefined) {
  console.log(
    "\nPlease enter at least one color.\n" +
      "A maximum of two colors can be taken as an argument.\n" +
      "\nFor one argument only, please enter one of these colors: orange, green, purple." +
      "\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
  );
}
// if there is a first argument check if there is a second argument
else if (color2 === undefined) {
  // if there isn't a second argument check if the color is valid
  if (isValidSecondary(color1)) {
    // Send the user info about their color if it's valid
    console.log(
      "\nThese colors make the color you entered: " +
        colorDeconstructor(color1) +
        "\n"
    );
  }
  // if the color is not valid send the user a message telling them it's not
  else {
    console.log(
      "\nFor one argument only, please enter one of these colors: orange, green, purple.\n"
    );
  }
}
// check if the colors are the same
else if (color1 === color2) {
  // If the colors are the same, tell the user that they must be different.
  console.log(
    "\nYour colors must be different." +
      "\n\nFor one argument only, please enter one of these colors: orange, green, purple." +
      "\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
  );
}
// If all other conditions are false, then they're must be two colors
else {
  // Check if both colors are valid
  if (isValidPrimary(color1) && isValidPrimary(color2)) {
    // Send the user info about the colors if their both valid
    console.log(
      "\nMixing those colors will make: " +
        colorCombinator(color1, color2) +
        "\n"
    );
  }
  // Check if both are invalid
  else if (!isValidPrimary(color1) && !isValidPrimary(color2)) {
    // If both colors are invalid send the user a message telling them
    console.log(
      "\nBoth colors are not valid." +
        "\n\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
    );
  }
  // Check if first color is invalid
  else if (!isValidPrimary(color1)) {
    // Tell the user the first color is invalid
    console.log("\nYour first color is not valid.");
    // Check if the second color is invalid
    if (!isValidPrimary(color2)) {
      // Tell the user if the second color is invalid
      console.log("\nYour second color is not valid.");
    }
    // Tell the user what are valid colors for two arguments
    console.log(
      "\n\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
    );
  }
  // If all other test fail then only the second color is not valid
  else {
    // Tell the user that the second color is not valid
    console.log(
      "\nYour second color is not valid." +
        "\n\nFor two arguments, the two colors must be different and must be any of these colors: red, blue, yellow.\n"
    );
  }
}
