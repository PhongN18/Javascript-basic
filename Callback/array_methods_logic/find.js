// find (callback function)

Array.prototype.find2 = function (callback) {
    if (typeof callback === 'function') {
        var arrayLength = this.length

        for (var i = 0; i < arrayLength; i++) {
            var condition = callback(this[i], i, this)
            if (condition) {
                return this[i]
            }
        }
        return undefined
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

var find = courses.find(function (course, index) {
    console.log(index)
    return course.id > 3;
})
console.log(find)

var find2 = courses.find2(function (course, index) {
    console.log(index)
    return course.id > 3;
})
console.log(find2)