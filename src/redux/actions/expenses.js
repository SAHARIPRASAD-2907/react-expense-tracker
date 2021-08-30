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

export { addExpense, removeExpense, editExpense };
