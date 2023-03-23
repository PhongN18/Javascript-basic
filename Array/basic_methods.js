var array = ['ABC', 'AB', 'CDE']
var array2 = ['444', '209', 'AAC']

// console.log(array.toString()) // ABC,AB,CDE
// console.log(array.join(' - ')) // ABC -  AB - CDE

// console.log(array.pop()) 
// return 'CDE' (last element)
// array = ['ABC', 'AB']

// console.log(array.push('ABCD'))
// return new array.length
// array = ['ABC', 'AB', 'CDE', 'ABCD'] 
// add to end of array

// console.log(array.shift())
// return 'ABC' (first element)
// array = ['AB', 'CDE']

// console.log(array.unshift('ABCD', '123'))
// return new array.length
// array = ['ABCD', '123', 'ABC', 'AB', 'CDE'] 
// add to beginning of array 

// console.log(array.splice(1, 1)) // ['ABC', 'CDE']
// console.log(array.splice(1, 2)) // ['ABC']
// console.log(array.splice(1, 0, '123')) // ['ABC', '123', 'AB', 'CDE']
// console.log(array.splice(1, 1, '123')) // ['ABC', '123', 'CDE']

// console.log(array.concat(array2)) // ['ABC', 'AB', 'CDE', '444', '209', 'AAC']
// array = ['ABC', 'AB', 'CDE', '444', '209', 'AAC']

console.log(array.slice(1, 2)) // ['AB']
// start slice from index 1, and end at index 2
console.log(array.slice(0, 2)) // ['ABC', 'AB']
console.log(array.slice(2, 3)) // ['CDE']
console.log(array.slice(1, 1)) // []
console.log(array.slice(1)) // ['AB', 'CDE'] --> to the end of array
console.log(array.slice(0)) // ['ABC', 'AB', 'CDE']
console.log(array.slice(-2, -1)) // ['AB']

