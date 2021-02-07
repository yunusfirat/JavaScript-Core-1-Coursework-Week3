/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.

  The pink berries are the ONLY safe ones to eat.

  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
  
  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). 
  
  The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. 
  
  The .every() method will only return true if all values match watch you're looking for. 
  
  Let's first look at an example that will teach you how to use these methods.
*/

function bushChecker(bush) {
  return bush.every( item => item === "pink") ? "Bush is safe to eat from" : "Toxic! Leave bush alone!"
}

/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"];
let bushBerryColours2 = ["pink", "pink", "pink", "pink"];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "bushChecker funtion works - case 1",
  bushChecker(bushBerryColours1),
  "Toxic! Leave bush alone!"
);

test(
  "bushChecker funtion works - case 2",
  bushChecker(bushBerryColours2),
  "Bush is safe to eat from"
);
