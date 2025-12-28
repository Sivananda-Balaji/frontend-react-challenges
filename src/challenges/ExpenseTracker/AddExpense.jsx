import { useState } from "react";
import style from "./ExpenseTracker.module.css";

const AddExpense = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };
  const handleAmount = (e) => {
    const { value } = e.target;
    if (value === "") {
      setAmount(value);
      return;
    }
    if (/^\d*\.?\d*$/.test(value) && Number(value) > 0) {
      setAmount(value);
    }
  };
  const handleCategory = (e) => {
    const { value } = e.target;
    setCategory(value);
  };
  const clearExpenseDetails = () => {
    setDate("");
    setAmount("");
    setCategory("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseObj = {
      date,
      amount: Number(amount),
      category,
      id: crypto.randomUUID(),
    };
    onAdd(expenseObj);
    clearExpenseDetails();
  };
  return (
    <div className={style.addExpense}>
      <form onSubmit={handleSubmit}>
        <div className={style.dateSection}>
          <input
            type="date"
            id="expenseDate"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className={style.amountSection}>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="Please enter amount"
            required
          />
        </div>
        <div className={style.categorySection}>
          <select value={category} onChange={handleCategory} required>
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={style.buttonSection}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
