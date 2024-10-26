import "./App.css";
import AccountSummary from "./components/AccountSummary";
import ExpenseBreakdown from "./components/ExpenseBreakdown";
import GoalsTracker from "./components/GoalsTracker";
import RecentTransactions from "./components/RecentTransactions";

function App() {
  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <AccountSummary />
      <ExpenseBreakdown />
      <GoalsTracker />
      <RecentTransactions />
    </div>
  );
}

export default App;
