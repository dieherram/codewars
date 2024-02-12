/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//Solution
function cockroachSpeed(s) {
    return cmPerSec = Math.floor(s * 27.778)
  }

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//Solution
function findAverage(array) {
    if (array.length > 0) {
      const average = array.reduce((acc, currVal) => {
        return acc + currVal
      }, 0)
      return average / array.length;
    } else { return 0 }
  }