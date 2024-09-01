import data from "utils/data.json";

// CSS prefix: .balance-sect-
import "./style.css";

function Balance() {
  const { current, income, expenses } = data.balance;

  return (
    <section className="balance-sect">
      <div className="balance-sect-current">
        <h2>Current Balance</h2>
        <p className="balance">${current.toFixed(2)}</p>
      </div>
      <div className="income-expense">
        <div>
          <h3>Income</h3>
          <p>${income.toFixed(2)}</p>
        </div>
        <div>
          <h3>Expenses</h3>
          <p>${expenses.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}

export default Balance;
