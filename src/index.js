module.exports = function reverse(n) {
    if (n > 0) {
        return (String(n).split("").reverse().join("")) * 1;
    } else {
        let b = n * -1;
        return String(b).split("").reverse().join("") * 1;
    }
}