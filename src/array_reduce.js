// Given an array arr. You can choose a set of integers and remove
// all the occurrences of these integers in the array.

// Return the set  of the minimum size so that at least
// half of the integers of the array are removed.

// [3,3,3,3,5,5,5,2,2,7] -> {3, 7} // [5,5,5,2,2]
// [1000,1000,1,2,1000] -> {1000} // [1,2]
// [1,2,3,4] -> {1,2} || {3,4}// [3, 4]
// [1,2,3,4] -> {1,2,3} // [4] // wrong
// [1,2,3,4,5,6] -> {1,2,3} // [4,5,6]
// [1000,1000,1000,1000] -> {1000} // []

// Example of procedure:
// [4,5,1000,1000,1,2,1000] // arr.length = 7
// {4}, [5, 1000, 1000, 1, 2, 1000] // arr.length = 6
// {4,5 } [1000, 1000, 1, 2, 1000] // arr.length = 5
// {4,5,1000} [1, 2] // arr.length = 2

function reduceArr(arr) {
  // CODE HERE
}

reduceArr([1000, 1000, 1, 2, 1000]).size === 1; // true
reduceArr([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]).size === 2; // true
