import style from "./ExpenseTracker.module.css";

const ExpenseList = ({ expenseList, onDelete }) => {
  const handleDeleteClick = (deleteId) => {
    onDelete(deleteId);
  };
  return (
    <div className={style.expenseListSection}>
      <h2>Expenses</h2>
      {expenseList.map((item) => {
        const { date, amount, category, id } = item;
        return (
          <div className={style.expenseItem} key={id}>
            <p>
              {date} - ${amount} - {category}
            </p>
            <button onClick={() => handleDeleteClick(id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
