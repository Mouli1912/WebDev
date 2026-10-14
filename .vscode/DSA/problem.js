
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

//reduce pro
var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};
// Arguments length
var argumentsLength = function(...args) {
   
    return args.length;
    
};

// expect function
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },

        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args);
    }, t);

    return () => clearTimeout(timer);
};
