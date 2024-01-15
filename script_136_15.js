let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
sum += obj[key]; // изменено elem на obj[key] чтобы получить значение элемента объекта
}
console.log(sum); // 6