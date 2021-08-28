const { createStore } = require("redux");

//Creating data in redux store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

console.log(store.getState());

//Action - is an object that gets sent to the store

//walk, stop_walking, sit work . stop_walking

//increment
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
//decrement
store.dispatch({
  type: "DECREMENT",
});
//reset
store.dispatch({
  type: "RESET",
});

console.log(store.getState());
