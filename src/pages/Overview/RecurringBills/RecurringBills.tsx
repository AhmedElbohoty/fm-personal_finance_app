import data from "utils/data.json";

// CSS prefix: .recurring-bills
import "./style.css";

function RecurringBills() {
  const recurringTransactions = data.transactions.filter(
    (t) => t.recurring && t.amount < 0
  );
  const paidBills = recurringTransactions.reduce(
    (sum, t) => sum + Math.abs(t.amount),
    0
  );
  const upcomingBills = recurringTransactions.reduce(
    (sum, t) => sum + Math.abs(t.amount),
    0
  );
  const dueSoon = upcomingBills / 2; // Assuming half of the upcoming bills are due soon

  return (
    <section className="recurring-bills-section">
      <div className="section-header">
        <h2>Recurring Bills</h2>
        <a href="/recurring-bills">See Details ▶</a>
      </div>
      <div className="bills-summary">
        <div className="bill-item">
          <span>Paid Bills</span>
          <span>${paidBills.toFixed(2)}</span>
        </div>
        <div className="bill-item">
          <span>Total Upcoming</span>
          <span>${upcomingBills.toFixed(2)}</span>
        </div>
        <div className="bill-item">
          <span>Due Soon</span>
          <span>${dueSoon.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}

export default RecurringBills;
