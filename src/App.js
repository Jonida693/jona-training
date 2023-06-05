import React from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: " Paper",
      amount: 94.67,
      date: new Date(2021, 2, 28),
    },

    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 27),
    },

    {
      id: "e3",
      title: "New TV",
      amount: 294.67,
      date: new Date(2021, 2, 21),
    },
    {
      id: "e3",
      title: "This Week",
      amount: 24.67,
      date: new Date(2021, 2, 29),
    },
  ];

  const addExpenseHandeler = (expense) => {
    console.log("In app.js");
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
};

//  React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Lets get started"),
//   React.createElement(Expenses, { items: expenses })
// );

//   (
//  <div>
//   <h2>Let's get started </h2>
//   <Expenses items={expenses}
// />
// </div>
//   );

export default App;
