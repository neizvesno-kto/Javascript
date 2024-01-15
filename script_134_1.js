let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2') {
    sum += arr[i];
  }
}

console.log(sum); // Выведет 123 (сумма элементов у которых первая цифра 1 или 2)