function createPhoneNumber(numbers) {
    numbers.forEach(num => {
        if (+num > 9) return;
    });

    let text = "";

    for (let i = 0; i < Math.floor(numbers.length/3); i++) {
        switch(i) {
            case 0:
                text += "(" + numbers.slice(i * 3, (i * 3) + 3).join("") + ")" + " ";
            break;
            case 1:
                text += numbers.slice(i * 3, (i * 3) + 3).join("") + "-";
                break;
            case 2:
                text += numbers.slice(i * 3, (i * 3) + 3).join("") + numbers[numbers.length - 1];
                break;
            default:
                text = text;
        }
    }
    return text;
}

const phoneNumber = createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);