// DOM CSS
var boxElement = document.querySelector('.box')

// boxElement.style.backgroundColor = 'green'

// Element có thể được edit trên trình duyệt
// Nhưng không lưu (F5 về như cũ)
Object.assign(boxElement, {
    contentEditable: true
})

// assign inline style to element
// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     color: 'white'
// })

// return inline style value
// console.log(boxElement.style.width)


// ClassList property

console.log(boxElement.classList) 
console.log(boxElement.classList.value) // return value in class attribute
console.log(boxElement.classList.length) // return number of class

boxElement.classList.add('red', 'yellow', 'green') // add class .red, .yellow, .green to boxElement

console.log(boxElement.classList.contains('red')) // check if boxElement contains class .red or not

setTimeout(() => {
    boxElement.classList.remove('red') // remove class .red
}, 3000)

boxElement.classList.replace('box-2', 'boxes') // replace class .box-2 with .boxes

// toggle 
// if boxElement contains class .red --> remove .red
// if boxElement doesn't contain class .red --> add .red
setInterval(() => {
    boxElement.classList.toggle('red') // remove class .red
}, 1000)