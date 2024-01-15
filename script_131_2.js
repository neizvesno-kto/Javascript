let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count3 = 0;
let count2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    count3++;
  }
  if (arr[i] === 2) {
    count2++;
  }
}
console.log('Количество цифр 3 в массиве:', count3);
console.log('Количество цифр 2 в массиве:', count2);