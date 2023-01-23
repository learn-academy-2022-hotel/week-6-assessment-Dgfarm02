// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("bioMachine", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it(`takes in an array of objects and returns an array with a sentence about each person with their name capitalized.`, () => {
    expect(bioMachine(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  })
})

// RED - Good Failure
// FAIL  ./code-challenges.test.js
// bioMachine
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// ● bioMachine › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: bioMachine is not defined

// b) Create the function that makes the test pass.

// array of objects named people that contains names of people and their occupations
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

// create a variable called bioMachine that takes in an array 
const bioMachine = (arr) => {
  // this maps over each element in the array 
  return arr.map((obj) => {
    // this creates a new variable that splits the names at the 'space' 
    let nameArr = obj.name.split(" ")
    // this creates a new variable named first that capitalizes the first letter  of the first name then combines the rest of the word back together
    let first = nameArr[0][0].toUpperCase() + nameArr[0].slice(1)
    // this does the same for the last name
    let second = nameArr[1][0].toUpperCase() + nameArr[1].slice(1)
    // this displays each of the names that have been capitalized as a sentence including their occupation
    return `${first} ${second} is ${obj.occupation}.`
  })
}

// output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// GREEN - Success!
// PASS  ./code-challenges.test.js
// bioMachine
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("filterArray", () => {
  it("takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  expect(filterArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  expect(filterArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  // Expected output: [ 2, 1, -1 ]
  })
})

// RED - Good Failure
// FAIL  ./code-challenges.test.js
// bioMachine
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
// filterArray
//   ✕ takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3

// ● filterArray › takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3

//   ReferenceError: filterArray is not defined

// b) Create the function that makes the test pass.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// this creates a new variable called filterArray that takes in an array
const filterArray = (arr) => {
  // this takes our array and filters by numbers then maps through each of them and does the modulo thing to give us the ramainders of each of them if divided by 3 then displays them
  return arr.filter(item => typeof item === "number" ).map(item => item % 3)
}

// output: [ 2, 0, -1, 0 ]
// output: [ 2, 1, -1 ]

// GREEN - Success!
// PASS  ./code-challenges.test.js
// bioMachine
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// filterArray
//   ✓ takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCube", () => {
  it("takes in an array of numbers and returns the sum of all numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    expect(sumCube(cubeAndSum1)).toEqual(99)
   // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCube(cubeAndSum2)).toEqual(1125)
    // Expected output: 1125
  })
})

// RED - Good Failure
// FAIL  ./code-challenges.test.js
// bioMachine
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// filterArray
//   ✓ takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3
// sumCube
//   ✕ takes in an array of numbers and returns the sum of all numbers cubed.

// ● sumCube › takes in an array of numbers and returns the sum of all numbers cubed.

//   ReferenceError: sumCube is not defined

// b) Create the function that makes the test pass.

const cubeAndSum1 = [2, 3, 4]
const cubeAndSum2 = [0, 5, 10]
// this creates a new variable names sumCube that takes in an array
const sumCube = (arr) => {
  // this takes the array and uses the reduce method to return a single value. the sum argument is the accumulated value, the num argument is the input from the loop, the numbers are cubed then added. The 0 is the initial value
  return arr.reduce((sum, num) => num ** 3 + sum, 0)
}

// output: 99
// output: 1125

// GREEN - Success!
// PASS  ./code-challenges.test.js
// bioMachine
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// filterArray
//   ✓ takes in a mised data array and returns an array of only the remainders of the numbers when divided by 3
// sumCube
//   ✓ takes in an array of numbers and returns the sum of all numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total