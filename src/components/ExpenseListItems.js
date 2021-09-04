import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ExpenseListItems({ dispatch, id, description, amount, createdAt }) {
  return (
    <div>
      <Link to={"/edit/" + id}>
        <h3>{description}</h3>
      </Link>
      <span>Amount:{amount}</span> created at-- <span>{createdAt}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseListItems);
