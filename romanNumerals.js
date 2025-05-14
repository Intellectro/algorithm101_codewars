class RomanNumerals {
    static #romanData = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    static toRoman(num) {
        let result = "";
        if (num <= 0 || num >= 4000) {
            throw new RangeError("Invalid Number ", {cause: "Number Wasn't Within The Range"});
        }

        for (let [val, sym] of this.#romanData) {
            while(num >= val) {
                result += sym;
                num -= val;
            }
        }

        return result;
    }

    static fromRoman(str) {
        str = str.toUpperCase();
        let counter = 0;
        let result = 0;
        let isMatched = false;
        while (counter < str.length) {
            const twoStr = str.substring(counter, counter + 2);
            const oneStr = str.substring(counter, counter + 1);
            
            for (let [val, sym] of this.#romanData) {
                if (sym == twoStr) {
                    counter += 2;
                    result += val;
                    isMatched = true;
                    break;
                }else if (sym == oneStr) {
                    counter += 1;
                    result += val;
                    isMatched = true;
                    break;
                }
            }
        }

        if (!isMatched) {
            throw new Error("Invalid Roman Numeral Detected:", counter);
        }

        return result;
    }
}