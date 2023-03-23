// For loop

// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// For/in loop

/* var myInfo = {
    name: 'Phong Nguyen',
    age: 20,
    address: 'HN'
}

var languages = [
    'Javascript',
    'Python',
    'PHP'
]

for (var key in languages) {
    console.log(languages[key])
}

var string = "Something here"

for (var char in string) {
    console.log(string[char])
}
*/

// For/of loop

var languages = {
    first: 'Javascript',
    second: 'PHP',
    third: 'Python'
};

// Works with array, not with object
// for (var value of languages) {
//     console.log(value)
// }

console.log(Object.keys(languages))
// Return an array of keys in object
console.log(Object.values(languages))
// Return an array of values in object

for (var value of Object.keys(languages)) {
    console.log(value)
    console.log(languages[value])
}