// Default parameter values
// thường sử dụng với những tham số không bắt buộc

// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Default value'
//     }
//     console.log(log)
// }

// ES6
// function logger (log = 'Default value') {
//     console.log(log)
// }

// logger(undefined) // Default value
// logger('bla bla bla') // bla bla bla

// function method(log, type = 'log') {
//     console[type](log)
// }

// method('message') // console.log('message')
// method('message', 'error') // console.error('message')


// Enhanced object literals

// var name = 'Javascript'
// var price = 1000

// var course = {
//     // Định nghĩa key: value cho object
//     name, 
//     price,

//     // Định nghĩa method cho object
//     getName() {
//         return name
//     }

//     // sử dụng được khi tên key và value trùng nhau
//     // same as below
//     // name: name,
//     // price: price
//     //getName: function() {
//     //      return name
//     // }
// }

// console.log(course)
// console.log(course.getName())

// // Định nghĩa key cho object dưới dạng biến
// var fieldName = 'name'
// var fieldPrice = 'price'

// const course2 = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }

// console.log(course2)


// Destructuring, rest

// Array
// var array = ['Javascript', 'PHP', 'Ruby']
// var array2 = ['2Javascript', '2PHP', '2Ruby']

// normal way
// var a = array[0]
// var b = array[1]
// var c = array[2]

// destructuring
// var [a, b, c] = array;
// var [d, ...rest] = array2;

// console.log(c, a, b)
// console.log(rest)
// console.log(d)

// Object
// var object = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'image',

//     description: 'description here',
    
//     // children: {
//     //     name: 'React'
//     // }
// }

// must have the same name as the keys in object
// var {name, price, img} = object;
// var {name, price, image} = object;
// var {name, ...rest} = object

// console.log(name, price, img) // Javascript 1000 undefined
// console.log(name, price, image) // Javascript 1000 image
// console.log(rest) // {price: 1000, image: 'image'}

// Children object
// var {name: parentName, children : { name: childrenName }} = object
// bị trùng key name nên đổi tên parentName

// console.log(parentName, childrenName) // Javascript React
 
// Default parameter 
// var {name, description = 'default value'} = object

// console.log(description)

// object as parameter (similar with array)
// function logger ({ name, price, ...rest }) {
//     console.log(name)
//     console.log(price)
//     console.log(rest)
// }

// logger({
//     name: 'Javascript',
//     price: 1000,
//     image: 'image'
// })

// Rest parameter

// function logger (...params) {
//     console.log(params)
// }

// console.log(logger(1,2,3,4,5,6,7,8))
// without console.log(params) --> undefined
// with console.log(params) --> [1,2,3,4,5,6,7,8]

// function logger2 (a, ...params) {
//     console.log(params)
// }

// logger2(1,2,3,4,5,6,7,8) // [2,3,4,5,6,7,8]
