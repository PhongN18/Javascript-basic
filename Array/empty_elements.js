// var courses = ['Javascript', 'PHP']
// courses.length = 10
// console.log(courses) // ['Javascript', 'PHP', empty x 8]

// for (var i = 0; i < courses.length; i++) {
//     console.log(courses[i])
// }
// Javascript
// PHP
// 8 undefined

// for (var index in courses) {
//     console.log(courses[index])
// }
// Javascript
// PHP

// another way to create an array

var array = new Array (10)
// 1 arg --> array.length
console.log(array) // [empty x 10]
array.push(123, 223) // length = 12
console.log(array) // [empty x 10, 123, 223]

var array2 = new Array (10, 11)
console.log(array2) // [10, 11]