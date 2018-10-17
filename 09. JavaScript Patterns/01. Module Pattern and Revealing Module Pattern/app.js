
// Standard Module Pattern
const UICtrl = (() => {

    let text = 'Hello World';
    // Private Function
    const changeText = () => {  

        const element = document.querySelector('h1');
        element.textContent = text;
    }
    // Public Function
    return  {
        callChangeText() {

            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (() => {
    // underscore signifies private variables
    const data = [];

    function add(item) {

        data.push(item);
        console.log('Item added.');
    }
    function get(id) {

        return data.find(item => item.id === id);
    }
    return {

        add,
        get
    }
})();

ItemCtrl.add({ id: 1, name: 'John' });
console.log(ItemCtrl.get(1));