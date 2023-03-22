// Math object

// Pi number
var pi = Math.PI
// console.log(pi)

// Round number to nearest int
// console.log(Math.round(pi))

// Absolute
// console.log(Math.abs(-5))

// Ceil - round to the next int
// if the value after the '.' is not zero
// console.log(Math.ceil(pi))
// console.log(Math.ceil(7.0000000000000))

// Floor - opposite of ceil
// console.log(Math.floor(pi))
// console.log(Math.floor(7.000000000))
// console.log(Math.floor(8.999999999))

// Random - generate a number > 0 and < 1 
// each time it is used 
console.log(Math.random());
console.log(Math.floor(Math.random() * 100)) 
// random range from 0 to 100

// example
var random = Math.floor(Math.random() * 5)
var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins'
] 

console.log(bonus[random])

// --> Ví dụ làm xác suất thành công/Nhận giải thưởng trong game, app,....

// Min/Max
console.log(Math.min(12, 14, 1235, 212, 885));
console.log(Math.max(12, 14, 1235, 212, 885));
