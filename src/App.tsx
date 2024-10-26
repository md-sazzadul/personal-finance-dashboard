import "./App.css";
import AccountSummary from "./components/AccountSummary";
import ExpenseBreakdown from "./components/ExpenseBreakdown";

function App() {
  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <AccountSummary />
      <ExpenseBreakdown />
    </div>
  );
}

export default App;
