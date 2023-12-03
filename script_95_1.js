let num = 38;
let x = 0;
let z = String(num);

if (num >= 10) {
	if (num <= 99) {
		console.log('меньше или равно 10');
		x = Number(z[0]) + Number(z[1]);
		if (x <= 9)
		console.log("сумма цифр однозначна");
		 else 
		  console.log(x);
		 
	} else {
		console.log('больше 99');
	}
} else {
	console.log('меньше 10');
}