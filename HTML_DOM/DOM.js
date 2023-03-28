// HTML DOM 

// 1. Element: ID, class, tag, CSS selector, HTML collection
// 2. Attribute
// 3. Text

// Get element
// getElementByID, querySelector --> return 1 element
// getElementsByClassName, getElementsByTagName, querySelectorAll 
// --> return HTMLCollection or NodeList ~ array

// var headingNode = document.getElementById('heading')
// console.log(headingNode)

// var headingNodes = document.getElementsByClassName('heading')
// console.log(headingNodes)

// var paragraphNodes = document.getElementsByTagName('p')
// console.log(paragraphNodes)

// var cssSelectNode = document.querySelector('.box .heading2')
// select only the first element with this CSS selector
// var cssSelectNodes = document.querySelectorAll('.box .heading2')
// select all elements with this CSS selector
// console.log(cssSelectNode)
// console.log(cssSelectNodes)

// HTML collection
// console.log(document.forms)
// console.log(document.forms[2])
// console.log(document.forms['form-1'])
// console.log(document.forms.testForm)

// console.log(document.anchors)
// Only return anchor tags with name attribute


// DOM attributes
// var headingElement = document.querySelector('h1')
// headingElement.title = 'heading'
// headingElement.className = 'heading'
// headingElement.className = 'heading--header'


// headingElement.setAttribute('href', 'blabla')

// return the attribute value
// headingElement.getAttribute('id')

// console.log(headingElement)
// console.log(headingElement.getAttribute('id'))
// console.log(headingElement.getAttribute('title'))


// Text node
// var headingElement = document.querySelector('h1')
// innerText trả lại giống những gì nhìn thấy trên trình duyệt
// console.log(headingElement.innerText)
// textContent trả lại những gì thực sự nằm trong textNode
// console.log(headingElement.textContent)

// headingElement.innerText = '123 hello hello'

// console.log(headingElement.innerText)
// console.log(headingElement.textContent)

// innerHTML, outerHTML
var boxElement = document.querySelector('.box')

// can add texts and attributes to elements with innerHTML (setter)
// replace all inner elements in .box in index.html 
// boxElement.innerHTML = '<h1 title="heading">Heading</h1>'
// console.log(boxElement.querySelector('h1').innerText)

// getter
// console.log(boxElement.innerHTML)

// getter
// console.log(boxElement.outerHTML)

// setter
// replace itself
// boxElement.outerHTML = '<h1>replaced</h1>'



// NODE PROPERTIES
console.log(boxElement) // return element HTML structure
console.log(typeof boxElement) // object
console.log([boxElement]) // shows methods


