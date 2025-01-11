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
    fib2 = sequence[i + 1];
  }
  return sequence;
}

console.log(fibonacci(8));

function fibonacciRecursive(n, acc = [0,1]) {
  // n = 1 -> [0]
  // n = 2 -> [0,1]
  // n = 3 -> [0,1,1]
  if (acc.length -1 >= n) {
    return acc.slice(0,n);
  } else {
    const nextNumber = acc[acc.length - 1] + acc[acc.length - 2]
    return fibonacciRecursive(n, [...acc, nextNumber])
  }
}

console.log(fibonacciRecursive(5));
