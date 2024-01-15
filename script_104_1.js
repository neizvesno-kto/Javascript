let arr = [1, 2, 3];

if (arr.length === 3) {
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
}