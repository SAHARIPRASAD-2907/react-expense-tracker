const { createStore } = require("redux");

//ACTION GENERATORS -- FUNCTION THAT RETURNS action objects
// Increment count
const incrementCount = ({ incrementBy } = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1,
});
//Decrement count
const decrementCount = ({ decrementBy } = {}) => ({
  type: "DECREMENT",
  decrementBy: typeof decrementBy === "number" ? decrementBy : 1,
});
//Set count
const setCount = ({ setCountBy } = {}) => ({
  type: "SET",
  setCount: setCountBy,
});
//Reset count
const resetCount = () => ({
  type: "RESET",
});

//Reducers
//1. Reducers are pure function 


//Creating data in redux store
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.setCount,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//action occours whenever there as an event that gets changed
store.subscribe(() => {
  console.log(store.getState());
});

//Action - is an object that gets sent to the store

//walk, stop_walking, sit work . stop_walking

// Using function
//increment
store.dispatch(incrementCount({ incrementBy: 5 }));
//decrement
store.dispatch(decrementCount({ decrementBy: 100 }));
//SET
store.dispatch(setCount({ setCountBy: 150 }));
//RESET COUNT
store.dispatch(resetCount());
