/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
*/

const generateHashTag = str => {
    let _hash_ = "#";
    if (str.trim() === '') {
        return false;
    }

    let text = "";

    const _trimlizedStr = str.trim().split(" ");
    for (let i = 0; i < _trimlizedStr.length; i++) {
        text += _trimlizedStr[i].charAt(0).toUpperCase() + _trimlizedStr[i].slice(_trimlizedStr[i].indexOf(`${_trimlizedStr[i].charAt(0)}`) + 1, _trimlizedStr[i].length);
    }
    const _hashCheck = _hash_+text;
    if (_hashCheck.length > 140) return false;
    return _hashCheck;
}

const check = generateHashTag("Do We have A Hashtag");
