// reduce(callback function, initial value)
// callback function (accumulator, currentValue, currentIndex, array)
Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    // Check if initial value is assigned
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }

    // Loop and callback function
    for (i; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const numbers = [1, 2, 3, 4, 5]

var sum = numbers.reduce2(function (total, number, currentIndex, array) {
    console.log(total, number, currentIndex, array)
    return total + number
}, 12)

console.log(sum)