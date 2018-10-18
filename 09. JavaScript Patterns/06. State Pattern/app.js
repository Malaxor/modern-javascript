
const PageStaet = function() {

  let currentState = new homeState(this);

  this.init = function() {

    this.change(new homeState);
  }
  this.change = function(state) {

    currentState = state;
  }
}

const homeState = function(page) {

  document.querySelector('#heading').textContent = null;
}