// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise (function (resolve, reject) {
//     resolve('Success')
//     reject('Fail')
// })

// Create a resolve promise
var promiseResolve = Promise.resolve('Success')

promiseResolve // never run .catch code
    .then(function (result) {
        console.log(result)
    })

// Create a reject promise
var promiseReject = Promise.reject('Fail')

promiseReject // never run .then code
    .catch(function (result) {
        console.log(result)
    })


// Promise.all
// Problem: merge the 2 arrays in 2 promises

// The 2 following promises are independent
// But take up to 7 sec to complete
// Because promise2 wait for promise1 to finish

var promise1 = new Promise (
    function (resolve) {
        setTimeout (function () {
            resolve([1])
        }, 2000)
    }
)

var promise2 = new Promise (
    function (resolve) {
        setTimeout (function () {
            resolve([2, 3])
        }, 5000)
    }
)

// var promise3 = Promise.reject('Error here')

// runs both promises at the same time
Promise.all([promise1, promise2])
    // only when both are executed completely
    // .then can be executed
    .then  (function([result1, result2]) {
        console.log(result1.concat(result2))
    })
    // if just 1 promise is rejected
    // .catch will be executed
    .catch (function (error) {
        console.log(error)
    })

