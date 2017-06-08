// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// };  

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// } 

// Person.prototype.calculateAge = function() {
// 	console.log(2016-this.yearOfBirth);
// }



// var john = new Person('John', 1990, 'teacher');
// var john2 = new Person('John2', 1991, 'teacherr');
// var john3 = new Person('John3', 1940, 'teacherrr');

// john.calculateAge();
// john2.calculateAge();
// john3.calculateAge();





// object.create
// var personProto = {
// 	calculateAge = function() {
// 		console.log(2016-this.yearOfBirth);
// 	}
// }

// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = 1424;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
// 	name: { value: 'Jane'},
// 	yearOfBirth: { value: 1984 },
// 	job: { value: 'designer' }
// });




// primitives vs objects
var a = 23;
var b = a;

a = 46;
console.log(a);
console.log(b);