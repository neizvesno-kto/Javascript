let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15