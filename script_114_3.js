let num = 1;
let iterations = 0;
while (num <= 1000) {
  num *= 3;
  iterations++;
}
console.log("Число: " + num);
console.log("Количество итераций: " + iterations);