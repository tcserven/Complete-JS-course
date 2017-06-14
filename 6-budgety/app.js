// var budgetController = (function() {
// 	var x = 23;
// 	var add = function(a) {
// 		return x + a;
// 	};
// 	return {
// 		publicTest: function(b) {
// 			return add(b);
// 		}
// 	};
// })();

// var UIController = (function() {
// })();

// var controller = (function(budgetCtrl, UICtrl) {
// 	var z = budgetCtrl.publicTest(5);
// 	return {
// 		anotherPublic: function() {
// 			console.log(z);
// 		}
// 	};
// })(budgetController, UIController);



// budget controller
var budgetController = (function() {

})();


// UI controller
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,  //will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};


})();


// global app controller
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		// Handling a click or enter button press
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		// adding a global event listener
		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				event.preventDefault(); //prevents the enter key from also triggering a click event
				ctrlAddItem();
			}
		});
	};

	

	var ctrlAddItem = function() {
		// 1. Get the field input data
		var input = UIController.getInput();
		console.log(input);

		// 2. Add the item to the budget controller

		// 3. add the item to the UI

		// 4. calculate the budget

		// 5. display the budget
	};

	return {
		init: function() {
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();