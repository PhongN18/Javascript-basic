// some (callback function)

Array.prototype.some2 = function (callback) {
    if (typeof callback === 'function') {
        var result = false

        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                result = callback(this[index], index, this)
                if (result) {
                    return result
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

var free2 = courses.some(function (course, index) {
    console.log(index) 
    return course.coin === 0;
})
console.log(free2)

var free2 = courses.some2(function (course, index) {
    console.log(index) 
    return course.coin === 0;
})
console.log(free2)