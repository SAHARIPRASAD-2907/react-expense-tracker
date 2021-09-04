import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense } from "../redux/actions/expenses";
import { removeExpense } from "../redux/actions/expenses";
function Edit(props) {
  const requiredExpense = props.expenses.find(
    (expense) => expense.id === props.match.params.id
  );
  const expenseRemove = () => {
    props.dispatch(removeExpense({ id: props.match.params.id }));
    props.history.push("/");
  };
  return (
    <div>
      <h1>Edit the expenses with id of {props.match.params.id}</h1>
      <ExpenseForm
        expenses={requiredExpense}
        onSubmit={(expenses) => {
          props.dispatch(editExpense(requiredExpense.id, expenses));
          props.history.push("/");
          //console.log("updates", expenses);
        }}
      />
      <button onClick={expenseRemove}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(Edit);
