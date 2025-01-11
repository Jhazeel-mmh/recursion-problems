function fibonacci(n) {
  // 0, 1 ,1
  const sequence = [0, 1, 1];
  let fib1 = 1,
    fib2 = 1;

  if (n === 0) return [0];
  if (n === 1 || n === 2) return [1];

  for (let i = 2; i < n - 1; i++) {
    sequence.push(fib1 + fib2);
    fib1 = sequence[i];
    fib2 = sequence[i+1];
  }
  return sequence;
}

console.log(fibonacci(10));
