let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

let positiveNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveNumbers.push(arr[i]);
    }
}

console.log(positiveNumbers); // выведет [1, 3, 5, 7, 9]