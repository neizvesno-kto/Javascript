function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Пример использования
console.log(isPrime(5)); // Вывод: true
console.log(isPrime(12)); // Вывод: false