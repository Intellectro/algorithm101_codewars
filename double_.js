function handleStr(str) {
    let textHolder = [];
    if (str.length % 2 !== 0) {
        const _str = str + "_";
        for (let i = 0; i < _str.length; i+=2) {
            const newStr = _str.slice(i, i+2);
            textHolder.push(newStr);
        }
        return textHolder;
    }
    for (let i = 0; i < str.length; i+=2) {
        const newStr = str.slice(i, i+2);
        textHolder.push(newStr);
    }
    return textHolder;
}

const result = handleStr("Iyoocartel"); 
const result2 = handleStr("textile")

//! Another Alternative Method

function strHandler(str) {
    return ((str + "_").match(/.{2}/g) || []);
}

const check = strHandler("iyoocartel");
