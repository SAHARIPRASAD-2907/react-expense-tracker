import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const ADD_EXPENSE = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return[
          ...state,
          action.expense
      ]
    default:
      return state;
  }
};
//Filter reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState);
});

store.dispatch(ADD_EXPENSE({ "description:": "Rent", amount: 100 }));

const demoState = {
  expenses: [
    {
      id: "ancdefg",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
