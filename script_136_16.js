let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
sum += obj[key];
}

console.log(sum);
// Результат: 6