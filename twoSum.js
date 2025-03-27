function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j]
        }
    }
}

const check = twoSum([2,3,4,5],5);

console.log(check);