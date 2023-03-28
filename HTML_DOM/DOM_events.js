// DOM events
// https://www.w3schools.com/jsref/dom_obj_event.asp

// 1. Attribute events
// 2. Assign events using the element node

// var h1Elements = document.querySelectorAll('h1')

// for (var i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function (e) {
//         console.log(e.target)
//     }
// }
    
// DOM events

var inputElement = document.querySelector('input[type="text"]');

// TEXT INPUT
// code runs when element is blurred (not focus)
// inputElement.onchange = function (e) {
//     console.log(e.target.value); // return value of input (only when the new value is diff from before value)
// }

// code runs everytime we press a key
// inputElement.oninput = function (e) {
//     console.log(e.target.value)
// }

// CHECKBOX
// inputElement.onchange = function (e) {
//     console.log(e.target.checked) // return true or false
// }

// SELECT - OPTION
// inputElement.onchange = function (e) {
//     console.log(e.target.value)
// }

// KEY UP / DOWN / PRESS
// inputElement.onkeyup = function (e) {
//     console.log(e.which)
//     // return the code of keys pressed
// }

////////////////////////////////////////////////////////////////
// PreventDefault 

// var aElements = document.links
// // or document.anchors (only if a elements have attribute name)

// for (var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function (e) {
//         console.log(e.target.href)

//         if (e.target.href !== 'https://www.facebook.com/')
//         // or (!e.target.href.startsWith('https://www.facebook.com/')) 
//         {
//             e.preventDefault()
//         }
//     }
// }

// StopPropagation

// document.querySelector('div').onclick = function(e) {
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation()
//     console.log('CLICK')
// }


// EVENT LISTENERS

// With DOM event
// Xử lí nhiều việc khi 1 event xảy ra

var btn = document.getElementById('btn')

// btn.onclick = function (e) {
//     // Task 1
//     console.log('Task 1')

//     // Task 2
//     console.log('Task 2')

//     // Task 3
//     alert('Task 3')
// }

// Hủy bỏ lắng nghe

// no event listener in the 1st 3 seconds
// setTimeout(function () {
//     btn.onclick = function (e) {
//         // Task 1
//         console.log('Task 1')
    
//         // Task 2
//         console.log('Task 2')
    
//         // Task 3
//         alert('Task 3')
//     }
// }, 3000)

// Ban đầu có event listener, sau 3s ko lắng nghe nữa

// btn.onclick = function (e) {
//     // Task 1
//     console.log('Task 1')

//     // Task 2
//     console.log('Task 2')

//     // Task 3
//     alert('Task 3')
// }

// setTimeout (function () {
//     btn.onclick = function () {}
// }, 3000)


// With event listener
// addEventListener(event_name, callback_function)

// Multiple tasks
function task1() {
    console.log('Task 1')
} 

btn.addEventListener('click', task1)
btn.addEventListener('click', function (e) {
    console.log('Event 2')
})
btn.addEventListener('click', function (e) {
    console.log('Event 3')
})

// Remove event listener
setTimeout(function () {
    btn.removeEventListener('click', task1)
    // remove event listener from only task1
}, 5000)