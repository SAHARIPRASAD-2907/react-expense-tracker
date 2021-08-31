import React from "react";

//setup notes state
//setup onChnage and value for textArea

class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: '',
    note: "",
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onChangeAmount = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(() => ({ amount }));
    }
    
  };
  onAdditionalChangeDescription = (e) => {
    const note = e.target.value;
    e.persist();
    this.setState(() => ({ note }));
  };
  render() {
    return (
      <div>
        <form action="">
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
          <textarea
            placeholder="Add a note for your expenses (optional)"
            value={this.state.note}
            onChange={this.onAdditionalChangeDescription}
          ></textarea>
          <button>Add Expenses</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
