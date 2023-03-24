// every (callback function)

Array.prototype.every2 = function (callback) {
    if (typeof callback === 'function') {
        var arrayLength = this.length
        var result = true
        for (var i = 0; i < arrayLength; i++) {
            result = callback(this[i], i, this)
            if (!result) {
                return result
            }
        }
        return result
    } 
}

var courses = [
    { id: 1, name: 'Javascript', coin: 250 },
    { id: 2, name: 'HTML, CSS', coin: 0 },
    { id: 3, name: 'Ruby', coin: 0 },
    { id: 4, name: 'PHP', coin: 400 },
    { id: 5, name: 'ReactJS', coin: 500 },
    { id: 6, name: 'Ruby', coin: 120 },
]

// var free = courses.every(function (course, index) {
//     console.log(index) 
//     return course.coin < 500;
// })
// console.log(free)

var free2 = courses.every2(function (course, index, array) {
    console.log(index) 
    console.log(array)
    return course.coin < 1000;
})
console.log(free2)