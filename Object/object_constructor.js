// Object constructor

// Object constructor name has capital letter as 1st letter
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    };
};

// Expression function can also be used
// var User = function(firstName, lastName, avatar) {} 

var author = new User('Phong', 'Nguyễn', 'avatar');
var student = new User('Linh', 'Phan', 'avatar');

// Add attribute to each object
author.ingame = 'PN18';
student.insta = 'linhphan.nee';


// Object prototype

// Add to every object created by User
// the attribute className and value 12D2
User.prototype.className = '12D2';
User.prototype.getClassName = function () {
    return this.className
};
// Shown in prototype in console, not directly in object
console.log(author);
console.log(student);

console.log(author.className)
console.log(student.getClassName())