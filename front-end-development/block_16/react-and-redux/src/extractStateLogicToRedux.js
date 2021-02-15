const Redux = require('redux');

// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD: 
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

console.log(store.getState());
store.dispatch(addMessage('Hello'));
console.log(store.getState());
store.dispatch(addMessage('World!'));
console.log(store.getState());
