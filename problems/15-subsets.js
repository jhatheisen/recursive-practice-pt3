/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], g[3], [1, 3], [2, 3], [1, 2, 3]]

// push an empty []
// compare and push num [0] and num[1]
// push an arr [num[0], num[1]]
// num [2] push it
// push an arr num [0] and num [2]
// push an arr num [1] and num [2]
// if we don't have any numbers after num [2]
// push an arr all numbers

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:Y
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.

  if (arr.length === 0) {
    return constant;
  }
  newArr.push(constant,[arr[0]]);
  return newArr;

***********************************************************************/

const subsets = (arr) => {
  // Your code here
  let newArr = [];
  if (arr.length === 0) { // if given arr [], return [[]]
    newArr.push([]);
    return newArr;
  }
  let firstSubset = subsets(arr.slice(0,-1));
  let lastNum = arr[arr.length - 1];

  //     subset[1,2]   +    subset[1,2] <= change each array val .concat lastNum on it 3
  return firstSubset.concat(firstSubset.map(el => el.concat(lastNum)));
}

console.log(subsets([])); // [[]]
console.log(subsets([1])); // [[], [1]]
console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
