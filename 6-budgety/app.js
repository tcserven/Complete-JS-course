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
	}; 

	var Income = function(id, description, value) {
		this.id = id,
		this.description = description,
		this.value = value
	};

	var calculateTotal = function(type) {
		var sum = 0;

		data.allItems[type].forEach(function(curr) {
			sum += curr.value;
		})

		data.totals[type] = sum;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget: 0,
		percentage: -1   //used to define something that doesnt exist
	};

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

		calculateBudget: function() {
			// calculate total income and expenses
			calculateTotal('exp');
			calculateTotal('inc');

			// calculate budget: income - expenses
			data.budget = data.totals.inc - data.totals.exp;

			// calculate the percentage of income that we spent, if the income is greater than 0!
			if (data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;
			}
			
		},

		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			};
		},

		testing: function() {
			console.log(data);
		}


	};

})();


// UI controller
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,  //will be either inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
			};
		},

		addListItem: function(obj, type) {
			var html, newHtml, element;

			// create HTML string with placeholder text
			if (type === 'inc') {
				element = DOMstrings.incomeContainer;
				html = '<div class="item clearfix"id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			} else if (type === 'exp') {
				element = DOMstrings.expensesContainer;
				html = '<div class="item clearfix"id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			
			// replace the placeholder text with some actual data
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);  //this needs to be newHtml so that it updates the newest version of newHtml
			newHtml = newHtml.replace('%value%', obj.value);

			// insert the HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},

		clearFields: function() {
			var fields, fieldsArr;

			fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

			fieldsArr = Array.prototype.slice.call(fields);

			fieldsArr.forEach(function(current, index, array) {
				current.value = "";
			});

			fieldsArr[0].focus();
		},

		displayBudget: function(obj) {

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

	var updateBudget = function() {
		// 1. calculate the budget
		budgetCtrl.calculateBudget();

		// 2. return the budget
		var budget = budgetCtrl.getBudget();

		// 3. display the budget
		console.log(budget);
	}

	var ctrlAddItem = function() {
		var input, newItem;

		// 1. Get the field input data
		input = UICtrl.getInput();
		// console.log(input);

		if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
			// 2. Add the item to the budget controller
			newItem = budgetCtrl.addItem(input.type, input.description, input.value);

			// 3. add the item to the UI
			UICtrl.addListItem(newItem, input.type);

			// 4. Clear the fields
			UICtrl.clearFields();

			// 5. calculate and update budget
			updateBudget();

		} else {

		}

		
		
	};

	return {
		init: function() {
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();