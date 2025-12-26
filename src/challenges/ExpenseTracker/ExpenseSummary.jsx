import style from "./ExpenseTracker.module.css";

const ExpenseSummary = ({ expenseList }) => {
  const totalExpenses = expenseList.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className={style.expenseSummary}>
      <h2>Summary</h2>
      <p>
        Total Expenses: $
        {expenseList.length === 0 ? "0.00" : totalExpenses.toFixed(2)}
      </p>
    </div>
  );
};

export default ExpenseSummary;
