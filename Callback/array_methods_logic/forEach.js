// forEach()
// return nothing

Array.prototype.forEach2 = function (callback) {
    if (typeof callback === 'function') {
        for (var i = 0; i < this.length; i++) {
            
            callback(this[i], i, this)
        }
    }
}


var courses = ['Javascript', 'PHP', 'Ruby', 'HTML, CSS']
courses.length = 15
courses.forEach(function (course, index) {
    console.log(index, course)
})

courses.forEach2(function (course, index) {
    console.log(index, course)
})
