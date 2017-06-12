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
// function retirement(retirementAge) {
// 	var a = ' years left until retirement'
// 	return function(yearOfBirth) {
// 		var age = 2016 - yearOfBirth;
// 		console.log((retirementAge - age) + a);
// 	};
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// // can also do this
// // retirement(66)(1990);


// bind call and apply

// var john = {
// 	name: 'John',
// 	age: 26,
// 	job: 'teacher',
// 	presentation: function(style, timeOfDay) {
// 		if (style === 'formal') {
// 			console.log('Good ' + timeOfDay + ', ladies and gentlemen ' + this.name + 'im a ' + this.job + ' and im ' + this.age);
// 		} else if (style === 'friendly') {
// 			console.log('Hey whats up? ladies and gentlemen ' + this.name + 'im a ' + this.job + ' and im ' + this.age + ' ' + timeOfDay);
// 		}
// 	}
// };

// var emily = {
// 	name: 'emily',
// 	age: 25,
// 	job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');




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

// function isFullAge(limit, el) {
// 	return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


// problem set solution

// beginner level
// step 7 -- IIFE
// (function() {
// 	// step 1
// 	function Question(question, answers, correct) {
// 		this.question = question;
// 		this.answers = answers;
// 		this.correct = correct;
// 	}

// 	// step 4 - putting it on the prototype property
// 	Question.prototype.displayQuestion = function() {
// 		console.log(this.question);

// 	// display the questions depending on how many there are
// 		for (var i = 0; i < this.answers.length; i++) {
// 			console.log(i + ': ' + this.answers[i]);
// 		}
// 	};

// 	// step 6 - need to give the users answer as an argument
// 	Question.prototype.checkAnswer = function(ans) {
// 		if (ans === this.correct) {
// 			console.log('Correct answer');
// 		} else {
// 			console.log('Wrong');
// 		}
// 	};

// 	// step 2
// 	var q1 = new Question('What is my name?', ['Bill', 'Bob', 'Jo', 'Thomas'], 3);
// 	var q2 = new Question('What the best food ever?', ['Pizza', 'Pop', 'Candy'], 0);
// 	var q3 = new Question('Does Reilly smell?', ['Yes', 'No'], 0);

// 	// step 3
// 	var questions = [q1, q2, q3];

// 	// step 4
// 	var n  = Math.floor(Math.random() * questions.length);
// 	// testing and displaying the questions
// 	questions[n].displayQuestion();

// 	// step 5. parseInt converts the string to an int
// 	var answer = parseInt(prompt('Whats your answer?'));
// 	questions[n].checkAnswer(answer);
// }());


// expert level
(function() {
	// step 1
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	// step 4 - putting it on the prototype property
	Question.prototype.displayQuestion = function() {
		console.log(this.question);

	// display the questions depending on how many there are
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	};

	// step 6 - need to give the users answer as an argument
	Question.prototype.checkAnswer = function(ans, callback) {
		var score;

		if (ans === this.correct) {
			console.log('Correct answer');
			score = callback(true);
		} else {
			console.log('Wrong');
			score = callback(false);
		}

		this.displayScore(score);
	};

	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score);
		console.log('-----------------------');
	};

	// step 2
	var q1 = new Question('What is my name?', ['Bill', 'Bob', 'Jo', 'Thomas'], 3);
	var q2 = new Question('What the best food ever?', ['Pizza', 'Pop', 'Candy'], 0);
	var q3 = new Question('Does Reilly smell?', ['Yes', 'No'], 0);

	// step 3
	var questions = [q1, q2, q3];

	// step 10- using closures
	function score() {
		var score = 0;
		return function(correct) {
			if (correct) {
				score++;
			}
			return score;
		};
	}
	var keepScore = score();


	// step 8
	function nextQuestion() {
		// step 4
		var n  = Math.floor(Math.random() * questions.length);
		// testing and displaying the questions
		questions[n].displayQuestion();

		// step 5. parseInt converts the string to an int
		var answer = prompt('Whats your answer?');
		
		if (answer !== 'exit') {
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}
	}

	nextQuestion();	
}());