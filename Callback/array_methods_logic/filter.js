// filter (callback function)

Array.prototype.filter2 = function (callback) {
    if (typeof callback === 'function') {
        var arrayLength = this.length
        var result = []

        for (var i = 0; i < arrayLength; i++) {
            var condition = callback(this[i], i, this)
            if (condition) {
                result.push(this[i])
            }
        }
        return result
    }
}


var courses = [
    { id: 1, name: 'Javascript', coin: 250 },
    { id: 2, name: 'HTML, CSS', coin: 350 },
    { id: 3, name: 'Ruby', coin: 400 },
    { id: 4, name: 'PHP', coin: 0 },
    { id: 5, name: 'ReactJS', coin: 500 },
    { id: 6, name: 'Ruby', coin: 120 },
]

// var filter = courses.filter(function (course, index) {
//     console.log(index)
//     return course.name === 'PHP';
// })
// console.log(filter)

// var filter2 = courses.filter2(function (course, index) {
//     console.log(index)
//     return course.name === 'PHP';
// })
// console.log(filter2)

var newCourses = courses.map(function () {});
console.log(newCourses)