const sumOfDivided = (lst) => {
  const primeSums = new Map();

  function getPrimeFactors(n) {
    const num = Math.abs(n);
    const factors = new Set();
    let x = num;
    for (let i = 2; i <= Math.sqrt(x); i++) {
    while (x % i === 0) {
        factors.add(i);
        x /= i;
    }
    }
    if (x > 1) factors.add(x);
    return factors;
  }

  for (const num of lst) {
    const primes = getPrimeFactors(num);
    for (const prime of primes) {
      primeSums.set(prime, (primeSums.get(prime) || 0) + num);
    }
  }

  const result = Array.from(primeSums.entries()).sort((a, b) => a[0] - b[0]);
  return result;
}