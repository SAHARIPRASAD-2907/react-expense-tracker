const { createStore } = require("redux");
const { combineReducers } = require("redux");







//FILTERS REDUCER
// TEXT =>'',SORTBY => ''DATE

// Timestamp
// 33400 10 -203



//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

//Printing result on change
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//ADDING EXPENSES
const expense1 = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: -21000 })
);
const expense2 = store.dispatch(
  addExpense({ description: "cofee", amount: 200, createdAt: -1000 })
);
//REMOVING EXPENSES
//const remove1 = store.dispatch(removeExpense({ id: expense1.expense.id }));
//EDIT_EXPENSES
// const edit1 = store.dispatch(
//   editExpense(expense1.expense.id, {
//     amount: 500,
//   })
// );
console.log("AFTER FILTERING");
//SET_TEXT_FILTER
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
//SORT_BY_AMOUNT
store.dispatch(sortByAmount());
//SORT_BY_DATE
// store.dispatch(sortByDate());
//SET_START_DATE
// store.dispatch(setStartDate(500));
//SET_END_DATE
// store.dispatch(setEndDate(1500));

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
