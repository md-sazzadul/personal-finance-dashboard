import { userData } from "../data/demoData";
import styles from "../styles/AccountSummary.module.css";

const AccountSummary = () => {
  return (
    <div className={styles.summary}>
      <h2>Account Summary</h2>
      <p>Balance: ${userData.accountBalance.toFixed(2)}</p>
      <p>Monthly Income: ${userData.monthlyIncome.toFixed(2)}</p>
      <p>Monthly Expenses: ${userData.monthlyExpenses.toFixed(2)}</p>
    </div>
  );
};

export default AccountSummary;
