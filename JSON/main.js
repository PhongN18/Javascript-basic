// JSON

// Example
var jsonNumber = '1';
var jsonBool = 'true' // 'false'
var jsonNull = 'null'
var jsonString = '"string"' // string in JSON must have ""
var jsonArray = '["Javascript", "PHP"]' // if arr elements are string, must have ""
// no extra ',' after the last element
var jsonObject = '{"name": "Phong", "age": 20}'

// Parse
console.log(JSON.parse(jsonObject))

// Stringify
console.log(JSON.stringify(null))