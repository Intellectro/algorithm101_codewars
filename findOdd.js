/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {
    if (A.length <= 1) {
        return A[0];
    }

    const newObj = A.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
    }, {});

    console.log(newObj);

    for (let i in newObj) {
        if (newObj[i] % 2 !== 0) return i;
    }
}

const check = findOdd([1,1,2]);

console.log(check);

//* Alternatively,

const findodd = (B) => B.reduce((a, b) => b ^ a);

const checker = findodd([1,1,2]);
console.log((checker));