// arrayManipulation.js

/**
 * Process an array of numbers, squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The processed array.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

