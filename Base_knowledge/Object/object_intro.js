// Object

// Add key with declared var
var gameKey = 'game'

var myInfo = {
    // key: value --> called attribute
    name: 'Phong Nguyễn',
    age: 20,
    address: 'VG, HY',

    // Other ways to declare
    'email-address': 'phong.ndh2009@gmail.com',
    [gameKey]: 'Valorant', 

    // function --> called method
    getName: function () {
        return this.name;
    },
};

// Add key - value outside of object
myInfo.tel = '0965140406';
myInfo['in-game'] = 'PhongN18' 

// Return a key - value
console.log(myInfo.name)
console.log(myInfo['in-game'])

var myKey = 'age'
console.log(myInfo[myKey])

// Delete key
delete myInfo.address

console.log(myInfo)

// Call function in object 
console.log(myInfo.getName())