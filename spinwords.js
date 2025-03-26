/*
Question => Write a function that takes in a string of one or more words, 
and returns the same string, but with all words that have five or 
more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

*/

function spinWords(str) {
    const strArr = str.split(" ");
    console.log(strArr);
    if (strArr.length <= 1) {
        const str = strArr.join("");
        if (str.length <= 4) {
            return str;
        }
        return str.split("").reverse().join("");
    }

    let text = "";
    for (let i = 0; i < strArr.length; i++) {
        let _str = strArr.slice(i, i + 1);
        if (_str.join("").length < 5) {
            text += _str.join("") + " ";
        }else {
            text += _str.join("").split("").reverse().join("");
        }
    }
    return text.trim();
}

const check = spinWords("This is a sentence");


