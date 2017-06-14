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


	// function constructors 	
	var Expense = function(id, description, value) {
		this.id = id,
		this.description = description,
		this.value = value
	} 

	var Income = function(id, description, value) {
		this.id = id,
		this.description = description,
		this.value = value
	} 


	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// [1, 2, 3, 4, 5], next ID should be 6
			// [1 2 4 6 8], problem though cuz next one cant be 6, should be 9! 
			// want ID to be last ID plus 1
			if (data.allItems[type].length < 0) {
				ID = data.allItems[type][data.allItems[type].length-1].id + 1; //plus 1 is for the NEW id
			} else {
				ID = 0;
			}
			

			// remember, type refers to the select tag thats either a + or -
			// create new item 
			if (type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			data.allItems[type].push(newItem);  //this line works because the exp or inc is the same as the allItems object and its two arrays
			return newItem; //so that the other function thats going to call addItem can have direct access to the item we create 
		},

		testing: function() {
			console.log(data);
		}
	}

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
		var input, newItem;

		// 1. Get the field input data
		input = UIController.getInput();
		// console.log(input);

		// 2. Add the item to the budget controller
		newItem = budgetController.addItem(input.type, input.description, input.value);

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