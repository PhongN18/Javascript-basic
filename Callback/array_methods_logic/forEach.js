// forEach()
// return nothing

// Array.prototype.forEach2 = function (callback) {
//     if (typeof callback === 'function') {
//         for (var i = 0; i < this.length; i++) {
            
//             callback(this[i], i, this)
//         }
//     }
// }


var courses = ['Javascript', 'PHP', 'Ruby', 'HTML, CSS']
// courses.length = 15
// courses.forEach(function (course, index) {
//     console.log(index, course)
// })

// courses.forEach2(function (course, index) {
//     console.log(index, course)
// })


// Correction --> case: empty elements
// forEach sẽ không duyệt qua empty elements
Array.prototype.forEach3 = function (callback) {
    if (typeof callback === 'function') {
        if (this.hasOwnProperty(index)) {
            for (var index in this) {
                callback(this[index], index, this)
            }
        }
    }
}
// for in sẽ duyệt qua tất cả các index trong array
// kể cả các index trong __proto__
// hasOwnProperty --> kiểm tra 
// nếu nằm trong __proto__ hoặc empty --> false

courses.forEach3(function (course, index, array) {
    console.log(course, index, array);
})
