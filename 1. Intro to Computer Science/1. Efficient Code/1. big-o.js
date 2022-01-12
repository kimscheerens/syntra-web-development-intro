/**
 * Write a function that prints every even number of a list of numbers
 * O(N)
 */
<<<<<<< Updated upstream
function print_even_numbers() {}
=======

function print_even_numbers() {
  
  const array = [1,2,3,4,5];
  let even = array.filter((number) => number % 2 === 0);
  console.log(even);

}

console.log(print_even_numbers)

ofwel:

function print_even_numbers(){
  const arr = [3,7, 8, 12, 2, 5, 22];

  for (let item of arr){
    if (item % 2){
      console.log(item);
    }
  }
}

console.log(print_even_numbers)

>>>>>>> Stashed changes

/**
 * Look at the functions below, what is the time complexity?
 */

// 1. Even or odd

function isEven(value) {}

// 2. Are You Here?

function areYouHere(arr1, arr2) {}

// 3. Doubler

function doubleArrayValues(array) {}

// 4. Naive Search

function naiveSearch(array, item) {}

// 5. Creating Pairs

function createPairs(arr) {}

// 6. Computing Fibonacci Numbers

function generateFib(num) {}

// 7. Efficient Search

function efficientSearch(array, item) {}

// 8. Random element

function findRandomElement(arr) {}

// 9. Is It Prime?

function isPrime(n) {}

// 10. Factorial of a number w/ recursion

function factorialOf(n) {}
