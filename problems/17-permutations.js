/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  // Your code here
  let empty = [];
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return [array];
  }
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let whatsLeft = array.slice(0, i).concat(array.slice(i + 1));
    let variationOfWhatsLeft = permutations(whatsLeft);
    
    for (let j = 0; j < variationOfWhatsLeft.length; j++) {
      let permutedArray = [current].concat(variationOfWhatsLeft[j]);
      empty.push(permutedArray);
    }
  }
  return empty;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
