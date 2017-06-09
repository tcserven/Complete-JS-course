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

// primitives
// var a = 23;
// var b = a;

// a = 46;
// console.log(a);
// console.log(b);


// // objects
// var obj1 = {
// 	name: 'john',
// 	age: 26
// };

// var obj2 = obj1; 

// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // functions
// var age = 27;
// var obj = {
// 	name: 'Thomas',
// 	city: 'Guelph'
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = 'San fran';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);



// Passing functions as arguments
// var years = [1990, 1945, 1947, 1956, 1997];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]));
// 	}

// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2016-el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81) {
// 		return Math.round(206.9 - (0.67 * el));	
// 	} else {
// 		return -1;
// 	}
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(years, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// functions returning functions
// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			console.log(name + ' can you explain what UX design is?');
// 		};
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			console.log('what subject do you teach ' + name);
// 		};
// 	} else {
// 		return function(name) {
// 			console.log('hello ' + name + ' what do you do?');
// 		};
// 	}
// }

// var teachQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teachQuestion('John');
// designerQuestion('bob');



// IIFE

// function game() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }

// game();


// // this is an iife
// (function () {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// })();



// closures
function retirement(retirementAge) {
	var a = ' years left until retirement'
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	};
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// can also do this
// retirement(66)(1990);
