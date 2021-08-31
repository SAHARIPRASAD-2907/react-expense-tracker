import { connect } from "react-redux";
import ExpenseListItems from "./ExpenseListItems";
import getVisibleExpenses from "../redux/selectors/expenses";
function ExpenseList(props) {
  return (
    <div>
      {props.expenses.map((expense) => {
        return <ExpenseListItems key={expense.id} {...expense} />;
      })}
    </div>
  );
}

const ConnectedExpenseList = connect((state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
})(ExpenseList);

export default ConnectedExpenseList;
