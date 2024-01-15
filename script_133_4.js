let arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length; i++) {
  console.log(arr[i-2] + arr[i-1] + arr[i]);
}