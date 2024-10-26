import "./App.css";
import AccountSummary from "./components/AccountSummary";
import ExpenseBreakdown from "./components/ExpenseBreakdown";
import GoalsTracker from "./components/GoalsTracker";

function App() {
  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <AccountSummary />
      <ExpenseBreakdown />
      <GoalsTracker />
    </div>
  );
}

export default App;
