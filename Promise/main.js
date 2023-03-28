// Promise
// - Sync - Đồng bộ
// - Async - Bất đồng bộ

// Sync
// console.log(1)
// console.log(2)

// Async
// setTimeout, setInterval, fetch,
// XMLHttpRequest, file reading,
// request animation frame

// --> need callback function

// setTimeout(function () {
//     console.log(1)
// }, 0)
// setTimeOut sẽ gọi lại callback SAU CÙNG
// sau khi các dòng code đằng sau đã thực hiện xong
// kể cả khi delay = 0ms

// console.log(2)


// Promise

// Có 3 trạng thái
// - Pending (when none of the functions are called)
// - Fulfilled (when resolve() is called)
// - Rejected (when reject() is called)

var promise = new Promise(
    // Executer
    function (resolve, reject) // Both are functions
    {
        // Logic
        // Success: resolve()
        // Fail: rejact()

        // resolve([
        //     123, 123, 1123
        // ]);

        reject('Error')
    }
)

promise
    // called when resolve() is called
    .then(function (course) {
        console.log(course)
    })
    // called when reject() is called
    .catch(function (error) {
        console.log(error)
    })
    // called when resolve() or reject() is called
    .finally(function () {
        console.log('Done!')
    })