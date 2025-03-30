function handleCamelCase(str) {
    if (!str) {
        return "";
    }
    const result = [...str].map((st) => {
        if (st === st.toUpperCase()) return " " + st;
        return st;
    }).join("");

    return result;
}

const result = handleCamelCase("iyooCartel");
console.log(result);

//! Alternatively,

const handleCamelCase2 = (string) => string.replace(/([A-Z])/g, ' $1');