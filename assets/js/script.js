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

/* Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
"  *  ",
" *** ", 
"*****"
]

And a tower with 6 floors looks like this:

[
"     *     ", 
"    ***    ", 
"   *****   ", 
"  *******  ", 
" ********* ", 
"***********"
]
*/

//Solution
function towerBuilder(nFloors) {
  const tower = []
  const totalSpaces = (nFloors * 2) - 1
  let spaces = " ".repeat(totalSpaces / 2)
  let asterisk = '*'
  for (let i = 1; i <= nFloors; i++) {
    tower.push(spaces + asterisk + spaces)
    spaces = " ".repeat((totalSpaces / 2) - i)
    asterisk = '*'.repeat((i * 2) + 1)
  }
  return tower
}

/* Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

 */

//Solution
const stringToArray = (string) => string.split(' ')

/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

//Solution
function maps(x) {
  return x.map(el => el * 2)
}

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
 */

//Solution
function invert(array) {
  return array.length > 0 ? array.map(el => el - (el * 2)) : []
}

/* If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

//Solution
var countSheep = function (num) {
  let sheepAcc = ''
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      sheepAcc += `${i} sheep...`
    }
  } else {
    null
  }
  return sheepAcc
}

/* Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs 	price per unit (cents)
n < 5 	100
n >= 5 and n < 10 	95
n >= 10 	90

You can use if..else or ternary operator to complete it. */

//Solution
const saleHotdogs = (n) => n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90