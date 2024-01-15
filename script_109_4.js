let number = 456; // Пример трехзначного числа
let sum = 0;
while (number) {
  sum += number % 10;
  number = Math.floor(number / 10);
}
console.log(sum);