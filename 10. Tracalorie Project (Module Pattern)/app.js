
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

    items: [

      { id: 0, name: 'Steak Dinner', calories: 1200 },
      { id: 1, name: 'Cookie', calories: 200 },
      { id: 2, name: 'Eggs', calories: 150 }
    ],
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
		itemCaloriesInput: '#item-calories'
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
		getSelectors() {

			return UISelectors;
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

			const newItem = ItemCtrl.addItem(input.name, input.calories);
		}
	}
	return {

		init() {

			const items = ItemCtrl.getItems();
			UICtrl.populateItemList(items);
			loadEventListeners();
		}
	}
}(ItemCtrl, UICtrl));

App.init();