let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    count++;
  }
}
console.log('Количество цифр 3 в массиве:', count);