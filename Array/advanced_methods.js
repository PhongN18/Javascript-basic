var courses = [
    { id: 1, name: 'Javascript', coin: 250 },
    { id: 2, name: 'HTML, CSS', coin: 0 },
    { id: 3, name: 'Ruby', coin: 0 },
    { id: 4, name: 'PHP', coin: 400 },
    { id: 5, name: 'ReactJS', coin: 500 },
    { id: 6, name: 'Ruby', coin: 120 },
]

// courses.forEach(function (course, index) {
//     console.log(index, course)
// })

// var free = courses.every(function (course, index) {
//     console.log(index) 
//     return course.coin < 300;
//     // check if the statement is true for every elements in array 
// })
// console.log(free)

// var free2 = courses.some(function (course, index) {
//     console.log(index) 
//     return course.coin < 500;
//     // check if the statement is true for even just 1 element
// })
// console.log(free2)

// var find = courses.find(function (course, index) {
//     console.log(index)
//     return course.name === 'Ruby';
//     // return just the 1st element satisfies the condition
// })
// console.log(find)


// var filter = courses.filter(function (course, index) {
//     console.log(index)
//     return course.name === 'Ruby';
//     // return all satisfying elements
// })
// console.log(filter)

// map() 

// return a new array that has the same length 
// var newCourses = courses.map(function () {});
// console.log(newCourses)

// change value in every elements of array
// function courseHandler (course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         originArray: courses,
//     }
// }

// var newCourses = courses.map(courseHandler);
// console.log(newCourses)


// reduce() - p1
// Problem: calculate the sum of coins

// Normal way
// var totalCoins = 0

// for (var i = 0; i < courses.length; i++) {
//     totalCoins += courses[i].coin
// }

// console.log(totalCoins)

// With reduce()
// var j = 0

// function coinHandler (accumulator, currentValue, currentIndex, originArray) // accumulator nhận giá trị khởi tạo
// {
//     j++;
//     var total = accumulator + currentValue.coin

//     console.table({
//         'Lượt chạy': j,
//         'Tên khóa học': currentValue.name,
//         'Giá khóa học': currentValue.coin,
//         'Biến lưu trữ': accumulator,
//         'Tích trữ được': total
//     });
//     console.log(currentValue)

//     return total 
// }

// var totalCoinss = courses.reduce(coinHandler, 0)
// '0': initial value/giá trị khởi tạo, ~ var totalCoins = 0

// Shortened
// var totalCoinss = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin
// }, 0)


// reduce() - p2
// initial value
// var numbers = [100, 120, 440, 330, 190]
// console.log(numbers.reduce(function (total, number) {
//     return total + number
// }))

// reduce() will take the 1st element as initial value 
// if it was not pre-assigned

// Flatten a depth array - "Làm phẳng mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray)


// Lấy ra các khóa học và đưa vào 1 mảng mới
// var topics = [
//     {
//         topic: 'Front-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS',
//             },
//             {
//                 id: 2,
//                 title: 'Javascript',
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'PHP',
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS',
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function (result, topicName) {
//     return result.concat(topicName.courses)
// }, [])

// console.log(newCourses)


// arrToObj function
// var arr = [
//     ['name', 'Phong Nguyen'],
//     ['age', 20],
//     ['address', 'Ecopark']
// ]

// function arrToObj (arr) {
//     return arr.reduce(function (result, element) {

//         result[element[0]] = element[1]
//         // result[name] = value
//         return result

//     }, {}) // output is an Object 
// }

// console.log(arrToObj(arr))


// includes() method
// can also be used by String

// var title = 'Some random string for this example'

// // case sensitive
// console.log(title.includes('Some')) // true
// console.log(title.includes('some')) // false

// // position --> start searching from which index
// // if undefined -->  assume 0
// // here 'string' can be found from index 12
// console.log(title.includes('string', 5)) // true
// console.log(title.includes('string', 12)) // true
// console.log(title.includes('string', 13)) // false
// console.log(title.includes('string', 15)) // false

// Array
// var courses = ['Java', 'PHP', 'Ruby', 'HTML', 'Javascript']

// console.log(courses.includes('Java')) // true
// console.log(courses.includes('Java', 2)) // false
// console.log(courses.includes('Java', -2)) // false
// console.log(courses.includes('Java', -5)) // true

