// Problem: Delete all repeated elements from an array
// Example:
// input: arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']
// output: arr = ['a', 'b', 'c', 'd']

// Solve without recursive function
// var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];
// var set = new Set(arr)
// // Set elements are unique

// // Return as object type
// console.log(set)

// // Turn into array
// // '...' takes elements out of the object
// console.log([...(new Set(arr))])
// console.log([...set])

// Recursive countdown function
// function countDown(num) {
//     console.log(num);
//     if (num > 0) {
//         countDown(num - 1)
//     }
//     return num
// }

// countDown(10)


// Example of loop with recursive
// Study callback to understand more clearly
function loop (start, end, cb) {
    if (start < end) {
        cb(start)
        return loop(start + 1, end, cb);

    }
}

var array = ['Javascript', 'PHP', 'Ruby']
loop (0, array.length, function (index) {
    console.log(array[index])
})

// Calculate factorial - n!
function factorial (num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    return num
}

console.log(factorial(1))

