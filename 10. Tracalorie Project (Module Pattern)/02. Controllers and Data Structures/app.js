
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
	}
  }
}());

// UI CONTROLLER
const UICtrl = (function() {

	const UISelectors = {

		itemList: '#item-list'
	}
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
		}
	}
}());

// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl) {

	return {

		init() {

			const items = ItemCtrl.getItems();
			UICtrl.populateItemList(items);
		}
	}
}(ItemCtrl, UICtrl));

App.init();