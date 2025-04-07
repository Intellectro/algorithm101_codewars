// * Calculate the multiples of 3 & 5

const solution = number => {
    if (number <= 0) {
        return 0;
    }

    let total = 0;

    for (let i = 1; i < number; i++) {
        if (Object.is(i % 3, 0) || Object.is(i % 5, 0)) {
            total += i;
        }
    }

    return total;
}

const check = solution(10);

console.log(check);