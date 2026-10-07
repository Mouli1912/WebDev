
// Array prototype last method
Array.prototype.last = function () {
    if (!Array.isArray(this) || this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
};

//palindrome counter 
var createCounter= function(n){
    return function(){
        return n++;
    };
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// sleep problem 

async function sleep(millis){
    const promise = new Promise((resolve)=>{
        setTimeout(resolve, millis);
    });
    await promise;
}