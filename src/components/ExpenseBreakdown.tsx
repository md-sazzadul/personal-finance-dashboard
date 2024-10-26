import { transactions } from "../data/demoData";
import styles from "../styles/ExpenseBreakdown.module.css";

const ExpenseBreakdown = () => {
  const expenseTotal = transactions
    .filter((tx) => tx.type === "Expense")
    .reduce((total, tx) => total + Math.abs(tx.amount), 0);

  return (
    <div className={styles.breakdown}>
      <h2>Expense Breakdown</h2>
      <p>Total Expenses: ${expenseTotal.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseBreakdown;
