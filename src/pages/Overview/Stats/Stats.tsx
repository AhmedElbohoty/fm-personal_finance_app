import data from "utils/data.json";

// CSS prefix: .ovstats-
import "./style.css";

function Stats() {
  // TODO:
  const { current, income, expenses } = data.balance;

  return (
    <section className="ovstats-sect">
      <div className="ovstats-card ovstats-current">
        <h3 className="ovstats-h3">Current Balance</h3>
        <p className="ovstats-value">$4,836.00</p>
      </div>
      <div className="ovstats-card">
        <h3 className="ovstats-h3">Income</h3>
        <p className="ovstats-value">$3,814.25</p>
      </div>
      <div className="ovstats-card">
        <h3 className="ovstats-h3">Expenses</h3>
        <p className="ovstats-value">$1,700.50</p>
      </div>
    </section>
  );
}

export default Stats;
