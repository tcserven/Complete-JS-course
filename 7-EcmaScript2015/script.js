// let vs const

// es5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);   // we see jane miller

// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// es5
// function driversLicence5(passedTest) {
// 	if (passedTest) {
// 		// console.log(firstName);  //undefined. gets hoisted and set to undefined
// 		var firstName = 'John';
// 		var yearOfBirth = 1990;
// 		// console.log(firstName + ', born in ' + yearOfBirth); 
// 	}
// 	console.log(firstName + ', born in ' + yearOfBirth);  //moved it out to see the difference between es5 and es6.
// 	// here we have access because its in the same function. if its outside the function though it wont work
// }
// driversLicence5(true);

// // es6
// function driversLicence6(passedTest) {

// 	// console.log(firstName);  // this doesnt get hoisted. it gives an error
// 	let firstName;
// 	const yearOfBirth = 1990; // now, let works but const does not. it must be declared out here. 

// 	if (passedTest) {
// 		firstName = 'John';
// 		// yearOfBirth = 1990;
// 		// console.log(firstName + ', born in ' + yearOfBirth);
// 	}
// 	console.log(firstName + ', born in ' + yearOfBirth);  //we no longer have access to the variables in the if statement
// }
// driversLicence6(true);


// let i = 23;
// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// };   // the i variable is completely different than the upper i. it runs as youd expect. var on the otherhand gives you 0 1 2 3 4 5. its function scoped!
// console.log(i);


///////////////////////////////////////////
// Blocks and IIFE

// es6
// {
// 	const a = 1;
// 	let b = 2;
// 	var c = 3;  //this works cuz they arent block scoped
// }
// console.log(a + b);

// // es5  IIFE
// (function() {
// 	var c = 3;
// })();
// console.log(c);

////////////////////////////////////////////
// Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year) {
// 	return 2016 - year;
// };

// // es5
// console.log('This is ' + firstName + ' ' + lastName + '. ' + 'in the year ' + yearOfBirth + ' ' + calcAge(yearOfBirth));

// // es6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and today he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(5));
// console.log(`${firstName} `.repeat(5));

////////////////////////////////
// Arrow Functions
// const years = [1990, 1965, 1982, 1937];

// // es5
// var age5 = years.map(function(el) {
// 	return 2016 - el; 
// })
// console.log(age5);

// // es6
// let age6 = years.map(el => 2016-el);  //for one argument and 1 line of code
// console.log(age6);

// age6 = years.map((el, index) => `Age element ${index+1}: ${2016 - el}.`)   //for 2 arguments 
// console.log(age6);

// age6 = years.map((el, index) => {   //multiple arguments and lines of code
// 	const now = new Date().getFullYear();
// 	const age = now - el;
// 	return `Age element ${index+1}: ${age}.`
// });
// console.log(age6);

//////////////////////////////////
// Arrow functions: lexical this keyword

// es5
// var box5 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function() {  //we want to attach an event handler to the green box
// 		var that = this;   //to fix the undefined thing
// 		document.querySelector('.green').addEventListener('click', function() {
// 			var str = 'This is box ' + that.position + ' and it is ' + that.color;
// 			alert(str);
// 		});	
// 	}
// }
// box5.clickMe();

// es6
// const box6 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function() {  //we want to attach an event handler to the green box

// 		document.querySelector('.green').addEventListener('click', () => {
// 			var str = 'This is box ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});	
// 	}
// }
// box6.clickMe();

// const box66 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: () => {  //we want to attach an event handler to the green box. 
// 		// making clickMe into an arrow fnc doesnt work! it sets its this keyword to the global object. 

// 		document.querySelector('.green').addEventListener('click', () => {
// 			var str = 'This is box ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});	
// 	}
// }
// box66.clickMe();


// es5 function constructor
// function Person(name) {
// 	this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {

// 	// var that = this;  //again need this to fix the callback from poiting to the global object
// 	// this is one option. can also use bind. 

// 	var arr = friends.map(function(el) {
// 		return this.name + ' is friends with ' + el;
// 	}.bind(this));
// 	console.log(arr);

// }

// var friends = ['bob', 'jane', 'mark'];
// new Person('John').myFriends5(friends);

// es6
// function Person(name) {
// 	this.name = name;
// }

// Person.prototype.myFriends6 = function(friends) {

// 	// var that = this;  //again need this to fix the callback from poiting to the global object
// 	// this is one option. can also use bind. 

// 	var arr = friends.map(el => `${this.name} is friends with ${el}`);

// 	console.log(arr);

// }

// var friends = ['bob', 'jane', 'mark'];
// new Person('John').myFriends6(friends);

/////////////////////////////////////////////
// Destructuring



// es5
// Var john = [‘John’, 26];
// Var name = john[0];
// Var age = john[1];

// // es6
// Const [name, age] = [‘John’, 26];
// console.log(name);
// console.log(age);

// Const obj = { firstName: ‘John’,  lastName: ‘Smith’  };
// Const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// Const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);


// Function calcAgeRetirement(year) {  const age = new Date().getFullYear() - year;  return [age, 65 - age] ; };

// Const [age, retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);


// // Arrays
// const boxes = document.querySelectorAll('.box');

// es5
// var boxesArr5 = Array.prototype.slice.call(boxes);   // this gives us an array to use the array method
// boxesArr5.forEach(function(cur) {  
// 	cur.style.backgroundColor = 'dodgerblue';
// });


//es6
// boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // es5
// // for (var i = 0; i < boxesArr5.length; i++) {
// // 	if (boxesArr5[i].className === 'box blue') {
// // 		continue;
// // 		//break; different than continue!
// // 	} else {
// // 		boxesArr5[i].textContent = 'Im blue';
// // 	}
// // }

// // es6 for off loop
// for (const cur of boxesArr6) {
// 	if (cur.className.includes('blue')) {
// 		continue;
// 	} else {
// 		cur.textContent = 'Im blue';
// 	}
// }


// // es5 - to see which kid is over 18 yrs old
// var ages = [12, 17, 8, 21, 14, 11];
// // var full = ages.map(function(cur) {
// // 	return cur >= 18;
// // });
// // console.log(full);
// // console.log(full.indexOf(true));  // to determine which position the true element is
// // console.log(ages[full.indexOf(true)]);

// // es6 -findindex and find
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

///////////////////////////////////////
// Spread operator

// function addFourAges (a, b, c, d) {
// 	return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);


// // es5 
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // es6
// const max3 = addFourAges(...ages);
// console.log(max3);


// const familySmith = ['john', 'jane', 'mark'];
// const familyMiller = ['mary', 'bob', 'anne'];
// // const bigFamily = [...familySmith, ...familyMiller];
// const bigFamily = [...familySmith, 'lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');  //h is not a nodeList, its just a node
// const boxes = document.querySelectorAll('.box'); //boxes is a nodeList
// // combine these two things so that we can change it all at once. its easier?
// const all = [h, ...boxes];  //this is no longer a nodeList!

// Array.from(all).forEach(cur => cur.style.color = 'purple');
// // although apparently you dont need to use this array.from to convert the nodeList to an array, because its not actually an array. error in the course. its an array!

////////////////////////////
// Rest parameters

// es5
// function isFullAge5() {
// 	console.log(arguments);  //gives us an array-like structure. 
// 	var argsArr = Array.prototype.slice.call(arguments);

// 	argsArr.forEach(function(cur) {
// 		console.log((2016 - cur) >= 18);
// 	});
// }
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// es6
// function isFullAge6(...years) {
// 	console.log(years);
// 	years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016, 1987);



// es5 - adding in a parameter for the age limit
// function isFullAge5(limit) {
// 	console.log(arguments);  //gives us an array-like structure. 
// 	var argsArr = Array.prototype.slice.call(arguments, 1);   //now at position 1 it will start to copy it
// 	console.log(argsArr);

// 	argsArr.forEach(function(cur) {
// 		console.log((2016 - cur) >= limit);
// 	});
// }
// isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// es6
// function isFullAge6(limit, ...years) {   //much easier in es6
// 	console.log(years);
// 	years.forEach(cur => console.log((2016 - cur) >= limit));
// }

// isFullAge6(21, 1990, 1999, 1965);
// isFullAge6(1990, 1999, 1965, 2016, 1987);


/////////////////////////////////////////////////
// Default parameters

//es5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

// 	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
// 	nationality === undefined ? nationality = 'American' : nationality = nationality;
// 	// or we could just do that || thing. 	

// 	this.firstName = firstName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.lastName = lastName;
// 	//this.lastName = lastName || 'Bob';
// 	this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


//es6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
// 	this.firstName = firstName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.lastName = lastName;
// 	this.nationality = nationality;
// }
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');



/////////////////////////////////////
// Maps

// const question = new Map();
// question.set('question', 'whats the official name of my face');
// question.set(1, 'es5');
// question.set(2, 'es6');
// question.set(3, 'es2015');
// question.set(4, 'es7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong answer');

// // console.log(question.get('question'));
// // console.log(question.size);

// if (question.has(4)) {
// 	// question.delete(4);
// }

// // question.clear();

// // question.forEach((value, key) => console.log(`This is ${key} and its set to ${value}`)); 

// // question.entries returns all the key values
// // we then use destructing in key, value to store each respective item in each variable 
// // and a for of loop.  works for arrays too
// for (let [key, value] of question.entries()) {
// 	// console.log(`This is ${key} and its set to ${value}`);
// 	if (typeof(key) === 'number') {
// 		console.log(`Answer ${key}:  ${value}`);
// 	}
// }

// const ans = parseInt(prompt('Write an answer'));
// // could write an if else statement, but were not using an object!
// // a bit confusing, but it makes sense if you break it down one step at a time
// // taking advantage of the whole key values not only being strings
// console.log(question.get(ans === question.get('correct')));


//////////////////////////////////////////////////////////////////
// Classes 
// es5
// var Person5 = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person5.prototype.calculateAge = function() {
// 	var age = new Date().getFullYear() - this.year;
// 	console.log(age);
// }

// var john5 = new Person5('John', 1995, 'teacher');

// // es6
// class Person6 {
// 	constructor(name, yearOfBirth,job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge() {
// 		var age = new Date().getFullYear - this.year;
// 		console.log(age);
// 	}

// 	static greeting() {
// 		console.log('hey there');
// 	}
// }

// var john6 = new Person6('John', 1995, 'teacher');
// Person6.greeting();

// Classes with subclasses
// ES5
// var Person5 = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };

// Person5.prototype.calculateAge = function() {
// 	var age = new Date().getFullYear() - this.yearOfBirth;
// 	console.log(age);
// };

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
// 	Person5.call(this, name, yearOfBirth, job);
// 	this.olympicGames = olympicGames;
// 	this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
// 	this.medals++;
// 	console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();


//es6 - subclasses
// class Person6 {
// 	constructor(name, yearOfBirth,job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge() {
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}
// }

// class Athlete6 extends Person6 {
// 	constructor(name, yearOfBirth, job, olympicGames, medals) {
// 		super(name, yearOfBirth, job);
// 		this.olympicGames = olympicGames;
// 		this.medals = medals;
// 	}

// 	wonMedal() {
// 		this.medals++;
// 		console.log(this.medals);
// 	}
// }

// const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10);
// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();


/////////////////////////////////
// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

/*jshint esversion: 6 */

class Element {   // element superclass
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {   //subclass
	constructor(name, buildYear, area, numTrees) {
		super(name, buildYear);
		this.area = area;  //km2
		this.numTrees = numTrees;
	}

	treeDensity() {
		const density = this.numTrees / this.area;
		console.log(`${this.name} has a tree denisty of ${density} tress per square km.`);
	}
}

class Street extends Element {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');   //want 3 to be the default
		classification.set(4, 'big');
		classification.set(5, 'huge');
		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)}`);
	}
}

const allParks = [
new Park('Green Park', 1987, 0.2, 215),
new Park('national Park', 1894, 2.9, 3541), 
new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
new Street('Ocean Ave', 1999, 1.1, 4), 
new Street('evergreen st', 2008, 2.7, 2), 
new Street('4th street', 2015, 0.8), 
new Street('Sunset blvd', 1982, 2.5, 5)
];


function calc(array) {
	// we are adding together all of the values of the array

	// const sum = array.reduce((previous, current, index) => previous + current, 0); Jonas soln
	const sum = array.reduce((previous, current) => previous + current); //this is a QA improvement
	// 3, 5, 6

	// returns sum and the average age all at once
	return [sum, sum / array.length];


}



function reportParks(p) {
	console.log(`---------------Parks Report--------------`);

	// Denisty
	p.forEach(cur => cur.treeDensity());

	// Average age
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	const [totalAge, avgAge] = calc(ages);
	console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


	// Which park has more than 1000 trees
	// const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);  //returns an array 
	// console.log(`${p[i].name} has more than 1000 trees`);
	for(const cur of p){   //this is from the QA, using a for of loop
		if(cur.numTrees > 1000){
			console.log(`${cur.name} has more than 1000 trees!`);
		}
	}
}

function reportStreets(s) {
	console.log(`---------------Street Report--------------`);

	//total and avg length of the towns streets
	const [totalLength, avgLength] = calc(s.map(el => el.length));   //using destructuring to get the lengths
	console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

	// classify sizes
	s.forEach(el => el.classifyStreet());

}


reportParks(allParks);
reportStreets(allStreets);









