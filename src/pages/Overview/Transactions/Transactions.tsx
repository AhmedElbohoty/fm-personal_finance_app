import data from "utils/data.json";

// CSS prefix: .transactions-section-
import "./style.css";

function Transactions() {
  const transactions = data.transactions.slice(0, 5);

  return (
    <section className="transactions-section">
      <div className="transactions-section-header">
        <h2>Transactions</h2>
        <a href="/transactions">View All ▶</a>
      </div>
      <div className="transactions-list">
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <div className="transaction-info">
              <span className="transaction-name">{transaction.name}</span>
              <span className="transaction-date">
                {new Date(transaction.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <span
              className={`transaction-amount ${
                transaction.amount > 0 ? "income" : "expense"
              }`}
            >
              {transaction.amount > 0 ? "+" : ""}$
              {Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Transactions;
