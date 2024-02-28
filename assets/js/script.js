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

/*
Given an array of integers your solution should find the smallest integer.

  For example:
  
      Given [34, 15, 88, 2] your solution will return 2
      Given [34, -345, -1, 100] your solution will return -345
  
  You can assume, for the purpose of this kata, that the supplied array will not be empty.
  */

  //Solution
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      if (args.length > 0) {
        args.sort((a, b) => {
          return a - b
        })
        return args[0]
      }
    }
  }
  