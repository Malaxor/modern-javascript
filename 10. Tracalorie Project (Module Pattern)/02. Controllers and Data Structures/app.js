
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
    }
  }
}());

// UI CONTROLLER
const UICtrl = (function() {


}());

// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl) {

	return {

		init() {
			console.log('Initializing App');
		}
	}
}(ItemCtrl, UICtrl));

App.init();