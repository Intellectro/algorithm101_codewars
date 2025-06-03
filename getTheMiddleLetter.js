const medianLetter = (str) => {
    if (str.length % 2 === 0) {
        const _mid_ = str.length / 2;
        str = str.slice(_mid_, _mid_ + 1);
        return str;
    }
    return str.slice(~~(str.length / 2), str.length - ~~(str.length / 2));
}