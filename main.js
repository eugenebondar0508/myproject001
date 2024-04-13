function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15