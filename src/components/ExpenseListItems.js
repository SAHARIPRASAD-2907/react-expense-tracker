import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";
function ExpenseListItems({ dispatch, id, description, amount, createdAt }) {
  const expenseRemove = () => {
    dispatch(removeExpense({ id }));
  };
  return (
    <div>
      <h3>{description}</h3>
      <span>Amount:{amount}</span> created at-- <span>{createdAt}</span>
      <button onClick={expenseRemove}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseListItems);
