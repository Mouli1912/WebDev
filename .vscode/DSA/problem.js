
// Array prototype last method
Array.prototype.last = function () {
    if (!Array.isArray(this) || this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
};

// Counter
var createCounter = function (n) {
    return function () {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// sleep problem 

function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}