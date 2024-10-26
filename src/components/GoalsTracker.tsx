import { userData } from "../data/demoData";
import styles from "../styles/GoalsTracker.module.css";

const GoalsTracker = () => (
  <div className={styles.tracker}>
    <h2>Goals Tracker</h2>
    {userData.goals.map((goal) => (
      <div key={goal.id} className={styles.goal}>
        <p>
          {goal.title}: ${goal.savedAmount} / ${goal.targetAmount}
        </p>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{
              width: `${(goal.savedAmount / goal.targetAmount) * 100}%`,
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default GoalsTracker;
