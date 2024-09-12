import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";

import data from "utils/data.json";
import { formatNumber } from "utils/helpers";

// CSS prefix: .recurbills
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
    <Card>
      <section className="recurbills-section">
        <CardHeader
          title="Recurring Bills"
          linkPath="/recurring-bills"
          linkText="See Details"
        />
        <ul className="recurbills-list">
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Paid Bills</p>
            <p className="recurbills-item-value">${formatNumber(paidBills)}</p>
          </li>
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Total Upcoming</p>
            <p className="recurbills-item-value">
              ${formatNumber(upcomingBills)}
            </p>
          </li>
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Due Soon</p>
            <p className="recurbills-item-value">${formatNumber(dueSoon)}</p>
          </li>
        </ul>
      </section>
    </Card>
  );
}

export default RecurringBills;
