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

function isEven(value) {
  const overschot = value % 2;
  if(overschot === 0){
    return "Even"
  } else {
    return "oneven"
  }
}
const test = isEven(8)
console.log(test);


// 2. Are You Here?

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const itemA = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const itemB = arr2[j];
          if (itemA === itemB) return true;
      }
  }
  return false;
}


  arr1.forEach(item => {
    console.log(item);
  });

  arr2.forEach(item => {
    console.log(item);
  });


// 3. Doubler

function doubleArrayValues(array) {
  for (let i = 0; i< array.length; i++) {
     arr[i] = [];
    }

}

// 4. Naive Search

function naiveSearch(array, item) {

}

// 5. Creating Pairs

function createPairs(arr) {}

// 6. Computing Fibonacci Numbers

function generateFib(num) {}

// 7. Efficient Search

function efficientSearch(array, item) {}

// 8. Random element

function findRandomElement(arr) {
  const random_Number_In_Range = (min, max) => Math.random() * (max - min) + min;
}

// 9. Is It Prime?

function isPrime(n) {

}

// 10. Factorial of a number w/ recursion

function factorialOf(n) {}
