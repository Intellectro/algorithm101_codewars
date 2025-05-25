function sumStrings(a, b) {
    let result = "";
    let carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(a[i], 10) : 0;
        const digit2 = j >= 0 ? parseInt(b[j], 10) : 0;

        const sum = digit1 + digit2 + carry;
        result = (sum % 10).toString() + result;
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
}

const check = sumStrings(
    "712569312664357328695151392",
    "085678100824045303269669937"
);
console.log(check);


const checker = ~~(4.36745);

console.log(checker);