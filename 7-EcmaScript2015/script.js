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

