// var, let, const

// SCOPE

// ~ if (true)
// {
//     var string1 = 'var random string'
//     let string2 = 'let random string'
//     const string3 = 'const random string' 
//     // const string3 = 'new' // cannot redeclared
    
//     {
//         {
//             const string3 = 'new'
//             console.log(string1)
//             console.log(string2)
//             console.log(string3)
//         }
//     }
// }

// console.log(string1) // runs normally
// console.log(string2) // 'string2 is not defined'
// console.log(string3) // 'string3 is not defined'

// biến var có thể được truy cập globally
// có thể khai báo và gán lại giá trị
// let và const chỉ truy cập được trong code block
// ko thể khai báo nhưng có thể gán lại


// HOISTING
// a = 1;
// var a

// console.log(a) // runs normally
// --> var được hỗ trợ hoisting
// --> trình thông dịch sẽ đưa định nghĩa biến lên đầu

// let và const không được hỗ trợ hoisting


// ASSIGNMENT
// var a = 1;
// let b = 2;

// a = 100
// b = 200

// console.log (a, b) // 100 200
// // --> var và let có thể gán lại giá trị cho biến

// const c = 3;
// // c = 300;

// console.log(c) // TypeError: Assignment to constant variables
// // --> không thể sử dụng toán tử gán lần thứ 2 cho 1 constant

// const d = {
//     name: 'Phong'
// }
// d.name = 'Phongggggg'

// console.log(d)
// // gán lại value cho key của const thì hoạt động bth


// Arrow functions

// expression function
// const logger = function(log) {
//     console.log(log)
// }

// logger(`spam
// spam
// spam
// spam`)

// // arrow function
// const loggerArrow = (log) => {
//     console.log(log)
// }

// loggerArrow(`spam
// spam
// spam`)

// Nếu sử dụng {}
// arrow function sẽ hiểu là code block, cần có return
// const sum = (a, b) => a * b
// console.log(sum (2, 3))

// const obj = (a, b) => ({a: a, b: b})
// console.log(obj (2, 3))

// nếu chỉ có 1 parameter --> bỏ ngoặc đơn
// const square = a => a ** 2
// console.log(square (7))


// Class

// function Course(name, price) {
//     this.name = name
//     this.price = price

//     this.getName = function () {
//         return this.name
//     }
// }

// class Course {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     getName() {
//         return this.name
//     }
// } 

// const phpCourse = new Course('PHP', 1000)
// const jsCourse = new Course('JavaScript', 1200)

// console.log(phpCourse)
// console.log(jsCourse.getName())


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