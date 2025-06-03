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

//! alternatively

const sumOfDividedTwo = a => a
  .reduce((r, e) => r.concat(getFactors(e)), [])
  .filter((e, i, a) => i === a.indexOf(e))
  .sort((x, y) => x - y)
  .map(x => [x, a.reduce((r, e) => r + (e % x ? 0 : e), 0)]);
 
const getFactors = n => {
  const factors = [];
  for (let i = 2, x = Math.abs(n); i <= x; i++)
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  return factors;
}