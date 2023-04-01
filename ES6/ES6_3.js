// Spread 

// Join 2 arrays
// ... có thể hiểu như bỏ cặp ngoặc của array
// var array1 = ['Javascript', 'PHP', 'Ruby']
// var array2 = ['ReactJS', 'Dart']
// var array3 = [...array2, ...array1]

// console.log(array3)
// ['ReactJS', 'Dart', 'Javascript', 'PHP', 'Ruby']

// Join 2 objects
// var object1 = {
//     name: 'Javascript'
// }
// var object2 = {
//     price: 1000,
//     name: 'PHP'
//     // will overwrite if keys in 2 objects
//     // have the same name
// }
// var object3 = {
//     ...object1,
//     ...object2
// }

// console.log(object3)
// // {name: 'Javascript', price: 1000}


// Tagged template literals

// function highlight ([first, ...strings], ...values) {
//     // console.log('first: ', first) // Học lập trình 
//     // console.log('strings: ', strings) // [' tại ', ' !!!!!!']
//     // console.log('values: ', values) // ['Javascript', 'F8']

//     // Tự làm
//     return values.reduce(function (acc, curr, index, array) {
//         acc += `<span>${curr}</span> ${strings[index]}`
//         return acc
//     }, `${first}`)

//     // Chữa
//     // return values.reduce(
//     //     (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//     //     [first]
//     // ).join('')
// }

// var brand = 'F8'
// var course = 'Javascript'

// const html = highlight`Học lập trình ${course} tại ${brand} !!!!!!`
// // [['Học lập trình ', ' tại ', ' !!!!!!'], 'Javascript', 'F8']
// // Tham số đầu là 1 mảng chứa các chuỗi ko có nội suy
// // Các tham số còn lại là các giá trị phần nội suy

// console.log(html)


// Modules

// import logger from './moduleDemo.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './moduleConstants.js'

// logger('text', TYPE_ERROR)


// Optional chaining

const obj = {
    name: 'Alice',
    // cat: {
    //     name: 'Dinah',
    //     // cat2: {
    //     //     name: 'Dinah 2',
    //     //     cat3: {
    //     //         name: 'Dinah 3'
    //     //     }
    //     // }
    // }
}

console.log(obj.cat?.cat2?.cat3?.name)