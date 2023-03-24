// Callback

// Là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// Conditions
// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction (para) {
    console.log(typeof para) 
}

function myCallback () {

}

myFunction(myCallback)