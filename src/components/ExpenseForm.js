import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

//setup notes state
//setup onChnage and value for textArea

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.expenses);
    this.state = {
      description: props.expenses ? props.expenses.description : "",
      amount: props.expenses ? (props.expenses.amount / 100).toString() : "",
      note: props.expenses ? props.expenses.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onChangeAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onAdditionalChangeDescription = (e) => {
    const note = e.target.value;
    e.persist();
    this.setState(() => ({ note }));
  };
  addExpenses = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      //set error state equal to "Please provide description and amount."
      this.setState(() => ({
        error: "please provide description and amount.",
      }));
    } else {
      //clear the error
      this.setState(() => ({ error: "" }));
      console.log("submited");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addExpenses}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChangeAmount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <textarea
            placeholder="Add a note for your expenses (optional)"
            value={this.state.note}
            onChange={this.onAdditionalChangeDescription}
          ></textarea>
          <button type="submit">Add Expenses</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
