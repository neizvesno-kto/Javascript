for (let i = 10; i <= 1000; i++) {
  let sumOfFirstTwoDigits = parseInt(String(i)[0]) + parseInt(String(i)[1]);
  if (sumOfFirstTwoDigits === 5) {
    console.log(i);
  }
}