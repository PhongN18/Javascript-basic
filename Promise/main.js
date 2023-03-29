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

        resolve();
    }
)

// promise
//     // called when resolve() is called
//     .then(function () {
//         return 1
//     })
//     // Param of the next .then function 
//     // is what the previous one returns 
//     .then(function (data) {
//         console.log(data)
//         return 2
//     })

//     // If a promise is returned, it will wait 
//     // until the logic in promise is totally completed
//     // then it will continue to the next chain
//     .then(function () {
//         return new Promise(function (resolve) {
//             setTimeout(function () {resolve(2)}, 5000)
//         })
//     })

//     // If any other data type / not promise is returned, 
//     // it will immediately run the next chain
//     .then(function (data) {
//         console.log(data)
//         return 3
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     // called when reject() is called
//     .catch(function () {
//         console.log()
//     })
//     // called when resolve() or reject() is called
//     .finally(function () {
//         console.log('Done!')
//     })


// Sleep function (hard-code)
// function sleep(ms) {
//     return new Promise (function (resolve) {
//         setTimeout(resolve, ms);
//     })
// }

// sleep(1000) // sleep returns a promise
//     .then(function () {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(3)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(4)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(5)
//         return sleep(1000)
//     })
//     .then(function () {
//         console.log(6)
//         return sleep(1000)
//     })

// Sleep function - one is rejected
function sleep(ms) {
    return new Promise (function (resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000) // sleep returns a promise
    .then(function () {
        console.log(1)
        return sleep(1000)
    })
    .then(function () {
        console.log(2)
        return new Promise (function (resolve, reject) {
            reject('Error!')
        })
    })
    .then(function () {
        console.log(3)
        return new Promise (function (resolve, reject) {
            reject('Error!')
        })
    })
    // Error, must have .catch
    // If a promise is rejected, all the .then after will not be execute
    // Jump to .catch

    .then(function () {
        console.log(4)
        return sleep(1000)
    })
    .then(function () {
        console.log(5)
        return sleep(1000)
    })
    .then(function () {
        console.log(6)
        return sleep(1000)
    })

    .catch(function (err) {
        console.log(err)
    })