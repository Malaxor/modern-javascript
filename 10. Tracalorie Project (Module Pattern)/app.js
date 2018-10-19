
// STORAGE CONTROLLER
const StorageCtrl = (function() {


}());

// ITEM CONTROLLER
const ItemCtrl = (function() {

  const Item = function(id, name, calories) {

    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // Data Structure / State
  const data = {

    items: [],
    currentItem: null,
    totalCalories: 0
  }
  return {

    logData() {

    	return data;
		},
		getItems() {

			return data.items;
		},
		addItem(name, calories) {

			let ID;

			if(data.items.length > 0) {

				ID = data.items[data.items.length - 1].id + 1;
			}
			else {

				ID = 0;
			}
			calories = parseInt(calories);

			const newItem = new Item(ID, name, calories);
			data.items.push(newItem);
			return newItem;
		},
		getTotalCalories() {

			const totalCalories = data.items.reduce((total, item) => {

				return total + item.calories;
			}, 0);

			data.totalCalories = totalCalories;
			return data.totalCalories;
		}
  }
}());

// UI CONTROLLER
const UICtrl = (function() {
	// Private Variables
	const UISelectors = {

		itemList: '#item-list',
		addBtn: '.add-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories',
		totalCalories: '.total-calories'
	}
	// Public Functions
	return {

		populateItemList(items) {

			const HTMLItems = items.reduce((emptyStr, item) => {

				return emptyStr + `
					<li class="collection-item" id="item-${item.id}">
						<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
						<a href="#" class="secondary-content">
				  			<i class="edit-item fa fa-pencil"></i>
						</a>
			  		</li>	
				`;
			}, '');
			document.querySelector(UISelectors.itemList).innerHTML = HTMLItems;
		},
		getItemInput() {

			return {

				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		},
		addListItem(item) {

			// show list
			document.querySelector(UISelectors.itemList).style.display = 'block';

			const li = document.createElement('li');
			li.className = 'collection-item';
			li.id = `item-${item.id}`;

			li.innerHTML = `
				<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil"></i>
				</a>
			`
			document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
		},
		showTotalCalories(totalCalories) {

			document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
		},
		clearInputs() {

			document.querySelector(UISelectors.itemNameInput).value = '';
			document.querySelector(UISelectors.itemCaloriesInput).value = '';
		},
		getSelectors() {

			return UISelectors;
		},
		hideList() {

			document.querySelector(UISelectors.itemList).style.display = 'none';
		}
	}
}());

// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl) {

	// Load Event Listeners
	const loadEventListeners = function() {
		// Get UI Selectors
		const UISelectors = UICtrl.getSelectors();
		// Add Item
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
	}
	// Add ItemSubmit
	const itemAddSubmit = e => {

		e.preventDefault(e);

		const input = UICtrl.getItemInput();
		
		if(input.name && input.calories) {
			// add item to data state
			const newItem = ItemCtrl.addItem(input.name, input.calories);
			// display item in DOM 
			UICtrl.addListItem(newItem);
			// clear inputs
			UICtrl.clearInputs();
		}
	}
	return {

		init() {

			const items = ItemCtrl.getItems();

			if(items.length === 0) {

				UICtrl.hideList();
			}
			else {

				UICtrl.populateItemList(items);
			}
			// get total calories
			const totalCalories = ItemCtrl.getTotalCalories();
			// add total calories to UI
			UICtrl.showTotalCalories(totalCalories);
			loadEventListeners();
		}
	}
}(ItemCtrl, UICtrl));

App.init();