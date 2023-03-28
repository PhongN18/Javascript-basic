# HTML DOM
- Document Object Model

## Thành phần 
### Element (a, h1, head, body, ...)
- getElementByID, querySelector --> return 1 element
- getElementsByClassName, getElementsByTagName, querySelectorAll 
--> return HTMLCollection or NodeList ~ array

### Attribute (href, class, src, ...)
- setAttribute, getAttribute
- element.attribute = value

### Text (literal text, <h1>This part is text</h1>)
- element.innerText
- element.textContent

## Node
- Could be elements, attributes or texts

## Document object
- Represent the whole website

--------------------------------------------------

# Javascript
- HTML DOM is not Javascript
- JS provides tools to edit HTML DOM, satisfying the DOM standards

## Environment
- Browser
- Server (NodeJS)

### Browser
- read HTML -> DOM -> DOM API (to request access to DOM) or WEB API
- API: Application programming interface

--> Javascript does not have DOM, 
the Browser can generate DOM from HTML because of WEB API
