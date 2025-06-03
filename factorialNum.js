function multiplyLargeNumbers(numArr, multiplier) {
  let carry = 0;
  for (let i = 0; i < numArr.length; i++) {
    let product = numArr[i] * multiplier + carry;
    numArr[i] = product % 10;
    carry = Math.floor(product / 10);
  }
  while (carry > 0) {
    numArr.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return numArr;
}

function factorial(n) {
  let result = [1]; 
  for (let i = 2; i <= n; i++) {
    multiplyLargeNumbers(result, i);
  }
  return result.reverse().join('');
}
