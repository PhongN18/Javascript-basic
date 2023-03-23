// Problem: Delete all repeated elements from an array
// Example:
// input: arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']
// output: arr = ['a', 'b', 'c', 'd']

var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];
var set = new Set(arr)
// Set elements are unique

// Return as object type
console.log(set)

// Turn into array
// '...' takes elements out of the object
console.log([...(new Set(arr))])
console.log([...set])

