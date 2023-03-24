var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 120,
    },
]

// courses.forEach(function (course, index) {
//     console.log(index, course)
// })

// var free = courses.every(function (course, index) {
//     console.log(index) 
//     return course.coin < 500;
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


// reduce() 
// Problem: calculate the sum of coins

// Normal way
var totalCoins = 0

for (var i = 0; i < courses.length; i++) {
    totalCoins += courses[i].coin
}

console.log(totalCoins)

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
var totalCoinss = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin
}, 0)