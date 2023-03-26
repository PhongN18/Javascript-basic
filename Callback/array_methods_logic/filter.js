// filter (callback function)

Array.prototype.filter2 = function (callback) {
    if (typeof callback === 'function') {
        var result = []

        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                var condition = callback(this[index], index, this)
                if (condition) {
                    result.push(this[index])
                }
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

courses.length = 10

var filter = courses.filter(function (course, index) {
    console.log(index)
    console.log(typeof index)
    return course.coin < 400;
})
console.log(filter)

var filter2 = courses.filter2(function (course, index) {
    console.log(index)
    console.log(typeof index)
    return course.coin < 400;
})
console.log(filter2)
