const { createStore } = require("redux");
const { combineReducers } = require("redux");
const { sort } = require("semver");
const { v4: uuidv4 } = require("uuid");

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSES",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});
//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id: id,
});
//EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id: id,
  updates: update,
});
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
//SORT_END_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
//SET_STATE_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
//SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

//EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id != action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
//FILTERS REDUCER
// TEXT =>'',SORTBY => ''DATE
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

//Printing result on change
store.subscribe(() => {
  console.log(store.getState());
});

//ADDING EXPENSES
const expense1 = store.dispatch(
  addExpense({ description: "rent", amount: 100 })
);
// const expense2 = store.dispatch(
//   addExpense({ description: "rent", amount: 200 })
// );
//REMOVING EXPENSES
//const remove1 = store.dispatch(removeExpense({ id: expense1.expense.id }));
//EDIT_EXPENSES
// const edit1 = store.dispatch(
//   editExpense(expense1.expense.id, {
//     amount: 500,
//   })
// );
//SET_TEXT_FILTER
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
//SORT_BY_AMOUNT
// store.dispatch(sortByAmount());
//SORT_BY_DATE
// store.dispatch(sortByDate());
//SET_START_DATE
store.dispatch(setStartDate(123));
store.dispatch(setEndDate(125));
//SET_END_DATE

const demoState = {
  expenses: [
    {
      id: "abcde",
      description: "January Rent",
      note: "This was the final payment fot the address",
      amount: 45000,
      createdAt: 0,
    },
  ],
  filter: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

// const user = {
//   name: "jen",
//   age: 24,
// };

// console.log({
//   ...user,
//   location: "chennai",
//   age: 27,
// });
