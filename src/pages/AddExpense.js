import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { addExpense } from "../redux/actions/expenses";
import { connect } from "react-redux";

function AddExpense(props) {
  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    expense: state.expense,
  };
};

export default connect(mapStateToProps)(AddExpense);
