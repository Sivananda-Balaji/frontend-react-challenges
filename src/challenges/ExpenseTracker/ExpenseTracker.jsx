import { useState } from "react";
import style from "./ExpenseTracker.module.css";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState([]);
  const handleAddExpense = (newExpense) => {
    setExpenseList((prev) => [...prev, newExpense]);
  };
  const handleDeleteExpense = (deleteId) => {
    setExpenseList((prev) => prev.filter((item) => item.id !== deleteId));
  };
  return (
    <div className={style.container}>
      <AddExpense onAdd={handleAddExpense} />
      <ExpenseList expenseList={expenseList} onDelete={handleDeleteExpense} />
      <ExpenseSummary expenseList={expenseList} />
    </div>
  );
};

export default ExpenseTracker;
