let num2 = 123456; // Пример шестизначного числа
let firstSum = parseInt(String(num2)[0]) + parseInt(String(num2)[1]) + parseInt(String(num2)[2]);
let secondSum = parseInt(String(num2)[3]) + parseInt(String(num2)[4]) + parseInt(String(num2)[5]);

if (firstSum === secondSum) {
  console.log('да');
} else {
  console.log('нет');
}