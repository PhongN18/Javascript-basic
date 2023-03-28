// For loop

// for (var i = 1; i <= 1000; i++) {
//     console.log(i);

//     if (i === 10) {
//         break // Stop the loop
//     }
// }

// for (var i = 1; i <= 1000; i++) {
//     if (i % 100 !== 0) {
//         continue // Skip to next loop
//     }
    
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

// var languages = {
//     first: 'Javascript',
//     second: 'PHP',
//     third: 'Python'
// };

// Works with array, not with object
// for (var value of languages) {
//     console.log(value)
// }

// console.log(Object.keys(languages))
// // Return an array of keys in object
// console.log(Object.values(languages))
// // Return an array of values in object

// for (var value of Object.keys(languages)) {
//     console.log(value)
//     console.log(languages[value])
// }


// Do while loop
// Code sẽ được thực hiện ít nhất 1 lần
// Bắt đầu check condition từ lần thứ 2
// var i = 0;


// do {
//     //code
//     i++;
//     console.log(i)
// } while (i < 10);


// Nested loop 

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}