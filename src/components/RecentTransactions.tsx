import { transactions } from "../data/demoData";
import styles from "../styles/RecentTransactions.module.css";

const RecentTransactions = () => (
  <div className={styles.transactions}>
    <h2>Recent Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.id}>
            <td>{tx.date}</td>
            <td>{tx.category}</td>
            <td
              className={tx.type === "Expense" ? styles.expense : styles.income}
            >
              {tx.amount < 0
                ? `-$${Math.abs(tx.amount).toFixed(2)}`
                : `$${tx.amount.toFixed(2)}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentTransactions;
