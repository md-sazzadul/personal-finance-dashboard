export const userData = {
  id: "user123",
  name: "John Doe",
  email: "johndoe@example.com",
  profileImage: "https://example.com/profile-image.jpg",
  accountBalance: 12500.5,
  monthlyIncome: 4000.0,
  monthlyExpenses: 2600.0,
  goals: [
    {
      id: "goal1",
      title: "Emergency Fund",
      targetAmount: 5000,
      savedAmount: 3500,
    },
    {
      id: "goal2",
      title: "Vacation Fund",
      targetAmount: 3000,
      savedAmount: 800,
    },
    { id: "goal3", title: "New Laptop", targetAmount: 1200, savedAmount: 500 },
  ],
};

export const transactions = [
  {
    id: "txn1",
    date: "2024-01-10",
    category: "Groceries",
    amount: -150.75,
    type: "Expense",
  },
  {
    id: "txn2",
    date: "2024-01-12",
    category: "Salary",
    amount: 4000.0,
    type: "Income",
  },
  {
    id: "txn3",
    date: "2024-01-15",
    category: "Rent",
    amount: -1200.0,
    type: "Expense",
  },
  {
    id: "txn4",
    date: "2024-01-18",
    category: "Utilities",
    amount: -200.0,
    type: "Expense",
  },
  {
    id: "txn5",
    date: "2024-01-20",
    category: "Entertainment",
    amount: -75.5,
    type: "Expense",
  },
  {
    id: "txn6",
    date: "2024-01-25",
    category: "Groceries",
    amount: -160.0,
    type: "Expense",
  },
  {
    id: "txn7",
    date: "2024-01-28",
    category: "Freelance",
    amount: 500.0,
    type: "Income",
  },
  {
    id: "txn8",
    date: "2024-02-01",
    category: "Transport",
    amount: -60.0,
    type: "Expense",
  },
];
