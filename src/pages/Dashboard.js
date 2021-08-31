import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseFilters from "../components/ExpenseListFilters";

function Dashboard() {
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseFilters />
      <ExpenseList />
    </div>
  );
}

export default Dashboard;
