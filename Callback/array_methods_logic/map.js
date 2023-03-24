// map (callback)

Array.prototype.map2 = function (callback) {
    if (typeof callback === 'function') {
        var arrayLength = this.length
        var output = []
        for (var i = 0; i < arrayLength; i++) {
            var result = callback(this[i])
            output.push(result)
        }
        return output
    }
    
}



var courses = ['Javascript', 'PHP', 'Ruby', 'HTML, CSS']

var htmls = courses.map(function (course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(' '))

var htmls = courses.map2(function (course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(' '))